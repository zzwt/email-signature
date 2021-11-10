import React, { useState, useContext, useMemo } from 'react';
import classNames from 'classnames';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import styles from './styles.module.scss';

interface WizardProps {
  setShowCopy: (showCopy: boolean) => void;
}
interface StepProps {
  title: string;
  // eslint-disable-next-line react/no-unused-prop-types
  subTitle: string;
  description?: string;
  component: React.ReactNode;
}

interface WizardStep {
  Step: typeof Step;
}

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

const Step: React.FC<StepProps> = ({ title, description, component }) => (
  <div className={styles.componet_container}>
    <div className={styles.heading}>
      <h1> {title}</h1>
      <h2> {description}</h2>
    </div>

    <div className={styles.content}>{component}</div>
  </div>
);
Step.defaultProps = {
  description: '',
};

const Wizard: React.FC<WizardProps> & WizardStep = ({
  setShowCopy,
  children,
}) => {
  const [currentStep, preStep, nextStep] = useWizard(
    React.Children.count(children)
  );

  const childrenElements = React.Children.toArray(children);

  const renderWizardSteps = () =>
    React.Children.map(children, (childrenElement: any, index: number) => {
      const step = index + 1;
      const { title, subTitle } = childrenElement.props;
      return (
        <div
          className={classNames(styles.step_container, {
            [styles.finished]: step < currentStep,
            [styles.active]: step === currentStep,
          })}
        >
          <div className={classNames(styles.number)}>
            {step < currentStep ? <FaCheck /> : step}
          </div>
          <div className={classNames(styles.titles)}>
            <h1>{title} </h1>
            <h2>{subTitle}</h2>
          </div>
        </div>
      );
    })?.slice(0, childrenElements.length - 1);

  // eslint-disable-next-line no-undef
  const Component = childrenElements[currentStep - 1];
  return (
    <div className={styles.container}>
      {Component}

      {currentStep !== childrenElements.length && (
        <div className={styles.steps_container}>{renderWizardSteps()}</div>
      )}

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
            <FaAngleLeft />
            <span>Back</span>
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
            <span>
              {currentStep === childrenElements.length - 1 ? 'Done' : 'Next'}
            </span>
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
  );
};

Wizard.Step = Step;

export default Wizard;
