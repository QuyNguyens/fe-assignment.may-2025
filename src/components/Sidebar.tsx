import Logo from '../assets/logo-company.jpg';
import LogoEnd from '../assets/LogoEnd.svg';
import LogoEndSmall from '../assets/LogoEndSmall.svg';
import IconText from './IconText';
import OverViewIcon from '../assets/overview-icon.svg?react';
import OverViewIconHover from '../assets/overview-icon-hover.svg?react';
import InquiresIcon from '../assets/inquiries-icon.svg?react';
import InquiresIconHover from '../assets/inquiries-icon-hover.svg?react';
import EstimatorIcon from '../assets/estimator-icon.svg?react';
import EstimatorIconHover from '../assets/estimator-icon-hover.svg?react';
import ProjectsIconHover from '../assets/projects-icon-hover.svg?react';
import ProjectsIcon from '../assets/projects-icon-h.svg?react';
import AdministrationsIcon from '../assets/administrations-icon.svg?react';
import AdministrationsIconHover from '../assets/administrations-icon-hover.svg?react';
import DocumentationIcon from '../assets/documentdation-icon.svg?react';
import DocumentationIconHover from '../assets/documentdation-icon-hover.svg?react';
import RiverflowIcon from '../assets/river-flow-icon.svg';
interface SidebarProps{
    width: string;
    isSmall: boolean;
}

const Sidebar = ({width, isSmall}: SidebarProps) => {

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
                <IconText icon={OverViewIcon} iconHover={OverViewIconHover} text='Overview' isSmall={isSmall}/>
                <IconText icon={InquiresIcon} iconHover={InquiresIconHover} text='Inquiries' isSmall={isSmall}/>
                <IconText icon={EstimatorIcon} iconHover={EstimatorIconHover} text='Estimator' isSmall={isSmall}/>
                <IconText icon={ProjectsIcon} iconHover={ProjectsIconHover} text='Projects' isSmall={isSmall}/>
            </div>
            <div className='flex flex-col gap-2'>
                <IconText icon={AdministrationsIcon} iconHover={AdministrationsIconHover} text='Administrations' isSmall={isSmall}/>
                <IconText icon={DocumentationIcon} iconHover={DocumentationIconHover} text='Documentation' isSmall={isSmall}/>
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