import React from 'react';
import avatar from '../../public/avatar-1634807028724.PNG';
import Image from 'next/image';
import { TemplateProps } from '../types';

const Template1: React.FC<TemplateProps> = ({ config }) => {
  const renderFields = () =>
    config.fields
      .filter((_: any, i: number) => i > 1)
      .map((field: any, index: number) => {
        const { label, content } = field;
        return (
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
                <a
                  href={`https://www.google.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: content.color.value,
                    textDecoration: 'none',
                    fontSize: content.size.value,
                    fontWeight: content.bold.value ? 'bold' : 'normal',
                  }}
                >
                  {content.value}
                </a>
              </div>
            </td>
          </tr>
        );
      });
  return (
    <table
      // width="600"
      // border="10"
      cellSpacing="0"
      cellPadding="0"
      // bgcolor="red"
      style={{ background: 'white' }}
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
              <Image
                // onError={(e) => (e.target.src = 'unnamed.png')}
                src={avatar}
                width="90"
                height="90"
                alt=""
                // style={{
                //   verticalAlign: 'bottom',
                //   background: 'black',
                //   borderRadius: 50,
                // }}
              />
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
                      fontSize: config.fields[0].content.size.value,
                      fontWeight: config.fields[0].content.bold.value
                        ? 'bold'
                        : 'normal',
                      display: 'block',
                      color: config.fields[0].content.color.value,
                    }}
                  >
                    <label>{config.fields[0].content.value}</label>
                  </td>
                </tr>
                {/* Title */}
                <tr>
                  <td style={{ padding: 0 }}>
                    <div
                      style={{
                        fontSize: config.fields[1].content.size.value,
                        minWidth: '200px',
                        fontWeight: config.fields[1].content.bold.value
                          ? 'bold'
                          : 'normal',
                        color: config.fields[1].content.color.value,
                      }}
                    >
                      <label>{config.fields[1].content.value}</label>
                    </div>
                  </td>
                </tr>
                {/* Website */}
                {renderFields()}
              </tbody>
            </table>
          </td>
        </tr>
        {/* <tr>
          <td colSpan="2" width="600" style={{ padding: 0 }}>
            <div
              style={{
                display: 'flex',
                padding: '15px 15px 10px 15px',
                alignItems: 'center',
                borderTop: '1px solid rgb(0 0 0 / 10%)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {finalImage && (
                  <img
                    onError={(e) => (e.target.src = this.state.logo)}
                    src={this.state.logo}
                    height="27"
                    alt="Logo"
                    style={{
                      verticalAlign: 'bottom',
                    }}
                  />
                )}

                {!finalImage && (
                  <div>
                    <Dropzone
                      onDrop={(file) => {
                        if (file[0].type.includes('image/')) {
                          let that = this;
                          var reader = new FileReader();
                          reader.readAsDataURL(file[0]);
                          reader.onload = function () {
                            that.setState({ logo: reader.result });
                          };
                          reader.onerror = function (error) {};
                        } else {
                        }
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img
                              alt="Logo"
                              src={this.state.logo}
                              height="27px"
                            />
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                )}
              </span>
            </div>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Template1;
