import { divide } from 'lodash';
import config from 'next/dist/server/config';
import React, { useState, useContext, useMemo } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
// import { BsCheckLg } from '@react-icons/bs/BsCheckLg';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
// import { AiFillCaretLeft } from '@react-icons/ai/AiFillCaretLeft';
// import { AiFillCaretRight } from '@react-icons/ai/AiFillCaretRight';

interface WizardProps {
  setShowCopy: (showCopy: boolean) => void;
}
interface StepProps {
  title: string;
  subTitle: string;
  description?: string;
  component: React.ReactNode;
  step?: number;
}

interface WizardStep {
  Step: typeof Step;
}

const WizardContext = React.createContext({
  currentStep: 0,
  preStep: () => {},
  nextStep: () => {},
});

const useWizard = (totalSteps: number) => {
  const [currentStep, setcurrentStep] = useState(1);
  const preStep = () => {
    const next = currentStep - 1 < 1 ? 1 : currentStep - 1;
    setcurrentStep(next);
    return next;
  };
  const nextStep = () => {
    const next = currentStep + 1 > totalSteps ? totalSteps : currentStep + 1;
    setcurrentStep(next);
    return next;
  };
  return [currentStep, preStep, nextStep] as const;
};

const Wizard: React.FC<WizardProps> & WizardStep = ({
  setShowCopy,
  children,
}) => {
  const [currentStep, preStep, nextStep] = useWizard(
    React.Children.count(children)
  );

  const childrenElements = React.Children.map(
    children,
    (childrenElement: any, index: number) => ({
      ...childrenElement,
      props: { ...childrenElement.props, step: index + 1 },
    })
  );

  const Component = useMemo(
    () => childrenElements && childrenElements[currentStep - 1].props.component,
    [childrenElements, currentStep]
  );
  const title = useMemo(
    () => childrenElements && childrenElements[currentStep - 1].props.title,
    [childrenElements, currentStep]
  );
  const description = useMemo(
    () =>
      childrenElements && childrenElements[currentStep - 1].props.description,
    [childrenElements, currentStep]
  );

  return (
    <WizardContext.Provider value={{ currentStep, preStep, nextStep }}>
      <div className={styles.heading}>
        <h1> {title}</h1>
        <h2> {description}</h2>
      </div>
      <div className={styles.content}> {Component}</div>

      <div className={styles.steps_container}>{childrenElements}</div>

      <div
        className={classNames(styles.button_group, {
          [styles.button_group_right]: currentStep === 1,
        })}
      >
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => {
              const next = preStep();
              if (childrenElements && next < childrenElements.length - 1) {
                setShowCopy(false);
              }
            }}
            className={styles.btn}
          >
            <FaAngleRight />
            <span> Go Back</span>
          </button>
        )}
        {currentStep < React.Children.count(children) && (
          <button
            type="button"
            onClick={() => {
              const next = nextStep();
              if (childrenElements && next >= childrenElements.length - 1) {
                setShowCopy(true);
              }
            }}
            className={styles.btn}
          >
            <span> Next</span>
            <FaAngleRight />
          </button>
        )}
      </div>
    </WizardContext.Provider>
  );
};

const Step: React.FC<StepProps> = ({ title, subTitle, step = 0 }) => {
  const { currentStep } = useContext(WizardContext);

  return (
    <div
      className={classNames(styles.step_container, {
        [styles.finished]: step < currentStep,
        [styles.active]: step === currentStep,
      })}
    >
      <div className={classNames(styles.number)}>
        {step < currentStep ? <FaAngleRight /> : step}
      </div>
      <div className={classNames(styles.titles)}>
        <h1>{title} </h1>
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
};
Step.defaultProps = {
  description: '',
  step: 0,
};

Wizard.Step = Step;

export default Wizard;
