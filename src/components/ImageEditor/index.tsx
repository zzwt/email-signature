import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Slider from '../Slider';
import styles from './styles.module.scss';

interface ImageEditorProps {
  imageConfig: any;
  index: number;
  changeImage: (index: number, val: any) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  imageConfig,
  index,
  changeImage,
}) => {
  const [imageUrl, setImageUrl] = useState(imageConfig.url);
  const [error, setError] = useState<null | string>(null);
  const [zoom, setZoom] = useState(imageConfig.zoom);
  const inputRef = useRef(null);
  const editorRef = useRef(null);
  const [positionX, setPositionX] = useState(
    imageConfig.x + imageConfig.width / 2
  );
  const [positionY, setPositionY] = useState(
    imageConfig.y + imageConfig.height / 2
  );

  const setImageConfig = () => {
    if (editorRef.current && !error && imageUrl.length > 0) {
      const rect = (editorRef.current as AvatarEditor).getCroppingRect();
      const { naturalWidth, naturalHeight } = (
        editorRef.current as AvatarEditor
      ).state.image.resource;
      changeImage(index, {
        zoom,
        url: imageUrl,
        ...rect,
        naturalWidth,
        naturalHeight,
      });
    }
  };

  return (
    <div className={styles.container}>
      <AvatarEditor
        ref={editorRef}
        image={imageUrl}
        width={80}
        height={80}
        border={10}
        borderRadius={40}
        color={[0, 0, 0, 0.6]} // RGBA
        scale={zoom}
        rotate={0}
        onLoadFailure={() => {
          setError('Image url is not valid');
          setImageUrl('');
        }}
        position={{
          x: positionX,
          y: positionY,
        }}
        onPositionChange={(position) => {
          setPositionX(position.x);
          setPositionY(position.y);
          setImageConfig();
        }}
      />
      <div className={styles.widget}>
        <Slider
          label="Zoom"
          value={zoom}
          min={1.0}
          max={5.0}
          step={0.1}
          onChange={(val) => {
            setZoom(val);
            setImageConfig();
          }}
        />
        <div className={styles.url}>
          <label htmlFor="url">URL: </label>
          <input
            id="url"
            type="text"
            ref={inputRef}
            onChange={() => setError(null)}
          />
          <button
            type="button"
            onClick={() => {
              if (inputRef.current) {
                setImageUrl((inputRef.current as HTMLInputElement).value);
                (inputRef.current as HTMLInputElement).value = '';
              }
            }}
          >
            Load
          </button>
          {error && <div className={styles.error}>Image url is not valid</div>}
        </div>
      </div>
    </div>
  );
};
export default ImageEditor;
