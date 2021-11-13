import React, { useMemo, useState } from 'react';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Data } from '../api/hello';
import { useConfig } from '../../hooks/useConfig';
import Editor from '../../components/Editor';
import { TemplateProps, ContentType, IconDisplayType } from '../../types';
import styles from './styles.module.scss';
import Wizard from '../../components/Wizard';
import SocialEditor from '../../components/SocialEditor';
import ThemeColor from '../../components/ThemeColor';
import { copyWithStyle } from '../../utils';
import Guide from '../../components/Guide';
import Done from '../../components/Done';

const EditorPage: React.FC<Data> = ({ template }) => {
  const Component = useMemo(
    () => dynamic<TemplateProps>(() => import(`../../templates/${template}`)),
    [template]
  );

  const [copyClipboardText, setCopyClipboardText] = useState('Clip to Copy');
  const [showCopy, setShwoCopy] = useState(false);

  const defaultConfig = {
    fields: [
      {
        label: {
          value: 'Full Name',
          type: { editable: false, value: 'text' }, // text | icon: not supported
          color: { editable: false },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Joel Lu',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: true },
          size: { editable: true, value: 20 },
        },
        key: 0,
      },
      {
        label: {
          value: 'Title',
          type: { editable: false, value: 'text' }, // text | icon
          color: { editable: false },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Developer',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 1,
      },
      {
        label: {
          value: 'Website',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: 'www.google.com',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 2,
      },
      {
        label: {
          value: 'tel',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: '0333333333',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 3,
      },
      {
        label: {
          value: 'email',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: 'xxx@gmail.com',
          type: { editable: true, value: ContentType.EMAIL },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 4,
      },
      // {
      //   label: {
      //     value: 'tel',
      //     type: { editable: true, value: 'text' }, // text | icon
      //     color: { editable: true },
      //     display: { editable: true, value: true },
      //     bold: { editable: true, value: false },
      //     size: { editable: true, value: 12 },
      //   },
      //   content: {
      //     value: '0333333333',
      //     type: { editable: true, value: ContentType.TEXT },
      //     color: { editable: true },
      //     bold: { editable: true, value: false },
      //     size: { editable: true, value: 12 },
      //   },
      //   key: 5,
      // },
    ],
    social: [
      {
        icon: 'ImFacebook',
        link: 'http://xxx1.com',
      },
      {
        icon: 'FaTwitter',
        link: 'http://xxx2.com',
      },
      {
        icon: 'FaLinkedinIn',
        link: 'xxx3.com',
      },
    ],
    images: [
      {
        url: '/avatar.png',
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        naturalWidth: 300,
        naturalHeight: 300,
        zoom: 1,
      },
    ],
    meta: {
      primary: '#5661b6',
      background: '#ffffff',
      text: '#626262',
      socialIconType: IconDisplayType.FILL,
    },
  };
  const [
    config,
    setDefaultFields,
    changeFields,
    changeSocial,
    changeMeta,
    changeImage,
  ] = useConfig(defaultConfig);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.editor_wrapper}>
          <div className={styles.preview}>
            <Component config={config} />
            {showCopy && (
              <button
                type="button"
                className={styles.btn}
                onClick={() => {
                  const count = copyWithStyle('signature');
                  setCopyClipboardText(`${count} Characters Copied`);
                  setTimeout(() => {
                    setCopyClipboardText('Clip to Copy');
                  }, 2000);
                }}
              >
                {copyClipboardText}
              </button>
            )}
          </div>
          <div className={styles.editor}>
            {/* */}
            <Wizard setShowCopy={setShwoCopy}>
              <Wizard.Step
                title="Theme Color"
                subTitle="Color palette for your signature"
                description="If you are happy with default color, go to next"
                component={
                  <ThemeColor config={config} changeMeta={changeMeta} />
                }
              />
              <Wizard.Step
                title="Basic Info"
                subTitle="Feel free to change your profile content"
                description="Customize your info and style"
                component={
                  <Editor
                    config={config}
                    setDefaultFields={setDefaultFields}
                    changeFields={changeFields}
                    changeImage={changeImage}
                  />
                }
              />
              <Wizard.Step
                title="Social Media"
                subTitle="Edit your social icons to stand out in a crowd"
                description="Customize your social link"
                component={
                  <SocialEditor
                    meta={config.meta}
                    socialIcons={config.social}
                    changeMeta={changeMeta}
                    changeSocial={changeSocial}
                  />
                }
              />
              <Wizard.Step
                title="Finishing up"
                subTitle="Follow steps to make it shine"
                component={<Guide />}
              />
              <Wizard.Step
                title="All Done"
                subTitle="Feel free to go back to any previous steps to make a change."
                description="Congratulation! You've made your email signature"
                component={<Done />}
              />
            </Wizard>
          </div>
        </div>
      </div>
      <div className={styles.right} />
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ encodedUrl: string }>
) {
  try {
    const response = await axios.post<Data>('http://localhost:3000/api/hello', {
      encodedUrl: context.params?.encodedUrl,
    });
    return {
      props: { ...response.data }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default EditorPage;
