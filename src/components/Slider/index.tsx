import React, { useState } from 'react';
import { Slider as AntdSlider } from 'antd';

import styles from './styles.module.scss';
// import classNames from 'classnames';
interface SliderProps {
  label: string;
  initialValue: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  label,
  initialValue,
  min,
  max,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <div className={styles.container}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className={styles.container_slider}>
        <AntdSlider
          tooltipVisible={false}
          min={min}
          max={max}
          value={value}
          onChange={(val: number) => {
            setValue(val);
            onChange(val);
          }}
        />
      </div>
    </>
  );
};
export default Slider;
