import React, { useState, useMemo } from 'react';
import { Checkbox } from 'antd';
import styles from './styles.module.scss';

interface ImageEditorProps {
  imageConfig: any;
  index: number;
  changeImage: (index: number, val: any) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = React.memo(
  ({ imageConfig, index, changeImage }) => {
    const lastValidUrl = useMemo(() => imageConfig.url, [imageConfig.url]);
    const [imageUrl, setImageUrl] = useState(imageConfig.url);
    const [error, setError] = useState<null | string>(null);
    const [urlInput, setUrlInput] = useState('');
    const useInitial = imageConfig.initial;

    return (
      <div className={styles.container}>
        <img
          src={imageUrl}
          alt="Avatar Image"
          width={80}
          height={80}
          onError={() => {
            setError('Image link is not valid');
            setImageUrl(lastValidUrl);
          }}
          onLoad={() => {
            changeImage(index, {
              ...imageConfig,
              url: error ? lastValidUrl : imageUrl,
            });
          }}
        />
        <div className={styles.widget}>
          <div className={styles.url}>
            <label htmlFor="url">URL: </label>
            <input
              id="url"
              type="text"
              disabled={useInitial}
              value={urlInput}
              placeholder="Enter your Image Url"
              onChange={(e) => {
                setError(null);
                setUrlInput(e.target.value);
              }}
            />
            <button
              type="button"
              disabled={useInitial}
              onClick={() => {
                if (urlInput.length > 0) {
                  setImageUrl(urlInput);
                  setUrlInput('');
                } else {
                  setError('Image link is empty');
                }
              }}
            >
              Load
            </button>
            {error && <div className={styles.error}>{error}</div>}
          </div>
          <div>
            <Checkbox
              checked={useInitial}
              onChange={(e) => {
                setError(null);
                changeImage(index, {
                  ...imageConfig,
                  initial: e.target.checked,
                });
              }}
            >
              Use Name Initial
            </Checkbox>
          </div>
        </div>
      </div>
    );
  }
);
ImageEditor.displayName = 'ImageEditor';
export default ImageEditor;
