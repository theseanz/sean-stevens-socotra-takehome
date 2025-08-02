import type { FormData } from '../types';

interface CoverageOptionsProps {
  data: FormData;
  setData: (data: Partial<FormData>) => void;
}

const coverageTypes = ['Liability Only', 'Standard Coverage', 'Full Coverage'];
const liabilityLimits = [
  '$25k/$50k/$25k',
  '$50k/$100k/$50k',
  '$100k/$300k/$100k',
];
const collisionDeductibles = ['$250', '$500', '$1,000'];

const CoverageOptions = ({ data, setData }: CoverageOptionsProps) => {
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 shadow-sm'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-foreground'>Coverage Options</h2>
      </div>
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label
            className='block text-sm font-medium mb-1'
            htmlFor='coverageType'
          >
            Coverage Type
          </label>
          <select
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='coverageType'
            value={data.coverageType || ''}
            onChange={(e) => setData({ coverageType: e.target.value })}
            required
          >
            <option value=''>Select coverage type</option>
            {coverageTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label
            className='block text-sm font-medium mb-1'
            htmlFor='liabilityLimits'
          >
            Liability Limits
          </label>
          <select
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='liabilityLimits'
            value={data.liabilityLimits || ''}
            onChange={(e) => setData({ liabilityLimits: e.target.value })}
            required
          >
            <option value=''>Select limits</option>
            {liabilityLimits.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label
            className='block text-sm font-medium mb-1'
            htmlFor='collisionDeductible'
          >
            Collision Deductible
          </label>
          <select
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            id='collisionDeductible'
            value={data.collisionDeductible || ''}
            onChange={(e) => setData({ collisionDeductible: e.target.value })}
            required
          >
            <option value=''>Select deductible</option>
            {collisionDeductibles.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CoverageOptions;
