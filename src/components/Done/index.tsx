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
      <h1>Done</h1>
      <FaCheckCircle className={styles.icon} />
      <h3>
        Feel free to go back to any of previous steps to make a change. Thank
        you for using our service. If you any questions, send us an email on{' '}
        <a href="mailto: xxx@gmail.com">xxx@gmail.com</a>
      </h3>
    </div>
  );
};
export default Done;
