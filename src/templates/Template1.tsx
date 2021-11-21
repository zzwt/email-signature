import React from 'react';
import { ContentType, IconDisplayType, TemplateProps } from '../types';
import { iconStorageMapping } from '../components/SocialIcons';
import { imageConfigToStyle, normalizeLink, stripLinkProtocol } from '../utils';

const Template1: React.FC<TemplateProps> = ({ config }) => {
  const { fields, meta, social } = config;
  const renderFields = () =>
    fields
      .filter((_: any, i: number) => i > 1)
      .map((field: any, index: number) => {
        const { label, content } = field;
        if (content.value.trim().length > 0) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
              <td style={{ padding: 0 }}>
                <div
                  style={{
                    minWidth: '200px',
                    // color: field.label.color.value,
                  }}
                >
                  {label.display.value && label.value.trim().length > 0 && (
                    <span
                      style={{
                        display: 'inline-block',
                        color: label.color.value
                          ? label.color.value
                          : meta.text,
                        textDecoration: 'none',
                        fontSize: label.size.value,
                        marginRight: 5,
                        fontWeight: label.bold.value ? 'bold' : 'normal',
                      }}
                    >
                      {label.value}
                    </span>
                  )}
                  {content.value.trim().length > 0 &&
                    (content.type.value === ContentType.TEXT ? (
                      <span
                        style={{
                          color: content.color.value
                            ? content.color.value
                            : meta.text,
                          fontSize: content.size.value,
                          fontWeight: content.bold.value ? 'bold' : 'normal',
                        }}
                      >
                        {content.value}
                      </span>
                    ) : (
                      <a
                        href={
                          content.type.value === ContentType.EMAIL
                            ? `mailto:${content.value}`
                            : normalizeLink(content.value)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: content.color.value
                            ? content.color.value
                            : meta.text,
                          textDecoration: 'none',
                          fontSize: content.size.value,
                          fontWeight: content.bold.value ? 'bold' : 'normal',
                        }}
                      >
                        {stripLinkProtocol(content.value)}
                      </a>
                    ))}
                </div>
              </td>
            </tr>
          );
        }
        return null;
      });

  const getSocialIconStyle = (
    iconColor: string | undefined,
    src: string
  ): { [key: string]: string } => {
    const defaultStyle = {
      display: 'inline-block',
      boxSizing: 'content-box',
      marginRight: '5px',
      backgroundColor: iconColor || meta.primary,
      fontSize: '0',
      position: 'relative',
      borderRadius: '0',
      width: '20px',
      height: '20px',
      backgroundImage: `url(${src})`,
      backgroundSize: '20px 20px',
      border: 'none',
    };
    if (meta.socialIconType === IconDisplayType.FILL_CIRCLE) {
      defaultStyle.borderRadius = '50%';
    }
    if (meta.socialIconType === IconDisplayType.FILL_SQUARE) {
      defaultStyle.borderRadius = '2PX';
    }
    if (meta.socialIconType === IconDisplayType.OUTLINE_CIRCLE) {
      defaultStyle.width = '16.4px';
      defaultStyle.height = '16.4px';
      defaultStyle.backgroundSize = '16.4px 16.4px';
      defaultStyle.borderRadius = '50%';
      defaultStyle.border = `1.8px solid ${iconColor || meta.primary}`;
    }
    if (meta.socialIconType === IconDisplayType.OUTLINE_SQUARE) {
      defaultStyle.width = '16.4px';
      defaultStyle.height = '16.4px';
      defaultStyle.backgroundSize = '16.4px 16.4px';
      defaultStyle.borderRadius = '2PX';
      defaultStyle.border = `1.8px solid ${iconColor || meta.primary}`;
    }
    if (meta.socialIconType === IconDisplayType.LINE) {
      defaultStyle.marginRight = '0';
    }
    return defaultStyle;
  };

  const getSocialIconLink = (icon: string) => {
    if (
      meta.socialIconType === IconDisplayType.FILL_CIRCLE ||
      meta.socialIconType === IconDisplayType.FILL_SQUARE
    ) {
      return iconStorageMapping[`${icon}-fill`];
    }
    return iconStorageMapping[`${icon}-outline`];
  };

  const renderSocialIcons = () =>
    social.map((socialIcon: any, index: number) => (
      // const Icon = iconMapping[socialIcon.icon];
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        href={normalizeLink(socialIcon.link)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...getSocialIconStyle(
            socialIcon.color,
            getSocialIconLink(socialIcon.icon)
          ),
        }}
      />
    ));

  return (
    <div
      id="signature"
      style={{
        width: 450,
        overflow: 'hidden',
        fontFamily: meta.fontFamily,
      }}
    >
      <table
        width="450"
        cellSpacing="0"
        cellPadding="0"
        style={{
          background: meta.background,
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '20px 0' }}>
              <table>
                <tr>
                  {/* Avatar */}
                  <td
                    width="140"
                    style={{ padding: 5 }}
                    valign="middle"
                    // className="demo"
                  >
                    {/* <canvas
              id="myCanvas"
              width="90"
              height="90"
              style={{ display: 'none', verticalAlign: 'bottom' }}
            ></canvas> */}

                    {
                      // <div style={{ width: 80, height: 80 }}>
                      <div
                        // onError={(e) => (e.target.src = 'unnamed.png')}
                        // src={config.avatar.image}
                        // width="80px"
                        // height="80px"
                        style={
                          imageConfigToStyle(config.images[0], 90)
                          // {
                          // verticalAlign: 'bottom',
                          // position: 'absolute',
                          // flexShrink: 1,
                          // position: 'absolute',
                          // display: 'inline-block',
                          // clip: 'rect(98px, 465px, 398px, 165px)',
                          // objectFit: 'cover',
                          // backgroundRepeat: 'no-repeat',
                          // clip: 'rect(98px, 465px, 398px, 165px)',
                          // }
                        }
                      />
                      // </div>
                    }

                    {/* {!finalImage && (
              <div>
                <Dropzone
                  onDrop={(file) => {
                    if (file[0].type.includes('image/')) {
                      let that = this;
                      var reader = new FileReader();
                      reader.readAsDataURL(file[0]);
                      reader.onload = function () {
                        that.setState({ image: reader.result });
                      };
                      reader.onerror = function (error) {};
                    } else {
                      alert('Please upload a valid Image file!');
                    }
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <ReactAvatarEditor
                          ref={this.setEditorRef}
                          image={this.state.image}
                          width={90}
                          height={90}
                          color={[255, 255, 255, 0.6]} // RGBA
                          scale={this.state.scrollValue}
                          rotate={0}
                          borderRadius={90}
                          position={this.state.position}
                          onDragEnd={(e) => e.stopPropagation()}
                          onMouseUp={(e) => e.stopPropagation()}
                          onPositionChange={(e) =>
                            this.setState({ position: { x: e.x, y: e.y } })
                          }
                        />
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            )} */}

                    {/* import image from url */}
                    {/* <input
              type="text"
              style={{
                margin: 5,
                borderRadius: 3,
                border: '1px solid gray',
                padding: 5,
                fontSize: 10,
                display: isFinished ? 'none' : 'block',
              }}
              placeholder="Enter Image URL/Link"
              onChange={(result) => {
                this.toDataURL(result.target.value, (data) => {
                  this.setState({ image: data });
                });
              }}
            /> */}
                    {/* end of import image from url */}
                  </td>

                  {/* Info Fields */}
                  <td
                    style={{
                      padding: '0 20px',
                      textAlign: 'left',
                      borderLeft: '2px solid grey',
                    }}
                    valign="middle"
                  >
                    <table>
                      <tbody>
                        <tr>
                          {/* Name */}
                          <td
                            style={{
                              fontSize: fields[0].content.size.value,
                              fontWeight: fields[0].content.bold.value
                                ? 'bold'
                                : 'normal',
                              display: 'block',
                              color: fields[0].content.color?.value
                                ? fields[0].content.color?.value
                                : meta.text,
                            }}
                          >
                            <label>{fields[0].content.value}</label>
                          </td>
                        </tr>
                        {/* Title */}
                        <tr>
                          <td style={{ padding: 0 }}>
                            <div
                              style={{
                                fontSize: fields[1].content.size.value,
                                minWidth: '200px',
                                fontWeight: fields[1].content.bold.value
                                  ? 'bold'
                                  : 'normal',
                                color: fields[1].content.color?.value
                                  ? fields[1].content.color?.value
                                  : meta.text,
                              }}
                            >
                              <label>{fields[1].content.value}</label>
                            </div>
                          </td>
                        </tr>
                        {/* Website */}
                        {renderFields()}
                        {/* Social Icons */}
                        <tr>
                          <td style={{ padding: 0 }}>
                            <div
                              style={{
                                marginTop: 2,
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {renderSocialIcons()}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Template1;
