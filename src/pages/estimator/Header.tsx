import ArrowRight from '../../assets/arrow-right-icon.svg';
import ViewIcon from '../../assets/summaty-icon.svg';

const Header = () => {
  return (
    <div className='w-full h-16 p-3 pb-0 flex items-center'>
      <div className='w-full flex justify-between pb-3 border-b border-gray-200'>
        <div className="flex items-center gap-4">
            <span className='text-sm font-medium text-gray-600'>Estimator</span>
            <img src={ArrowRight} alt="" />
            <span className='text-sm font-medium text-primary'>Work Packages</span>
        </div>
        <div className='flex items-center gap-[10px] bg-primary hover:bg-primary-hover py-2 px-5 rounded-full'>
          <img className='w-4 h-4' src={ViewIcon} alt="" />
          <span className='text-base16 font-medium text-white'>View Summary</span>
        </div>
      </div>
    </div>
  )
}

export default Header