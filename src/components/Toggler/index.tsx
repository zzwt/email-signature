import React from 'react';
import { Switch } from 'antd';
import styles from './styles.module.scss';

interface TogglerProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean, event: Event) => void;
}

const Toggler: React.FC<TogglerProps> = ({ label, checked, onChange }) => (
  <div className={styles.container}>
    <span>{label}</span>
    <Switch
      checkedChildren="Yes"
      unCheckedChildren="No"
      defaultChecked={checked}
      onChange={onChange}
    />
  </div>
);
export default Toggler;
