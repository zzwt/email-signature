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

  const changeSocial = (index: number = -1, newVal: any, op: number = 0) => {
    if (op === 1) {
      if (newVal) {
        setConfig({ ...config, social: [...config.social, newVal] });
      }
      return;
    }
    if (op === -1) {
      if (index >= 0 && index < config.social.length) {
        config.social.splice(index, 1);
        setConfig({ ...config, social: [...config.social] });
      }
      return;
    }
    const newSocial = config.social.map((sc: any, i: number) =>
      index === i ? newVal : sc
    );
    setConfig({ ...config, social: newSocial });
  };

  const changeMeta = (key: string, val: string) => {
    setConfig({ ...config, meta: { ...config.meta, [key]: val } });
  };

  const changeImage = (index: number, val: any) => {
    const newImages = config.images.map((img: any, i: number) =>
      index === i ? val : img
    );
    setConfig({ ...config, images: newImages });
  };

  return [
    config,
    setDefaultFields,
    changeFields,
    changeSocial,
    changeMeta,
    changeImage,
  ] as const;
};
