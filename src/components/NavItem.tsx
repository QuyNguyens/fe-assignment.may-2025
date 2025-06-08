import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavItemProps{
    to: string;
    icon: string;
    activeIcon: string;
    label: string;
    isSmall?: boolean;
}

function NavItem({ to, icon, activeIcon, label, isSmall }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-4 px-4 py-2 group cursor-pointer ${
        isActive ? 'bg-gray-200' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isActive || isHovered ? activeIcon : icon} alt="" className="h-5 w-5" />
      {
        !isSmall &&
        <span className={`text-base font-medium font-ibmFlexSans
          ${isActive || isHovered ? 'text-primary' : 'text-gray-600'}`}>
          {label}
        </span>
      }
    </NavLink>
  );
}

export default NavItem;