import DescriptionIcon from '../../assets/description-icon.svg';
import CircleIcon from '../../assets/circle-icon.svg';
import ArrowTopIcon from '../../assets/arrow-top.svg';
import ArrowDown from '../../assets/arrow-down-icon.svg';
import ArrowRight from '../../assets/arrow-right-icon.svg';

import Activity from './Activity';
import PropertiesItem from './PropertiesItem';

const ProjectDetail = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row border-t border-gray-200">
      <div className="h-full flex-1 pr-4 border-r border-gray-200">
        <div className="flex items-center py-[5px] gap-2 border-b border-gray-200">
          <img className='w-[18px] h-[18px]' src={DescriptionIcon} alt="" />
          <span className='text-gray-600 text-base16 font-normal'>Description</span>
        </div>
        <div className='flex flex-col gap-1 mt-1'>
          <div className='flex gap-3'>
            <img className='w-2 h-2 mt-2' src={CircleIcon} alt="" />
            <p className='text-gray-600 text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='flex gap-3'>
            <img className='w-2 h-2 mt-2' src={CircleIcon} alt="" />
            <p className='text-gray-600 text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
        <div className='mt-4'>
          <span className=' text-primary text-sm font-normal hover:underline'>+ Add sub-tickets</span>
        </div>
        <div className="mt-6 flex items-center py-[5px] gap-2 border-b border-gray-200">
          <img className='w-[18px] h-[18px]' src={DescriptionIcon} alt="" />
          <span className='text-gray-600 text-base16 font-normal'>Activity</span>
        </div>
        <Activity/>
        <div className="relative mt-1 w-full">
          <textarea
            className="w-full h-[90px] p-4 pl-10 pr-10 rounded-lg bg-gray-500 text-[12px]  resize-none focus:outline-none"
            placeholder="Leave a comment ..."/>
         
          <img className='absolute bottom-4 right-4 w-[15px] h-[14px]' src={ArrowTopIcon} alt="" />
        </div>
        <div className='h-44'></div>
      </div>
      <div className='w-[279px]'>
        <div className='flex items-center justify-between py-[5px] pl-3 pr-5 border-b border-gray-200'>
          <div className='flex gap-2 items-center'>
            <span className='text-base16 text-gray-600 font-normal'>Properties</span>
            <img className='w-[10px] h-[10px]' src={ArrowDown} alt="" />
          </div>
          <img className='w-2 h-3' src={ArrowRight} alt="" />
        </div>
        <div className='flex flex-col gap-4 py-[5px] pl-3 pr-5'>
            <PropertiesItem name='Status:' content='In-Progress' color='text-blue-500'/>
            <PropertiesItem name='Priority:' content='Critical' color='text-red-dark'/>
            <PropertiesItem name='Assignee:' content='Trangntt' color='text-gray-600'/>
            <PropertiesItem name='Type' content='Bug' color='text-gray-600'/>
            <PropertiesItem name='Stated date:' content='2025-04-04' color='text-gray-600'/>
            <PropertiesItem name='Target date:' content='2025-04-04' color='text-gray-600'/>
            
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail