import Logo from '../assets/logo-company.jpg';
import LogoEnd from '../assets/LogoEnd.svg';
import LogoEndSmall from '../assets/LogoEndSmall.svg';
import OverViewIcon from '../assets/overview-icon.svg';
import OverViewHoverIcon from '../assets/overview-icon-hover.svg';
import InquiresIcon from '../assets/inquiries-icon.svg';
import InquiresHoverIcon from '../assets/inquiries-icon-hover.svg';
import EstimatorIcon from '../assets/estimator-icon.svg';
import EstimatorHoverIcon from '../assets/estimator-icon-hover.svg';
import ProjectsHoverIcon from '../assets/projects-icon-hover.svg';
import ProjectsIcon from '../assets/projects-icon-h.svg';
import AdministrationsIcon from '../assets/administrations-icon.svg';
import AdministrationsHoverIcon from '../assets/administrations-icon-hover.svg';
import DocumentationIcon from '../assets/documentdation-icon.svg';
import DocumentationHoverIcon from '../assets/documentdation-icon-hover.svg';
import RiverflowIcon from '../assets/river-flow-icon.svg';
import IconTextSidebar from './IconTextSidebar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveItem } from '../features/sidebarSlice';

interface SidebarProps{
    width: string;
    isSmall: boolean;
}

const Sidebar = ({width, isSmall}: SidebarProps) => {

    const dispatch = useDispatch();

    const location = useLocation();
    const path = location.pathname.split('/')[1];
    dispatch(setActiveItem(path));
  return (
    <div className={`${width} p-3 min-h-screen bg-gray-50 flex flex-col gap-8`}>
        <div className="flex gap-3 mt-1">
            <img className='w-12 h-12' src={Logo} alt="" />
            {!isSmall && <div className='flex flex-col'>
                <h3 className='text-primary text-xl font-semibold'>ABC Company</h3>
                <span className='text-base16 text-primary font-normal'>Lisa Rose</span>
            </div>}
        </div>
        <div className='h-full flex flex-col justify-between'>
            <div className='flex flex-col gap-2'>
                <IconTextSidebar icon={OverViewIcon} hoverIcon={OverViewHoverIcon} text='Overview' isSmall={isSmall}/>
                <IconTextSidebar icon={InquiresIcon} hoverIcon={InquiresHoverIcon} text='Inquiries' isSmall={isSmall}/>
                <IconTextSidebar icon={EstimatorIcon} hoverIcon={EstimatorHoverIcon} text='Estimator' isSmall={isSmall}/>
                <IconTextSidebar icon={ProjectsIcon} hoverIcon={ProjectsHoverIcon} text='Projects' isSmall={isSmall}/>
            </div>
            <div className='flex flex-col gap-2'>
                <IconTextSidebar icon={AdministrationsIcon} hoverIcon={AdministrationsHoverIcon} text='Administrations' isSmall={isSmall}/>
                <IconTextSidebar icon={DocumentationIcon} hoverIcon={DocumentationHoverIcon} text='Documentation' isSmall={isSmall}/>
                {!isSmall ? <div className='flex items-center justify-between px-4 py-[11px]'>
                    <img className='w-[134px] h-8' src={LogoEnd} alt="" />
                    <img className='w-[18px] h-[18px]' src={RiverflowIcon} alt="" />
                </div> : 
                    <div className='flex items-center py-[11px] justify-center'>
                        <img className='w-8 h-7' src={LogoEndSmall} alt="" />
                    </div>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar