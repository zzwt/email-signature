import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import ElementEditor from '../ElementEditor';
import { TemplateProps } from '../../types';
import styles from './styles.module.scss';
import ImageEditor from '../ImageEditor';

interface EditorProps extends TemplateProps {
  setDefaultFields: (index: number) => void;
  changeFields: (
    index: number,
    key: 'label' | 'content',
    newField: any
  ) => void;
  changeImage: (index: number, val: any) => void;
}

const Editor: React.FC<EditorProps> = ({
  config,
  setDefaultFields,
  changeFields,
  changeImage,
}) => {
  const [expandedField, setExpandedField] = useState(-1);
  const toggleField = (index: number) => {
    if (index === expandedField) {
      setExpandedField(-1);
      return;
    }
    setExpandedField(index);
  };
  const renderFieldEditors = () =>
    config.fields.map((field: any, index: number) => (
      <ElementEditor
        key={field.key}
        elementConfig={field}
        update={changeFields}
        setDefaultFields={setDefaultFields}
        meta={config.meta}
        open={index === expandedField}
        toggleField={toggleField}
      />
    ));
  const renderImageEditors = () =>
    config.images.map((image: any, index: number) => (
      <ImageEditor
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        changeImage={changeImage}
        index={index}
        imageConfig={image}
      />
    ));

  const animatedProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div className={styles.container} style={animatedProps}>
      <h2>Edit Your Avatar and Content</h2>
      <div className={styles.avatar_container}>
        {'images' in config && renderImageEditors()}
      </div>
      <div className={styles.fields_container}>
        {'fields' in config && renderFieldEditors()}
      </div>
    </animated.div>
  );
};
export default Editor;
