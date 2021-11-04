import React, { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styles from './styles.module.scss';

interface ColorPickerProps {
  initialColor: string;
  onColorChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColor,
  onColorChange,
}) => {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  const [pickerColor, setPickerColor] = useState(initialColor);

  const handleClose = () => {
    setToggleColorPicker(false);
  };

  return (
    <div className={styles.container}>
      <span style={{ verticalAlign: 'middle' }}>Color</span>
      <span
        style={{
          background: pickerColor,
        }}
        className={styles.display_color}
        onClick={() => {
          console.log('clocked');
          setToggleColorPicker(!toggleColorPicker);
        }}
      ></span>
      {toggleColorPicker && (
        <div className={styles.color_picker}>
          <HexColorPicker
            color={pickerColor}
            onChange={(color) => {
              setPickerColor(color);
              onColorChange(color);
            }}
            className={styles.small_react_colorful}
          />
          <HexColorInput
            color={pickerColor}
            onChange={(color: string) => {
              setPickerColor(color);
              onColorChange(color);
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
