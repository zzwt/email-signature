import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './styles.module.scss';

const Guide: React.FC = () => {
  const animatedProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div className={styles.container} style={animatedProps}>
      <h1>How to use it</h1>
      <h3>1. Click the button on the left to copy.</h3>
      <h3>2. Paste it to your email client.</h3>
      <h4>
        * Please note that there maybe limits of allowed characters on your
        email client. If that's the case, try reducing the number of social
        media icons to minimize signature size.
      </h4>
    </animated.div>
  );
};
export default Guide;
