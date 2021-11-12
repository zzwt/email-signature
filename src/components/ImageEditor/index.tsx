import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import AvatarEditor from 'react-avatar-editor';
import Slider from '../Slider';
import styles from './styles.module.scss';

interface ImageEditorProps {
  imageConfig: any;
  index: number;
  changeImage: (index: number, val: any) => void;
}

// eslint-disable-next-line react/display-name
const ImageEditor: React.FC<ImageEditorProps> = React.memo(
  ({ imageConfig, index, changeImage }) => {
    const lastValidUrl = useMemo(() => imageConfig.url, [imageConfig.url]);
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
    const [urlInput, setUrlInput] = useState('');
    const firstTime = useRef(true);

    const setImageConfig = useCallback(() => {
      if (editorRef.current && imageUrl.length > 0) {
        const rect = (editorRef.current as AvatarEditor).getCroppingRect();
        const { naturalWidth, naturalHeight } = (
          editorRef.current as AvatarEditor
        ).state.image.resource;
        changeImage(index, {
          zoom,
          url: error ? lastValidUrl : imageUrl,
          ...rect,
          naturalWidth,
          naturalHeight,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, imageUrl, index, zoom]);

    useEffect(() => {
      if (!firstTime.current) {
        setImageConfig();
      } else {
        firstTime.current = false;
      }
    }, [zoom]);

    useEffect(() => {
      setError(null);
      setImageUrl(lastValidUrl);
    }, [imageConfig]);

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
            setError('Image link is not valid');
          }}
          onLoadSuccess={() => setImageConfig()}
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
            }}
          />
          <div className={styles.url}>
            <label htmlFor="url">URL: </label>
            <input
              id="url"
              type="text"
              ref={inputRef}
              value={urlInput}
              placeholder="Enter your Image Url"
              onChange={(e) => {
                setError(null);
                setUrlInput(e.target.value);
                setImageUrl(lastValidUrl);
              }}
            />
            <button
              type="button"
              onClick={() => {
                if (inputRef.current) {
                  if (urlInput.length > 0) {
                    setImageUrl(urlInput);
                    setUrlInput('');
                  } else {
                    setError('Image link is empty');
                  }
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
export default ImageEditor;
