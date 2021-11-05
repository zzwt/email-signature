import React, { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styles from './styles.module.scss';

interface ColorPickerProps {
  color: string;
  onColorChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  // const [pickerColor, setPickerColor] = useState(initialColor);

  const handleClose = () => {
    setToggleColorPicker(false);
  };

  return (
    <div className={styles.container}>
      <span style={{ verticalAlign: 'middle' }}>Color</span>
      <span
        style={{
          background: color,
        }}
        className={styles.display_color}
        onClick={() => {
          setToggleColorPicker(!toggleColorPicker);
        }}
      ></span>
      {toggleColorPicker && (
        <div className={styles.color_picker}>
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
      {toggleColorPicker && (
        <div className={styles.cover} onClick={handleClose} />
      )}
    </div>
  );
};
export default ColorPicker;
