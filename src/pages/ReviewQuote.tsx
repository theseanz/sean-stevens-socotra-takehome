const ReviewQuote = () => {
  // Example values, replace with real calculation if needed
  const liability = 45.2;
  const collision = 32.1;
  const comprehensive = 12.2;
  const total = liability + collision + comprehensive;

  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-foreground mb-2'>
          Your Insurance Quote
        </h2>
      </div>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6'>
        <div className='flex flex-col items-center justify-center mb-6'>
          <span className='text-5xl font-bold text-blue-600'>
            ${total.toFixed(2)}
          </span>
          <span className='text-gray-500 text-lg'>per month</span>
        </div>

        <div className='space-y-4'>
          <div className='flex justify-between py-2 border-b border-gray-200'>
            <span className='text-gray-700'>Liability Coverage</span>
            <span className='font-medium'>${liability.toFixed(2)}</span>
          </div>
          <div className='flex justify-between py-2 border-b border-gray-200'>
            <span className='text-gray-700'>Collision Coverage</span>
            <span className='font-medium'>${collision.toFixed(2)}</span>
          </div>
          <div className='flex justify-between py-2 border-b border-gray-200'>
            <span className='text-gray-700'>Comprehensive Coverage</span>
            <span className='font-medium'>${comprehensive.toFixed(2)}</span>
          </div>
          <div className='flex justify-between py-3 border-t-2 border-gray-300 mt-4'>
            <span className='font-bold text-lg'>Total Monthly Premium</span>
            <span className='font-bold text-lg'>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewQuote;
