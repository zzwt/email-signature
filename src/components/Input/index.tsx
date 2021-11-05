import React, { useState } from 'react';
import { Slider as AntdSlider } from 'antd';

import styles from './styles.module.scss';
// import classNames from 'classnames';
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className={styles.container}>
    <div className={styles.label}>{label}</div>
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);
export default Input;
