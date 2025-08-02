import type { FormData } from '../types';

interface VehicleInformationProps {
  data: FormData;
  setData: (data: Partial<FormData>) => void;
}

const years = Array.from({ length: 12 }, (_, i) => `${2024 - i}`);
const makes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW'];

const VehicleInformation = ({ data, setData }: VehicleInformationProps) => {
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
            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
            <circle cx='7' cy='17' r='2'></circle>
            <path d='M9 17h6'></path>
            <circle cx='17' cy='17' r='2'></circle>
          </svg>
          Vehicle Information
        </h2>
      </div>
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='year'>
            Year
          </label>
          <select
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='year'
            value={data.year || ''}
            onChange={(e) => setData({ year: e.target.value })}
            required
          >
            <option value=''>Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='make'>
            Make
          </label>
          <select
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='make'
            value={data.make || ''}
            onChange={(e) => setData({ make: e.target.value })}
            required
          >
            <option value=''>Make</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1' htmlFor='model'>
            Model
          </label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='model'
            placeholder='Accord, Camry, etc.'
            value={data.model || ''}
            onChange={(e) => setData({ model: e.target.value })}
            required
          />
        </div>
      </div>
      <div className='mb-6'>
        <label className='block text-sm font-medium mb-1' htmlFor='vin'>
          VIN (Vehicle Identification Number)
        </label>
        <input
          className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
          id='vin'
          placeholder='17-character VIN'
          value={data.vin || ''}
          onChange={(e) => setData({ vin: e.target.value })}
        />
      </div>
    </div>
  );
};

export default VehicleInformation;
