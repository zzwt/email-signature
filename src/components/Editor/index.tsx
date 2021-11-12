import React from 'react';

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
  const renderFieldEditors = () =>
    config.fields.map((field: any) => (
      <ElementEditor
        key={field.key}
        elementConfig={field}
        update={changeFields}
        setDefaultFields={setDefaultFields}
        meta={config.meta}
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

  return (
    <div className={styles.container}>
      <h2>Edit Your Avatar and Content</h2>
      <div className={styles.avatar_container}>
        {'images' in config && renderImageEditors()}
      </div>
      <div className={styles.fields_container}>
        {'fields' in config && renderFieldEditors()}
      </div>
    </div>
  );
};
export default Editor;
