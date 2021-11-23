import React, { useState, useMemo } from 'react';
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
              // ref={inputRef}
              value={urlInput}
              placeholder="Enter your Image Url"
              onChange={(e) => {
                setError(null);
                setUrlInput(e.target.value);
              }}
            />
            <button
              type="button"
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
        </div>
      </div>
    );
  }
);
ImageEditor.displayName = 'ImageEditor';
export default ImageEditor;
