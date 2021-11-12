import React from 'react';
import styles from './styles.module.scss';

// interface ColorPickerProps {
//   color: string;
//   onColorChange: (value: string) => void;
// }

const Guide: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>How to use it</h1>
      <h3>1. Click the button on the left to copy.</h3>
      <h3>2. Paste it to your email client.</h3>
      <h4>
        * Please note that there maybe limits of allowed characters on your
        email client. If that's the case, try reducing the number of social
        media icons to minimize signature size.
      </h4>
    </div>
  );
};
export default Guide;
