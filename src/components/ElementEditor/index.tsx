import React, { useCallback, useState } from 'react';
import { FiArrowUpCircle } from '@react-icons/all-files/fi/FiArrowUpCircle';
import { RiSettingsLine } from '@react-icons/all-files/ri/RiSettingsLine';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import styles from './styles.module.scss';
import ColorEditor from '../ColorEditor';
import Toggler from '../Toggler';
import TypeSelector from '../TypeSelector';
import Slider from '../Slider';
import { ContentType } from '../../types';
import Input from '../Input';

interface ElementEditorProps {
  setDefaultFields: (index: number) => void;
  elementConfig: any;
  meta: any;
  update: any;
  key?: number;
  open: boolean;
  toggleField: (index: number) => void;
}
const ElementEditor: React.FC<ElementEditorProps> = ({
  meta,
  setDefaultFields,
  elementConfig,
  update,
  open,
  toggleField,
}) => {
  const { label, content, key } = elementConfig;
  const renderToggler = useCallback(
    () =>
      !open ? (
        <RiSettingsLine
          onClick={() => {
            toggleField(key);
          }}
        />
      ) : (
        <FiArrowUpCircle
          onClick={() => {
            toggleField(key);
          }}
        />
      ),
    [open]
  );

  const [ref, { height }] = useMeasure();
  const animatedProps = useSpring({
    height,
    config: { tension: 300, clamp: true },
  });

  return (
    <div className={styles.field_container}>
      <div className={styles.basic}>
        <label className={classNames({ [styles.toggler_open]: open })}>
          {label.display.value && label.value}
        </label>

        <div className={styles.content}>
          <input
            className={classNames({ [styles.toggler_open]: open })}
            type="text"
            value={content.value}
            onChange={(e) =>
              update(key, 'content', {
                ...content,
                value: e.target.value,
              })
            }
          />
          <div className={styles.toggler}>{renderToggler()}</div>
        </div>
      </div>
      <animated.div className={styles.field_more} style={{ ...animatedProps }}>
        <div
          className={classNames(styles.field_more_wrapper, {
            [styles.field_more_wrapper_expanded]: open,
          })}
          ref={ref}
        >
          <div className={styles.field_more_label}>
            <div className={styles.field_more_wrapper_heading}>
              Label Settings
            </div>
            {label.display.editable && (
              <div className={styles.container_space}>
                <Toggler
                  label="Display"
                  checked={label.display.value}
                  onChange={(val) => {
                    update(key, 'label', {
                      ...label,
                      display: { ...label.display, value: val },
                    });
                  }}
                />
              </div>
            )}
            {label.type.editable && label.display.value && (
              <div className={styles.container_space}>
                <Input
                  label="Label"
                  value={label.value}
                  onChange={(val) =>
                    update(key, 'label', {
                      ...label,
                      value: val,
                    })
                  }
                />
              </div>
            )}
            {label.color.editable && label.display.value && (
              <div className={styles.container_space}>
                <ColorEditor
                  color={label.color.value || meta.text}
                  onColorChange={(color) => {
                    update(key, 'label', {
                      ...label,
                      color: { ...label.color, value: color },
                    });
                  }}
                />
              </div>
            )}
            {label.size.editable && label.display.value && (
              <div className={styles.container_space}>
                <Slider
                  label="Font Size"
                  min={8}
                  max={25}
                  value={label.size.value}
                  onChange={(val) => {
                    update(key, 'label', {
                      ...label,
                      size: { ...label.size, value: val },
                    });
                  }}
                />
              </div>
            )}
            {label.bold.editable && label.display.value && (
              <div className={styles.container_space}>
                <Toggler
                  label="Bold"
                  checked={label.bold.value}
                  onChange={(val) => {
                    update(key, 'label', {
                      ...label,
                      bold: { ...label.bold, value: val },
                    });
                  }}
                />
              </div>
            )}
          </div>
          <div className={styles.field_more_content}>
            <div className={styles.field_more_wrapper_heading}>
              <span>Content Settings</span>
              <button
                className={styles.btn}
                type="button"
                onClick={() => setDefaultFields(key)}
              >
                Reset
              </button>
            </div>

            {content.type.editable && (
              <div className={styles.container_space}>
                <TypeSelector
                  label="Type"
                  type={ContentType}
                  active={content.type.value}
                  onChange={(val) => {
                    update(key, 'content', {
                      ...content,
                      type: { ...content.type, value: val },
                    });
                  }}
                />
              </div>
            )}
            {content.color.editable && (
              <div className={styles.container_space}>
                <ColorEditor
                  color={content.color.value || meta.text}
                  onColorChange={(color) => {
                    update(key, 'content', {
                      ...content,
                      color: { ...content.color, value: color },
                    });
                  }}
                />
              </div>
            )}
            {content.size.editable && (
              <div className={styles.container_space}>
                <Slider
                  label="Font Size"
                  min={8}
                  max={25}
                  value={content.size.value}
                  onChange={(val) => {
                    update(key, 'content', {
                      ...content,
                      size: { ...content.size, value: val },
                    });
                  }}
                />
              </div>
            )}
            {content.bold.editable && (
              <div className={styles.container_space}>
                <Toggler
                  label="Bold"
                  checked={content.bold.value}
                  onChange={(val) => {
                    update(key, 'content', {
                      ...content,
                      bold: { ...content.bold, value: val },
                    });
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
};
ElementEditor.defaultProps = {
  key: 0,
};

export default ElementEditor;
