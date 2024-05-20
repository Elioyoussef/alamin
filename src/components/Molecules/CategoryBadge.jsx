import React from 'react';
import cultureLogo from '../../assets/icons/cultureLogo.svg';
import consultingLogo from '../../assets/icons/consultingLogo.svg';
import mediaLogo from '../../assets/icons/mediaLogo.svg';

const CategoryBadge = ({ category }) => {
    let bgColor, textColor, icon, textContext;

    switch (category) {
        case 'culture':
            bgColor = 'bg-[#2E357D33]';
            textColor = 'text-[#2E357D]';
            icon = cultureLogo;
            textContext = 'اللجنة الثقافية';
            break;
        case 'consulting':
            bgColor = 'bg-[#E7F7FF]';
            textColor = 'text-[#2C69E6]';
            icon = consultingLogo;
            textContext = 'اللجنة الاستشارية'
            break;
        case 'media':
            bgColor = 'bg-[#DAD3FE]';
            textColor = 'text-[#5948A2]';
            icon = mediaLogo;
            textContext = 'اللجنة الإعلامية';
            break;
        default:
            bgColor = 'bg-gray-200';
            textColor = 'text-gray-800';
            icon = null;
            textContext = "textContext"
            break;
    }

    return (
        <div className={`flex items-center ${bgColor} rounded-full px-1 py-1 max-w-[150px] w-full gap-2`}>
            <div className='max-w-4 mr-2'>
                <img src={icon} alt="task" className="block w-full" />
            </div>
            <span className={`${textColor} text-sm font-light`}>{textContext}</span>
        </div>
    );
}

export default CategoryBadge;
