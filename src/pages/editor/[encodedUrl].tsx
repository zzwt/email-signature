import React, { useMemo } from 'react';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Data } from '../api/hello';
import { useConfig } from '../../hooks/useConfig';
import Editor from '../../components/Editor';
import {
  TemplateProps,
  ElementType,
  ContentType,
  IconDisplayType,
} from '../../types';
import styles from './styles.module.scss';
import Wizard from '../../components/Wizard';
import SocialEditor from '../../components/SocialEditor';
import ThemeColor from '../../components/ThemeColor';

const EditorPage: React.FC<Data> = ({ template }) => {
  const Component = useMemo(
    () => dynamic<TemplateProps>(() => import(`../../templates/${template}`)),
    [template]
  );
  const defaultConfig = {
    fields: [
      {
        label: {
          value: 'Full Name',
          type: { editable: false, value: 'text' }, // text | icon: not supported
          color: { editable: false, value: '#626262' },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Joel Lu',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true, value: '#626262' },
          bold: { editable: true, value: true },
          size: { editable: true, value: 20 },
        },
        key: 0,
      },
      {
        label: {
          value: 'Title',
          type: { editable: false, value: 'text' }, // text | icon
          color: { editable: false, value: '#626262' },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Developer',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true, value: '#626262' },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 1,
      },
      {
        label: {
          value: 'Website',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true, value: '#626262' },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: 'www.google.com',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true, value: '#626262' },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 2,
      },
      {
        label: {
          value: 'tel',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true, value: '#626262' },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: '0333333333',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true, value: '#626262' },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 3,
      },
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
    meta: {
      primary: '#5661b6',
      background: '#ffffff',
      text: '#626262',
      socialIconType: IconDisplayType.OUTLINE,
    },
  };
  const [config, setDefaultFields, changeFields, changeSocial, changeMeta] =
    useConfig(defaultConfig);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.editor_wrapper}>
          <div className={styles.preview}>
            <Component config={config} />
          </div>
          <div className={styles.editor}>
            {/* */}
            <Wizard>
              <Wizard.Step
                title="Color Tone"
                subTitle="Choose the tone of your signature"
                description="If you are happy with default color, go to next"
                component={
                  <ThemeColor config={config} changeMeta={changeMeta} />
                }
              />
              <Wizard.Step
                title="Basic Info"
                subTitle="Freely edit your fileds information"
                description="Customize your info and style"
                component={
                  <Editor
                    config={config}
                    setDefaultFields={setDefaultFields}
                    changeFields={changeFields}
                  />
                }
              />
              <Wizard.Step
                title="Social Media"
                subTitle="Edit and add your favourite social media link"
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
                subTitle="Follow steps to add to your email client"
                component={
                  <Editor
                    config={config}
                    // changeBasicInfo={changeBasicInfo}
                    changeFields={changeFields}
                  />
                }
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
