import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../app/store';
import { setActiveItem } from '../features/sidebarSlice';

type Props = {
    icon: string;
    hoverIcon: string;
    text: string;
    isSmall?: boolean;
}

const IconTextSidebar = ({ icon, hoverIcon, isSmall, text }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const activeItem = useSelector((state: RootState) => state.sidebar.activeItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () =>{
    dispatch(setActiveItem(text.toLowerCase()));
    
    navigate(`/${text.toLowerCase()}`)
  }

  const isActive = activeItem === text.toLowerCase();

  return (
    <div
      className={`flex items-center gap-4 px-4 py-2 group cursor-pointer
        ${isActive || isHovered ? 'bg-gray-200' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
    >
      {isHovered || isActive ? (
        <img src={hoverIcon} alt="icon" className="w-5 h-5 "/>
      ) : (
        <img src={icon} alt="icon" className="w-5 h-5"/>
      )}
      {
        !isSmall &&
        <span className={`text-base font-medium
          ${isActive || isHovered ? 'text-primary' : 'text-gray-600'}`}>
          {text}
        </span>
      }
    </div>
  );
};

export default IconTextSidebar