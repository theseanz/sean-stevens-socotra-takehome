const Success = () => (
  <div
    className='min-h-screen flex items-center justify-center p-4'
    style={{ backgroundColor: 'hsl(0, 0%, 98%)' }}
  >
    <div className='bg-white rounded-lg border border-gray-200 shadow-sm max-w-2xl w-full p-12'>
      <div className='text-center'>
        <div className='mb-8'>
          {/* Green checkmark using exact SVG provided */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-16 w-16 text-green-600 mx-auto mb-6'
          >
            <path d='M21.801 10A10 10 0 1 1 17 3.335'></path>
            <path d='m9 11 3 3L22 4'></path>
          </svg>

          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Application Submitted Successfully!
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Thank you for choosing our insurance services. Your application has
            been received and is being processed.
          </p>
        </div>

        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8'>
          <h2 className='text-xl font-semibold text-gray-900 mb-6'>
            What happens next?
          </h2>
          <div className='space-y-4 text-left'>
            <div className='flex items-start gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
              <p className='text-gray-600'>
                Our licensed insurance agents will review your application
                within 24 hours
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
              <p className='text-gray-600'>
                You'll receive an email with your personalized quote and policy
                options
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
              <p className='text-gray-600'>
                An agent will contact you to finalize your coverage and answer
                any questions
              </p>
            </div>
          </div>
        </div>

        <p className='text-sm text-gray-500'>
          Questions? Contact us at{' '}
          <span className='text-blue-600 font-medium'>1-800-INSURANCE</span> or{' '}
          <span className='text-blue-600 font-medium'>
            support@insurance.com
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Success;
