import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface TypeSelectorProps {
  label: string;
  // options: string[];
  active: string;
  type: { [key: string]: string };
  onChange?: (value: string) => void | null;
  renderProps?: (selection: string) => React.ReactNode | null;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({
  label,
  active,
  type,
  onChange,
  renderProps,
}) => {
  const renderOptions = () =>
    Object.values(type).map((option: string, i: number) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        className={classNames(styles.btn, {
          [styles.btn_active]: option === active,
        })}
        onClick={() => onChange && onChange(option)}
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
        <div className={styles.container_selection}>{renderProps(active)}</div>
      )}
    </>
  );
};

TypeSelector.defaultProps = {
  onChange: undefined,
  renderProps: undefined,
};
export default TypeSelector;
