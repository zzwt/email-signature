import { useState, useCallback } from 'react';

export const useConfig = (defaultConfig: any) => {
  const [config, setConfig] = useState(defaultConfig);

  const setDefaultFields = (index: number) => {
    const newField = defaultConfig.fields[index];
    const newFields = config.fields.map((field: any, i: number) =>
      index === i ? newField : field
    );

    setConfig({ ...config, fields: newFields });
  };

  const changeFields = (
    index: number,
    key: 'label' | 'content',
    newVal: any
  ): void => {
    const oldField = config.fields[index];
    const newField = { ...oldField, [key]: newVal };
    const newFields = config.fields.map((field: any, i: number) =>
      index === i ? newField : field
    );
    setConfig({ ...config, fields: newFields });
  };

  return [config, setDefaultFields, changeFields] as const;
};
