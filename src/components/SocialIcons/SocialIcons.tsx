import React, { useState } from 'react';
import classNames from 'classnames';
import ElementEditor from '../ElementEditor';
import { TemplateProps } from '../../types';
import styles from './styles.module.scss';
import { iconList } from './iconList';
import { IconType } from './IconType';
import { iconMapping } from './iconMapping';

interface SocialIconsProps {
  active: IconType;
  onChange: (val: IconType) => void;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
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
          onClick={() => onChange(icon)}
        >
          <Icon />
        </div>
      );
    })}
  </div>
);
