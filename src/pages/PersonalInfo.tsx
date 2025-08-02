import type { PersonalInfoData } from '../types';

interface PersonalInfoProps {
  data: PersonalInfoData;
  setData: (data: Partial<PersonalInfoData>) => void;
}

const PersonalInfo = ({ data, setData }: PersonalInfoProps) => {
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
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
            <circle cx='12' cy='7' r='4'></circle>
          </svg>
          Personal Information
        </h2>
      </div>
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>First Name</label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            placeholder='Enter your first name'
            value={data.firstName}
            onChange={(e) => setData({ firstName: e.target.value })}
            required
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>Last Name</label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            placeholder='Enter your last name'
            value={data.lastName}
            onChange={(e) => setData({ lastName: e.target.value })}
            required
          />
        </div>
      </div>
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            type='email'
            placeholder='your.email@example.com'
            value={data.email}
            onChange={(e) => setData({ email: e.target.value })}
            required
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>Phone</label>
          <input
            className='w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white'
            placeholder='(555) 123-4567'
            value={data.phone}
            onChange={(e) => setData({ phone: e.target.value })}
            required
          />
        </div>
      </div>
      <div className='space-y-2'>
        <label
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          htmlFor='dateOfBirth'
        >
          Date of Birth
        </label>
        <input
          type='date'
          className='flex h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          id='dateOfBirth'
          value={data.dateOfBirth}
          onChange={(e) => {
            console.log(e.target.value);
            setData({ dateOfBirth: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
