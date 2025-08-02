import { useEffect, useState } from 'react';

interface ToastProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  duration?: number;
  key?: string | number; // Add key prop to force re-render
}

const Toast = ({
  show,
  onClose,
  title = 'Progress Saved',
  message = 'Your information has been saved. Continue to the next step.',
  duration = 3000,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [show, duration, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm max-w-sm group hover:shadow-md transition-shadow'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <h3 className='font-semibold text-gray-900 mb-1'>{title}</h3>
            <p className='text-gray-600 text-sm'>{message}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className='ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-gray-600'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
