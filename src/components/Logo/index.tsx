import React from 'react';
import styles from './styles.module.scss';

const Logo: React.FC = () => (
  <div className={styles.container}>
    <p className={styles.logo}>
      <span className={styles.initial}>S</span>
      <span className={styles.small}>igmailer</span>
    </p>
    <p className={styles.desc}>Enjoyable Email Signature Editor</p>
  </div>
);
export default Logo;
