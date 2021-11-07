import React, { useCallback, useState } from 'react';
import { BsArrowUp } from '@react-icons/all-files/bs/BsArrowUp';
import { CgMoreO } from '@react-icons/all-files/cg/CgMoreO';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ColorEditor from '../ColorEditor';
import Toggler from '../Toggler';
import TypeSelector from '../TypeSelector';
import Slider from '../Slider';
import { ContentType } from '../../types';
import Input from './../Input/index';

interface ElementEditorProps {
  setDefaultFields: (index: number) => void;
  elementConfig: any;
  update: any;
  key?: number;
}
const ElementEditor: React.FC<ElementEditorProps> = ({
  setDefaultFields,
  elementConfig,
  update,
}) => {
  const { label, content, key } = elementConfig;
  const [toggleMore, setToggleMore] = useState(false);
  const renderToggler = useCallback(
    () =>
      !toggleMore ? (
        <CgMoreO
          onClick={() => {
            setToggleMore(!toggleMore);
          }}
        />
      ) : (
        <BsArrowUp
          onClick={() => {
            setToggleMore(!toggleMore);
          }}
        />
      ),
    [toggleMore]
  );
  return (
    <div className={styles.field_container}>
      <div className={styles.basic}>
        <label className={classNames({ [styles.toggler_open]: toggleMore })}>
          {label.display.value && label.value}
        </label>

        <div className={styles.content}>
          <input
            className={classNames({ [styles.toggler_open]: toggleMore })}
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
      {toggleMore && (
        <div className={styles.field_more}>
          <div className={styles.field_more_label}>
            <div className={styles.field_more_heading}>Label Settings</div>
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
                  color={label.color.value}
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
            <div className={styles.field_more_heading}>
              <span>Content Settings</span>
              <button
                className={styles.btn}
                onClick={() => setDefaultFields(key)}
              >
                Reset
              </button>
            </div>

            {content.type.editable && (
              <div className={styles.container_space}>
                <TypeSelector
                  label="Type"
                  // options={['Text', 'Link', 'Email']}
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
                  color={content.color.value}
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
            {/* <div
              className={classNames(
                styles.container_space,
                styles.field_more_content_default
              )}
            >
              
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
ElementEditor.defaultProps = {
  key: 0,
};

export default ElementEditor;
