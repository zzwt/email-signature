import React from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import CSS from 'csstype';
import styles from './styles.module.scss';

interface ColorPickerProps {
  color: string;
  on?: boolean;
  cover?: boolean;
  onColorChange: (value: string) => void;
  handleClose: () => void;
  style?: CSS.Properties;
}

const ColorEditor: React.FC<ColorPickerProps> = ({
  color,
  on,
  cover,
  onColorChange,
  handleClose,
  style,
}) => (
  <div className={styles.container}>
    {on && (
      <div className={styles.color_picker} style={style}>
        <HexColorPicker
          color={color}
          onChange={(newColor: string) => {
            onColorChange(newColor);
          }}
          className={styles.small_react_colorful}
        />
        <HexColorInput
          color={color}
          onChange={(newColor: string) => {
            onColorChange(newColor);
          }}
        />
      </div>
    )}
    {on && cover && <div className={styles.cover} onClick={handleClose} />}
  </div>
);
ColorEditor.defaultProps = {
  on: true,
  cover: true,
  style: {},
};
export default ColorEditor;
