interface LandingPageProps {
  onNext: () => void;
}

const LandingPage = ({ onNext }: LandingPageProps) => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8 text-center'>
      <div className='mb-8'>
        <h1 className='text-5xl font-bold text-gray-900 mb-4 leading-12'>
          Get the Best{' '}
          <span className='bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent'>
            Auto Insurance
          </span>{' '}
          Quote in Minutes
        </h1>
        <p
          className='text-xl leading-relaxed mb-8  mx-auto'
          style={{ color: 'hsl(210, 10%, 52%)' }}
        >
          Save up to 40% on your car insurance with personalized quotes from
          SecureAuto. Trusted by over 2 million drivers nationwide.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
          <div className='flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5 text-white'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <polyline points='12 6 12 12 16 14'></polyline>
              </svg>
            </div>
            <div>
              <div className='font-semibold text-gray-900 text-base'>
                3 Minutes
              </div>
              <div className='text-xs text-gray-600'>Quick Quote</div>
            </div>
          </div>

          <div className='flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5 text-white'
              >
                <line x1='12' x2='12' y1='2' y2='22'></line>
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
              </svg>
            </div>
            <div>
              <div className='font-semibold text-gray-900 text-base'>
                Up to 40%
              </div>
              <div className='text-xs text-gray-600'>Savings</div>
            </div>
          </div>

          <div className='flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5 text-white'
              >
                <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'></path>
              </svg>
            </div>
            <div>
              <div className='font-semibold text-gray-900 text-base'>4.8/5</div>
              <div className='text-xs text-gray-600'>Customer Rating</div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <button
            onClick={onNext}
            className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium px-8 py-2 rounded-lg text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2'
            >
              <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'></path>
            </svg>
            Start Free Quote
          </button>
          <p className='text-sm text-gray-500'>
            No spam, no hidden fees. Get your quote in just 3 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
