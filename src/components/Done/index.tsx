import React from 'react';
import { animated, useSpring } from 'react-spring';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import styles from './styles.module.scss';

const Done: React.FC = () => {
  const animatedProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div className={styles.container} style={animatedProps}>
      <h1>Done</h1>
      <FaCheckCircle className={styles.icon} />
      <h3>
        Feel free to go back to any of previous steps to make a change. Thank
        you for using our service. If you any questions, send us an email on{' '}
        <a href="mailto: xxx@gmail.com">xxx@gmail.com</a>
      </h3>
    </animated.div>
  );
};
export default Done;
