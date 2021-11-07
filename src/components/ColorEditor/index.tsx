import React, { useState } from 'react';
import ColorPicker from '../ColorPicker';
import styles from './styles.module.scss';

interface ColorPickerProps {
  color: string;
  onColorChange: (value: string) => void;
}

const ColorEditor: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);

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
      />
      <ColorPicker
        color={color}
        on={toggleColorPicker}
        handleClose={handleClose}
        onColorChange={onColorChange}
        style={{
          position: 'absolute',
          top: '-250%',
          left: '100px',
        }}
        cover
      />
    </div>
  );
};
export default ColorEditor;
