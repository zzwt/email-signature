import React from 'react';
import avatar from '../../public/avatar-1634807028724.PNG';
import Image from 'next/image';
import { ContentType, IconDisplayType, TemplateProps } from '../types';
import { IconType, iconMapping } from '../components/SocialIcons';
import { imageConfigToStyle, normalizeLink, stripLinkProtocol } from '../utils';
import react from 'react';
const Template1: React.FC<TemplateProps> = ({ config }) => {
  const { fields, meta, social } = config;
  const renderFields = () =>
    fields
      .filter((_: any, i: number) => i > 1)
      .map((field: any, index: number) => {
        const { label, content } = field;
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
                {label.display.value && (
                  <span
                    style={{
                      display: 'inline-block',
                      color: label.color.value,
                      textDecoration: 'none',
                      fontSize: label.size.value,
                      marginRight: 5,
                      fontWeight: label.bold.value ? 'bold' : 'normal',
                    }}
                  >
                    {label.value}
                  </span>
                )}
                {content.type.value === ContentType.TEXT ? (
                  <span
                    style={{
                      color: content.color.value,
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
                      color: content.color.value,
                      textDecoration: 'underline',
                      fontSize: content.size.value,
                      fontWeight: content.bold.value ? 'bold' : 'normal',
                    }}
                  >
                    {stripLinkProtocol(content.value)}
                  </a>
                )}
              </div>
            </td>
          </tr>
        );
      });

  const getSocialIconStyle = (iconColor: string | undefined) => {
    if (meta.socialIconType === IconDisplayType.FILL) {
      return {
        display: 'inline-flex',
        background: iconColor || meta.primary,
        color: 'white',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginRight: 5,
        fontSize: 11,
      };
    }
    if (meta.socialIconType === IconDisplayType.LINE) {
      return {
        display: 'inline-flex',
        color: iconColor || meta.primary,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: 14,
      };
    }
    if (meta.socialIconType === IconDisplayType.OUTLINE) {
      return {
        display: 'inline-flex',
        color: iconColor || meta.primary,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginRight: 3,
        fontSize: 11,
        border: `2px solid ${iconColor || meta.primary}`,
      };
    }
    return {};
  };

  const renderSocialIcons = () =>
    social.map((socialIcon: any, index: number) => {
      const Icon = iconMapping[socialIcon.icon];
      return (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={getSocialIconStyle(socialIcon.color)}
          href={normalizeLink(socialIcon.link)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
      );
    });

  return (
    <div id="signature">
      <table
        // width="600"
        // border="10"
        cellSpacing="0"
        cellPadding="0"
        // bgcolor="red"
        style={{ background: meta.background }}
      >
        <tbody>
          <tr>
            {/* Avatar */}
            <td
              width="100"
              style={{ padding: 15 }}
              valign="middle"
              className="demo"
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
                    imageConfigToStyle(config.images[0], 80)
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
                padding: '10px',
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
                          color: fields[1].content.color.value,
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
        </tbody>
      </table>
    </div>
  );
};

export default Template1;
