import ArrowRight from '../../assets/arrow-right-icon.svg';

const Header = () => {
  return (
    <div className=" w-full h-[52px] mt-3 flex items-center gap-4">
        <span className='text-sm font-medium text-gray-600'>Project</span>
        <img src={ArrowRight} alt="" />
        <span className='text-sm font-medium text-gray-600'>UrapidLoan Project</span>
        <img src={ArrowRight} alt="" />
        <span className='text-sm text-primary hover:underline font-normal'>[Ticket name ]</span>
    </div>
  )
}

export default Header