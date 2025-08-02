import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteProgress from './QuoteProgress';
import Toast from './Toast';
import type { FormData } from '../types';
import { STEP_COMPONENTS, TOTAL_STEPS } from '../constants/steps';

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastKey, setToastKey] = useState(0); // Add key counter for forcing re-render
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    year: '',
    make: '',
    model: '',
    vin: '',
    coverageType: '',
    liabilityLimits: '',
    collisionDeductible: '',
  });

  const StepComponent = STEP_COMPONENTS[step];

  const onNext = () => {
    if (step < STEP_COMPONENTS.length - 1) {
      setStep(step + 1);
      // Show toast notification for steps 2-4 (Address, Vehicle, Coverage) - NOT on step 1
      if (step >= 1 && step < 4) {
        setToastKey((prev) => prev + 1); // Increment key to force re-render
        setShowToast(true);
      }
    }
  };

  const onPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = () => {
    // Navigate to success page
    navigate('/success');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Progress sidebar - only show after step 0 */}
        {step > 0 && (
          <div className='w-full lg:w-1/3'>
            <QuoteProgress currentStep={step - 1} totalSteps={TOTAL_STEPS} />
          </div>
        )}

        {/* Main content */}
        <div className={`${step > 0 ? 'w-full lg:w-2/3' : 'w-full'}`}>
          <StepComponent
            data={formData}
            setData={(partial) =>
              setFormData((prev) => ({ ...prev, ...partial }))
            }
            onNext={onNext}
          />

          {/* Navigation buttons */}
          {step > 0 && (
            <div className='flex justify-between items-center mt-6'>
              <button
                type='button'
                className='px-6 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-300'
                onMouseEnter={(e) => {
                  if (step !== 1) {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'hsl(142, 76%, 36%)';
                    target.style.borderColor = 'hsl(142, 76%, 36%)';
                    target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (step !== 1) {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '';
                    target.style.borderColor = '';
                    target.style.color = '';
                  }
                }}
                disabled={step === 1}
                onClick={onPrev}
              >
                Previous
              </button>
              {step < STEP_COMPONENTS.length - 1 ? (
                <button
                  type='button'
                  className='inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer'
                  onClick={onNext}
                >
                  Continue
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </button>
              ) : (
                <button
                  type='submit'
                  className='inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer'
                  onClick={onSubmit}
                >
                  Submit Application
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        key={toastKey}
        show={showToast}
        title='Progress Saved'
        message='Your information has been saved. Continue to the next step.'
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default MultiStepForm;
