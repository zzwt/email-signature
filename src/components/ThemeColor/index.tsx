import React, { useMemo, useState } from 'react';
import ElementEditor from '../ElementEditor';
import { TemplateProps } from '../../types';
import styles from './styles.module.scss';
import ColorPicker from '../ColorPicker';
import classNames from 'classnames';

interface ThemeColorProps extends TemplateProps {
  changeMeta: (key: string, val: string) => void;
}

const ThemeColor: React.FC<ThemeColorProps> = ({ config, changeMeta }) => {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  const [metaKey, setMetaKey] = useState('primary');
  const metaValue = useMemo(() => config.meta[metaKey], [metaKey, config.meta]);

  const handleClose = () => {
    setToggleColorPicker(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.theme_color}>
        <h3>Click Palette to Change Color</h3>
        <div className={styles.top}>
          <div className={styles.top_element}>Primary</div>
          <div className={styles.top_element}>Background</div>
          <div className={styles.top_element}>Text</div>
        </div>
        <div className={styles.bottom}>
          <div
            className={classNames(styles.bottom_element, styles.primary)}
            style={{ background: config.meta.primary }}
            onClick={() => {
              setMetaKey('primary');
              setToggleColorPicker(!toggleColorPicker);
            }}
          />
          <div
            className={classNames(styles.bottom_element)}
            style={{ background: config.meta.background }}
            onClick={() => {
              setMetaKey('background');
              setToggleColorPicker(!toggleColorPicker);
            }}
          />
          <div
            className={classNames(styles.bottom_element, styles.text)}
            style={{ background: config.meta.text }}
            onClick={() => {
              setMetaKey('text');
              setToggleColorPicker(!toggleColorPicker);
            }}
          />
          <ColorPicker
            handleClose={handleClose}
            on={toggleColorPicker}
            color={metaValue}
            onColorChange={(val) => {
              changeMeta(metaKey, val);
            }}
            style={{
              position: 'absolute',
              left: '30%',
              top: '-210%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ThemeColor;
