import type { AddressDetailsData } from '../types';

interface AddressDetailsProps {
  data: AddressDetailsData;
  setData: (data: Partial<AddressDetailsData>) => void;
}

const AddressDetails = ({ data, setData }: AddressDetailsProps) => {
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-foreground flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6 text-primary'
          >
            <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'></path>
            <circle cx='12' cy='10' r='3'></circle>
          </svg>
          Address Information
        </h2>
      </div>
      <div className='space-y-2 mb-6'>
        <label className='text-sm font-medium mb-1' htmlFor='street'>
          Street Address
        </label>
        <input
          className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
          id='street'
          placeholder='123 Main Street'
          value={data.street}
          onChange={(e) => setData({ street: e.target.value })}
          required
        />
      </div>
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='city'>
            City
          </label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='city'
            placeholder='City'
            value={data.city}
            onChange={(e) => setData({ city: e.target.value })}
            required
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='state'>
            State
          </label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='state'
            placeholder='State'
            value={data.state}
            onChange={(e) => setData({ state: e.target.value })}
            required
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='zip'>
            ZIP Code
          </label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='zip'
            placeholder='12345'
            value={data.zip}
            onChange={(e) => setData({ zip: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
