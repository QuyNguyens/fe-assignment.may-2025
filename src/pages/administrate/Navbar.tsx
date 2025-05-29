import FilterIcon from '../../assets/filter-icon.svg';
import InputFilter from '../../components/InputFilter';
import StatusFilter from './StatusFilter';
import UsernameSelector from './UserNameSelector';
import UserTypeSelector from './UserTypeSelector';

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between w-[253px] p-3 border-r border-gray-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between py-[10px] border-b border-gray-300">
          <span className="text-gray-900 text-base16 font-medium">FILTER</span>
          <img className='w-5 h-5' src={FilterIcon} alt="" />
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <span className='text-base16 font-semibold'>User name</span>
          <UsernameSelector/>
        </div>
        <InputFilter title='User Id' type="text" filterName='userId'/>
        <div className="flex flex-col gap-2 justify-between">
          <span className='text-base16 font-semibold'>User Type</span>
          <UserTypeSelector/>
        </div>
        <InputFilter title='Phone number' type="number" filterName='contactPhone'/>
        <InputFilter title='Email address' type="text" filterName='contactEmail'/>
        <div className="flex flex-col gap-2 justify-between">
          <span className='text-base16 font-semibold'>Status</span>
          <StatusFilter/>
        </div>
      </div>
      <div className='w-full flex items-center justify-center py-[6px] border border-gray-300 rounded-md'>
        <span className='text-sm font-medium text-gray-normal'>Export Data</span>
      </div>
    </div>
  )
}

export default Navbar