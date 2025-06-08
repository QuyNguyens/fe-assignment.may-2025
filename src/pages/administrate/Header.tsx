import HomeIcon from '../../assets/home-icon.svg';
import RangIcon from '../../assets/rang-icon.svg';
import SettingsIcon from '../../assets/settings-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import ArrowDownWhite from '../../assets/arrow-down-white.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="w-full sticky top-0 z-10 bg-primary-100 h-[60px] flex items-center justify-between py-2 pr-12">
        <div className="flex items-center">
            <h2 className="w-[253px] text-center text-base16 font-normal text-green-400"
                onClick={() => navigate('/')}
            >COMPANY LOGO XXX</h2>
            <div className="gap-4 items-center hidden lg:flex">
                <img className='w-[26px] h-[25px]' src={HomeIcon} alt="" />
                <div className='flex flex-col bg-blue-100 rounded px-5 py-1'>
                    <span className='text-primary-100 text-base12 font-normal'>Module</span>
                    <h2 className='text-primary-100 font-bold text-sm'>USER management</h2>
                </div>
            </div>
        </div>
        <div className='relative flex gap-4 items-center' ref={ref}>
            <div className='relative'>
                <img className='w-[25px] h-[26px]' src={RangIcon} alt="" />
                <div className='absolute left-1/2 -top-1 w-4 h-4 rounded-full bg-red-dark flex justify-center items-center'>
                    <span className='text-base10 font-medium text-white'>1</span>
                </div>
            </div>  
            <img className='w-[25px] h-[26px]' src={SettingsIcon} alt="" />
            <div className='flex gap-4 items-center ml-2'
                 onClick={() => setIsOpen(prev => !prev)}>      
                <img className='w-[25px] h-[26px]' src={UserIcon} alt="" />
                <div className='hidden md:flex lg:flex flex-col'>
                    <span className='text-sm font-bold text-white'>Mr. David Nguyen</span>
                    <span className='text-base12 font-normal text-white'>Home Company</span>
                </div>
                <img className='w-5 h-5' src={ArrowDownWhite} alt="" />
            </div>
            {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded z-50">
                <ul className="py-2 text-sm text-gray-700">
                    <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Themes</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
            </div>
            )}
        </div>
    </div>
  )
}

export default Header