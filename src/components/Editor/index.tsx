import React, { useState } from 'react';
import ElementEditor from '../ElementEditor';
import { TemplateProps } from '../../types';
import styles from './styles.module.scss';

interface EditorProps extends TemplateProps {
  setDefaultFields: (index: number) => void;
  changeFields: (
    index: number,
    key: 'label' | 'content',
    newField: any
  ) => void;
}

const Editor: React.FC<EditorProps> = ({
  config,
  setDefaultFields,
  changeFields,
}) => {
  const renderFieldEditors = () =>
    config.fields.map((field: any) => (
      <ElementEditor
        key={field.key}
        elementConfig={field}
        update={changeFields}
        setDefaultFields={setDefaultFields}
      />
    ));

  return (
    <div className={styles.container}>
      {'fields' in config && renderFieldEditors()}
    </div>
  );
};
export default Editor;
