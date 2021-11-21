import React, { useState, useCallback } from 'react';
import { AiFillMinusCircle } from '@react-icons/all-files/ai/AiFillMinusCircle';
import { IoAddCircle } from '@react-icons/all-files/io5/IoAddCircle';
import { BiColorFill } from '@react-icons/all-files/bi/BiColorFill';
import { RiExchangeFill } from '@react-icons/all-files/ri/RiExchangeFill';
import { animated, useSpring } from 'react-spring';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { SocialIcons, iconMapping, iconList } from '../SocialIcons';
import ColorPicker from '../ColorPicker';
import { IconDisplayType } from '../../types';

interface SocialEditorProps {
  meta: any;
  socialIcons: any[];
  changeSocial: (index: number, newVal: any, op: number) => void;
  changeMeta: (key: string, val: string) => void;
}

const SocialEditor: React.FC<SocialEditorProps> = ({
  meta,
  socialIcons,
  changeSocial,
  changeMeta,
}) => {
  const [activeSocial, setActiveSocial] = useState(() => {
    if (socialIcons && socialIcons.length > 0) return 0;
    return -1;
  });

  const [toggleColorPicker, setToggleColorPicker] = useState(false);

  const handleClose = () => {
    setToggleColorPicker(false);
  };

  const getFirstUnusedIcon = useCallback(() => {
    for (let index = 0; index < iconList.length; index += 1) {
      const found = socialIcons
        .map((socialIcon: any) => socialIcon.icon)
        .findIndex((i) => i === iconList[index]);
      if (found === -1) {
        return iconList[index];
      }
    }
    return iconList[0];
  }, [socialIcons]);

  const renderAddedSocialIcons = () =>
    socialIcons.map((socialIcon: any, index: number) => {
      const Icon = iconMapping[socialIcon.icon];
      const dynamicStyle = () => {
        if (activeSocial !== index) return {};

        if (meta.socialIconType === IconDisplayType.LINE) {
          return {
            color: socialIcon.color ? socialIcon.color : meta.primary,
          };
        }
        if (
          meta.socialIconType === IconDisplayType.FILL_CIRCLE ||
          meta.socialIconType === IconDisplayType.FILL_SQUARE
        ) {
          return {
            background: socialIcon.color ? socialIcon.color : meta.primary,
          };
        }
        if (
          meta.socialIconType === IconDisplayType.OUTLINE_CIRCLE ||
          meta.socialIconType === IconDisplayType.OUTLINE_SQUARE
        ) {
          return {
            color: socialIcon.color ? socialIcon.color : meta.primary,
            border: `2px solid ${
              socialIcon.color ? socialIcon.color : meta.primary
            }`,
          };
        }
        return {};
      };

      const iconDisplayClassname = () => {
        if (meta.socialIconType === IconDisplayType.LINE) {
          return classNames(styles.added_icon, styles.added_icon_line);
        }
        if (meta.socialIconType === IconDisplayType.FILL_CIRCLE) {
          return classNames(styles.added_icon, styles.added_icon_fill_circle);
        }
        if (meta.socialIconType === IconDisplayType.OUTLINE_CIRCLE) {
          return classNames(
            styles.added_icon,
            styles.added_icon_outline_circle
          );
        }
        if (meta.socialIconType === IconDisplayType.FILL_SQUARE) {
          return classNames(styles.added_icon, styles.added_icon_fill_square);
        }
        if (meta.socialIconType === IconDisplayType.OUTLINE_SQUARE) {
          return classNames(
            styles.added_icon,
            styles.added_icon_outline_square
          );
        }
        return '';
      };

      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.added_icon_container} key={index}>
          <div
            className={iconDisplayClassname()}
            style={dynamicStyle()}
            onClick={() => {
              setActiveSocial(index);
            }}
          >
            <Icon />
            {activeSocial === index && (
              <>
                <AiFillMinusCircle
                  className={styles.delete}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeSocial === socialIcons.length - 1) {
                      setActiveSocial((prev) => prev - 1);
                    }
                    changeSocial(activeSocial, null, -1);
                  }}
                  data-tip
                  data-for="delete"
                />
                <ReactTooltip id="delete">
                  <span>Delete Icon</span>
                </ReactTooltip>
              </>
            )}
          </div>
          {activeSocial === index && (
            <ColorPicker
              handleClose={handleClose}
              on={toggleColorPicker}
              color={socialIcon.color ? socialIcon.color : meta.primary}
              onColorChange={(val) => {
                changeSocial(
                  activeSocial,
                  { ...socialIcons[activeSocial], color: val },
                  0
                );
              }}
              style={{
                position: 'absolute',
              }}
            />
          )}
        </div>
      );
    });
  const animatedProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div className={styles.container} style={animatedProps}>
      <h2>Social Media Icons</h2>
      <div className={styles.added_icons_container}>
        <div className={styles.added_icons}>{renderAddedSocialIcons()}</div>
        {socialIcons.length < 5 && (
          <>
            <IoAddCircle
              className={styles.new_icon}
              onClick={(e) => {
                e.stopPropagation();
                changeSocial(
                  -1,
                  {
                    icon: getFirstUnusedIcon(),
                    link: '',
                    color: meta.primary,
                  },
                  1
                );
                setActiveSocial(socialIcons.length);
              }}
              data-tip
              data-for="addNew"
            />
            <ReactTooltip id="addNew">
              <span>Add New</span>
            </ReactTooltip>
          </>
        )}
        {activeSocial >= 0 && (
          <div>
            <BiColorFill
              className={styles.palette}
              onClick={() => {
                setToggleColorPicker(!toggleColorPicker);
              }}
              data-tip
              data-for="changeColor"
            />
            <ReactTooltip id="changeColor" type="dark">
              <span>Change Color</span>
            </ReactTooltip>
            <RiExchangeFill
              className={styles.change_icon_type}
              onClick={() => {
                let newType = IconDisplayType.OUTLINE_CIRCLE;
                if (meta.socialIconType === IconDisplayType.OUTLINE_CIRCLE)
                  newType = IconDisplayType.FILL_SQUARE;
                if (meta.socialIconType === IconDisplayType.FILL_SQUARE)
                  newType = IconDisplayType.OUTLINE_SQUARE;
                if (meta.socialIconType === IconDisplayType.OUTLINE_SQUARE)
                  newType = IconDisplayType.LINE;
                if (meta.socialIconType === IconDisplayType.LINE)
                  newType = IconDisplayType.FILL_CIRCLE;
                changeMeta('socialIconType', newType);
              }}
              data-tip
              data-for="changeStyle"
            />
            <ReactTooltip id="changeStyle">
              <span>Change Style</span>
            </ReactTooltip>
          </div>
        )}
      </div>

      <div className={styles.all_icons}>
        <SocialIcons
          color={
            socialIcons[activeSocial]?.color
              ? socialIcons[activeSocial]?.color
              : meta.primary
          }
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
    </animated.div>
  );
};
export default SocialEditor;
