import { useState } from 'react';

export const useConfig = (defaultConfig: any) => {
  const [config, setConfig] = useState(defaultConfig);

  const changeBasicInfo = (field: 'name' | 'title', newVal: any): void => {
    setConfig({ ...config, [field]: { ...config[field], ...newVal } });
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

  return [config, changeBasicInfo, changeFields] as const;
};
