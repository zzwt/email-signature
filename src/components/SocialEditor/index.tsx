import React, { useState, useCallback } from 'react';
import { AiFillMinusCircle } from '@react-icons/all-files/ai/AiFillMinusCircle';
import { IoAddCircle } from '@react-icons/all-files/io5/IoAddCircle';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { SocialIcons, iconMapping, iconList, IconType } from '../SocialIcons';

interface SocialEditorProps {
  socialIcons: any[];
  changeSocial: (index: number, newVal: any, op: number) => void;
}

const SocialEditor: React.FC<SocialEditorProps> = ({
  socialIcons,
  changeSocial,
}) => {
  const [activeSocial, setActiveSocial] = useState(() => {
    if (socialIcons && socialIcons.length > 0) return 0;
    return -1;
  });

  const getFirstUnusedIcon = useCallback(() => {
    for (let index = 0; index < iconList.length; index += 1) {
      const found = socialIcons
        .map((socialIcon: any) => socialIcon.icon)
        .findIndex((i) => i === iconList[index]);
      console.log(found);
      if (found === -1) {
        return iconList[index];
      }
    }
    return iconList[0];
  }, [socialIcons]);

  const renderAddedSocialIcons = () =>
    socialIcons.map((socialIcon: any, index: number) => {
      const Icon = iconMapping[socialIcon.icon];

      return (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames(styles.added_icon, {
            [styles.added_icon_active]: activeSocial === index,
          })}
          onClick={() => {
            setActiveSocial(index);
          }}
        >
          <Icon />
          {activeSocial === index && (
            <AiFillMinusCircle
              className={styles.delete}
              onClick={(e) => {
                e.stopPropagation();
                if (activeSocial === socialIcons.length - 1) {
                  setActiveSocial((prev) => prev - 1);
                }
                changeSocial(activeSocial, null, -1);
              }}
            />
          )}
        </div>
      );
    });
  return (
    <div className={styles.container}>
      <div className={styles.added_icons_container}>
        <div className={styles.added_icons}>{renderAddedSocialIcons()}</div>
        {socialIcons.length < 5 && (
          <IoAddCircle
            className={styles.new_icon}
            onClick={(e) => {
              e.stopPropagation();
              changeSocial(
                -1,
                {
                  icon: getFirstUnusedIcon(),
                  link: '',
                  color: 'red',
                },
                1
              );
              setActiveSocial(socialIcons.length);
            }}
          />
        )}
      </div>

      <div className={styles.all_icons}>
        <SocialIcons
          active={socialIcons[activeSocial]?.icon}
          onChange={(val) => {
            changeSocial(
              activeSocial,
              {
                ...socialIcons[activeSocial],
                icon: val,
              },
              0
            );
          }}
        />
      </div>
      <div className={styles.icon_link}>
        <span>Link</span>
        {activeSocial >= 0 && (
          <input
            type="text"
            value={socialIcons[activeSocial]?.link}
            onChange={(e) =>
              changeSocial(
                activeSocial,
                {
                  ...socialIcons[activeSocial],
                  link: e.target.value,
                },
                0
              )
            }
          />
        )}
      </div>
    </div>
  );
};
export default SocialEditor;
