import React, { useState } from 'react';
import { Switch } from 'antd';
import styles from './styles.module.scss';
import classNames from 'classnames';
interface TypeSelectorProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void | null;
  renderProps?: (selection: string) => React.ReactNode | null;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({
  label,
  options,
  onChange,
  renderProps,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderOptions = () =>
    options.map((option: string, i: number) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        key={i}
        className={classNames(styles.btn, {
          [styles.btn_active]: i === activeIndex,
        })}
        onClick={() => {
          setActiveIndex(i);
          onChange && onChange(options[i]);
        }}
      >
        {option}
      </div>
    ));

  return (
    <>
      <div className={styles.container}>
        <span>{label}</span>
        {renderOptions()}
      </div>
      {renderProps && (
        <div className={styles.container_selection}>
          {renderProps(options[activeIndex])}
        </div>
      )}
    </>
  );
};

TypeSelector.defaultProps = {
  onChange: undefined,
  renderProps: undefined,
};
export default TypeSelector;
