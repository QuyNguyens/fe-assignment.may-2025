import React from 'react';

interface ToggleSectionItemProps {
  title: string;
  icon: string;
  rightIcon?: string;
  caretIcon: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

const ToggleSectionItem: React.FC<ToggleSectionItemProps> = ({
  title,
  icon,
  rightIcon,
  caretIcon,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div>
      <div
        className="flex items-center gap-2 pb-[10px] border-b border-gray-200 cursor-pointer"
        onClick={onToggle}
      >
        <div className='w-full flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={icon} alt="" />
                <span className="text-gray-900 text-base16 font-medium">{title}</span>
                <img
                className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                src={caretIcon}
                alt=""
                />
            </div>
            {rightIcon && <img src={rightIcon} alt=""/>}
        </div>
      </div>
      {isOpen && children}
    </div>
  );
};

export default ToggleSectionItem;
