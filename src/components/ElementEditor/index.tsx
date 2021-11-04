import React, { useCallback, useState } from 'react';
import { BsArrowUp } from '@react-icons/all-files/bs/BsArrowUp';
import { CgMoreO } from '@react-icons/all-files/cg/CgMoreO';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ColorPicker from '../ColorPicker';
import { IconPicker } from '../IconPicker';
import Toggler from '../Toggler';
import TypeSelector from '../TypeSelector';
import Slider from '../Slider';
interface ElementEditorProps {
  elementConfig: any;
  update: any;
  key?: number;
}
const ElementEditor: React.FC<ElementEditorProps> = ({
  elementConfig,
  update,
}) => {
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
          {elementConfig.label.value}
        </label>
        <div className={styles.content}>
          <input
            className={classNames({ [styles.toggler_open]: toggleMore })}
            type="text"
            value={elementConfig.content.value}
            onChange={(e) =>
              update(elementConfig.key, 'content', {
                ...elementConfig.content,
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
            <label className={styles.field_more_label_heading}>
              Label Settings
            </label>
            {elementConfig.label.display.editable && (
              <div className={styles.container_space}>
                <Toggler label="Display" onChange={() => {}} />
              </div>
            )}
            {elementConfig.label.color.editable && (
              <div className={styles.container_space}>
                <ColorPicker
                  initialColor={elementConfig.label.color.value}
                  onColorChange={(color) => {
                    update(elementConfig.key, {
                      color,
                    });
                  }}
                />
              </div>
            )}
            {elementConfig.label.size.editable && (
              <div className={styles.container_space}>
                <Slider
                  label="Font Size"
                  min={8}
                  max={16}
                  initialValue={10}
                  onChange={() => {}}
                />
              </div>
            )}
            {elementConfig.label.bold.editable && (
              <div className={styles.container_space}>
                <Toggler label="Bold" onChange={() => {}} />
              </div>
            )}
          </div>
          <div className={styles.field_more_content}>
            <label className={styles.field_more_content_heading}>
              Content Settings
            </label>
            <div className={styles.container_space}>
              <TypeSelector
                label="Type"
                options={['Text', 'Link', 'Email']}
                onChange={() => {}}
              />
            </div>
            <div className={styles.container_space}>
              <ColorPicker
                initialColor={elementConfig.content.color.value}
                onColorChange={(color) => {
                  update(elementConfig.key, {
                    color,
                  });
                }}
              />
            </div>
            <div className={styles.container_space}>
              <Slider
                label="Font Size"
                min={8}
                max={16}
                initialValue={10}
                onChange={() => {}}
              />
            </div>
            <div className={styles.container_space}>
              <Toggler label="Bold" onChange={() => {}} />
            </div>
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
