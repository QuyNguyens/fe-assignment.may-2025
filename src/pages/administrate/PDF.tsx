import GeneralIcon from '../../assets/general-icon.svg';
import GeneralInfo from './GeneralInfo';
import PercentIcon from '../../assets/percent-icon.svg';
import ArrowSquareOutIcon from '../../assets/ArrowSquareOut.svg';
import ArrowSquareOutColorIcon from '../../assets/ArrowSquareOut-color-icon.svg';
import RelatedIcon from '../../assets/related-icon.svg';
import CaretRight from '../../assets/CaretRight.svg';
import PerformanceIcon from '../../assets/ChartLineUp-icon.svg';
import NotePenIcon from '../../assets/NotePencil-icon.svg';
import ToolTip from '../../components/Tooltip';
import RelatedClient from './RelatedClient';
import Todo from './Todo';
import { useState } from 'react';
import ToggleSectionItem from './ToggleSectionItem';
const PDF = () => {

  const [sections, setSections] = useState({
    commission: false,
    recruitment: false,
    related: true,
    performance: false,
  });

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col p-3 gap-4">
      <div className="flex gap-2 items-center py-[10px] border-b border-gray-200">
        <img src={GeneralIcon} alt="" />
        <span className='text-gray-900 text-base16 font-medium'>GENERAL INFORMATION</span>
      </div>
      <GeneralInfo firstName='David' lastName='Nguyen' experience='5 years' personalWeb='david.com'/>
      <GeneralInfo firstName='David' lastName='Nguyen' experience='5 years' personalWeb='david.com'/>
      <div className='flex justify-between items-center pb-[10px] border-b border-gray-200'>
        <div className='flex gap-2 items-center'>
          <img src={PercentIcon} alt="" />
          <span className='text-gray-900 text-base16 font-medium'>COMMISSION STRUCTURES</span>
          <img className='w-5 h-5' src={CaretRight} alt="" />
        </div>
        <div className='relative flex items-center group'>
           <ToolTip
              content="You don’t have permission to open this link"
              className="absolute w-auto max-w-none whitespace-nowrap right-8 z-10 bg-dark text-white text-sm rounded-md px-3 py-[6px] hidden group-hover:block"
            />
          <img className='w-5 h-5' src={ArrowSquareOutIcon} alt="" />
        </div>
      </div>
      <ToggleSectionItem
        title="RECRUITMENT DOCUMENTS"
        icon={PerformanceIcon}
        rightIcon={ArrowSquareOutColorIcon}
        caretIcon={CaretRight}
        isOpen={sections.recruitment}
        onToggle={() => toggleSection('recruitment')}
      >
        <div className='mt-3 h-24 flex items-center justify-center'>
          <h2 className='text-xl font-medium'>Recruitment content</h2>
        </div>
      </ToggleSectionItem>
      <ToggleSectionItem
        title="RELATED CLIENTS & LOAN DOCUMENTS"
        icon={RelatedIcon}
        caretIcon={CaretRight}
        isOpen={sections.related}
        onToggle={() => toggleSection('related')}
      >
        <RelatedClient />
      </ToggleSectionItem>
      <ToggleSectionItem
        title="PERFORMANCE"
        icon={PerformanceIcon}
        caretIcon={CaretRight}
        isOpen={sections.performance}
        onToggle={() => toggleSection('performance')}
      >
         <div className='mt-3 h-24 flex items-center justify-center'>
          <h2 className='text-xl font-medium'>Performance content</h2>
        </div>
      </ToggleSectionItem>
      <div className='flex items-center gap-2 pb-[10px] border-b border-gray-200'>
          <img src={NotePenIcon} alt="" />
          <span className='text-gray-900 text-base16 font-medium'>TO-DO</span>
      </div>
      <Todo/>
    </div>
  )
}

export default PDF