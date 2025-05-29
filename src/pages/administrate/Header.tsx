import HomeIcon from '../../assets/home-icon.svg';
import RangIcon from '../../assets/rang-icon.svg';
import SettingsIcon from '../../assets/settings-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import ArrowDownWhite from '../../assets/arrow-down-white.svg';

const Header = () => {
  return (
    <div className="w-full bg-primary-100 h-[60px] flex items-center justify-between py-2 pr-12">
        <div className="flex items-center">
            <h2 className="w-[253px] text-center text-base16 font-normal text-green-400">COMPANY LOGO XXX</h2>
            <div className="flex gap-4 items-center">
                <img className='w-[26px] h-[25px]' src={HomeIcon} alt="" />
                <div className='flex flex-col bg-blue-100 rounded px-5 py-1'>
                    <span className='text-primary-100 text-base12 font-normal'>Module</span>
                    <h2 className='text-primary-100 font-bold text-sm'>USER management</h2>
                </div>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <div className='relative'>
                <img className='w-[25px] h-[26px]' src={RangIcon} alt="" />
                <div className='absolute left-1/2 -top-1 w-4 h-4 rounded-full bg-red-dark flex justify-center items-center'>
                    <span className='text-[10px] font-medium text-white'>1</span>
                </div>
            </div>  
            <img className='w-[25px] h-[26px]' src={SettingsIcon} alt="" />
            <div className='flex gap-4 items-center ml-2'>
                <img className='w-[25px] h-[26px]' src={UserIcon} alt="" />
                <div className='flex flex-col'>
                    <span className='text-sm font-bold text-white'>Mr. David Nguyen</span>
                    <span className='text-base12 font-normal text-white'>Home Company</span>
                </div>
                <img className='w-5 h-5' src={ArrowDownWhite} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header