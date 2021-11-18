import React from 'react';
import styles from './styles.module.scss';

const Footer: React.FC = () => (
  <div className={styles.container}>
    <span>Sigmailer</span>
    <span>|</span>
    <a href="mailto:support@dayshorts.com">Contact Us</a>
  </div>
);
export default Footer;
