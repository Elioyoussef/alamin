import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const LinkIcon = ({ path, label, icon, activeIcon }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <li className="text-[#1C1A1A]">
      <Link to={path} className={`flex items-center gap-2 ${isActive ? 'text-white bg-[#2E357D] p-3 rounded-xl font-medium transition ease-out duration-500' : 'text-[#1C1A1A]'}`}>
        <img src={isActive ? activeIcon : icon} alt={label} width={20} height={20} />
        <p className='lg:text-base md:text-xs'>{label}</p>
      </Link>
    </li>
  );
};

export default LinkIcon;