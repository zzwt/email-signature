import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { iconList } from './iconList';
import { IconType } from './IconType';
import { iconMapping } from './iconMapping';

interface SocialIconsProps {
  color: string;
  active: IconType;
  onChange: (val: IconType) => void;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
  color,
  active,
  onChange,
}) => (
  <div className={styles.container}>
    {iconList.map((icon: IconType, index: number) => {
      const Icon = iconMapping[icon];
      return (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames(styles.icon, {
            [styles.icon_active]: active === icon,
          })}
          style={{
            color: active === icon ? color : '',
            border: active === icon ? `1px solid ${color}` : '',
          }}
          onClick={() => onChange(icon)}
        >
          <Icon />
        </div>
      );
    })}
  </div>
);
