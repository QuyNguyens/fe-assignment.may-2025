import ArrowRight from '../../assets/arrow-right-icon.svg';
import CartIcon from '../../assets/cart-icon.svg';

interface WorkPackageItemProps{
    title: string;
    desc: string;
}

const WorkPackageItem = ({title, desc}: WorkPackageItemProps) => {
  return (
    <div className="p-3 flex flex-col gap-4 border border-gray-200 rounded">
        <div className="flex justify-between items-center">
            <h1 className="text-base18 font-medium">{title}</h1>
            <img className='w-[10px] h-[14px]' src={ArrowRight} alt="" />
        </div>
        <p className='text-sm text-gray-600 font-normal line-clamp-2'>{desc}</p>
        <div className='flex gap-[6px]'>
            <div className='px-[7px] py-[5px] border border-gray-200 bg-blue-50'>
                <img className='w-[10px] h-[14px]' src={ArrowRight} alt="" />
            </div>
            <div className='px-[7px] py-[5px] border border-gray-200 bg-blue-50'>
                <img className='w-[10px] h-[14px]' src={ArrowRight} alt="" />
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='py-[5px] px-4 bg-gray-100 rounded-lg group hover:bg-primary duration-500'>
                <span className='text-base16 font-medium text-primary group-hover:text-white'>View Detail</span>
            </div>
            <img className='w-5 h-5' src={CartIcon} alt="" />
        </div>
    </div>
  )
}

export default WorkPackageItem