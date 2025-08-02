import React from 'react';
import { STEP_NAMES } from '../constants/steps';

interface QuoteProgressProps {
  currentStep: number;
  totalSteps: number;
}

const QuoteProgress: React.FC<QuoteProgressProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm'>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-bold text-foreground'>Quote Progress</h3>
        <span className='text-muted-foreground'>
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>

      <div className='space-y-4'>
        {STEP_NAMES.map((step, index) => (
          <div key={index} className='flex items-center gap-3'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out ${
                index < currentStep
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index < currentStep ? (
                <svg
                  className='w-5 h-5 animate-in fade-in-50 duration-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <span className='transition-all duration-300 ease-in-out'>
                  {index + 1}
                </span>
              )}
            </div>
            <span
              className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                index < currentStep
                  ? 'text-green-600'
                  : index === currentStep
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out'
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteProgress;
