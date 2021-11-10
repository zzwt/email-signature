import React from 'react';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import styles from './styles.module.scss';
// interface ColorPickerProps {
//   color: string;
//   onColorChange: (value: string) => void;
// }

const Done: React.FC = () => {
  return (
    <div className={styles.container}>
      <FaCheckCircle className={styles.icon} />
    </div>
  );
};
export default Done;
