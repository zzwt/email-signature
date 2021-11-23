import React, { useMemo, useState } from 'react';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Data } from '../api/hello';
import { useConfig } from '../../hooks/useConfig';
import Editor from '../../components/Editor';
import { TemplateProps } from '../../types';
import configs from '../../templates/configs';
import styles from './styles.module.scss';
import Wizard from '../../components/Wizard';
import SocialEditor from '../../components/SocialEditor';
import ThemeColor from '../../components/ThemeColor';
import { copyWithStyle } from '../../utils';
import Guide from '../../components/Guide';
import Done from '../../components/Done';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import { apiServer } from '../../config';

const EditorPage: React.FC<Data> = ({ template }) => {
  const Component = useMemo(
    () => dynamic<TemplateProps>(() => import(`../../templates/${template}`)),
    [template]
  );
  const defaultConfig = useMemo<any>(
    () => configs[template as keyof typeof configs],
    [template]
  );

  const [copyClipboardText, setCopyClipboardText] = useState('Clip to Copy');
  const [showCopy, setShwoCopy] = useState(false);

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
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.editor_wrapper}>
          <div className={styles.preview}>
            <div className={styles.preview_alignment}>
              <Component config={config} />
            </div>
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
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ encodedUrl: string }>
) {
  try {
    const response = await axios.post<Data>(apiServer, {
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
