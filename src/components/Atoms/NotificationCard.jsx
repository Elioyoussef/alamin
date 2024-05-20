import React from 'react';
import calendarLogo from '../../../src/assets/icons/calendarLogo.svg';

const NotificationCard = ({ date, category, text }) => {
    let categoryBgColor, categoryTextColor;

    switch (category) {
        case 'media':
            categoryBgColor = 'bg-[#2C55FB1A]';
            categoryTextColor = 'text-[#2C69E6]';
            category = 'التقارير الإعلامية';
            break;
        case 'internal':
            categoryBgColor = 'bg-[#5948A21A]';
            categoryTextColor = 'text-[#5948A2]';
            category = 'التواصل الداخي';
            break;
        case 'monitoring':
            categoryBgColor = 'bg-[#FDA29B1A]';
            categoryTextColor = 'text-[#FDA29B]';
            category = 'الرصد الإعلامي';
            break;
        default:
            categoryBgColor = 'bg-gray-200';
            categoryTextColor = 'text-gray-800';
            category = 'خطء';
            break;
    }

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-cardShadow mb-3">
            <div className='py-5 px-6'>
                <div className="flex items-center justify-between pb-3">
                    <div className={`py-0.5 px-2.5 rounded-2xl ${categoryBgColor}`}>
                        <span className={`text-xs ${categoryTextColor} font-medium`}>{category}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="text-gray-500 text-xs">{date}</div>
                        <img src={calendarLogo} alt='Calendar Logo' width={20} height={20} />
                    </div>
                </div>
                <div className="text-right text-[#1C1A1A] text-sm font-medium">{text}</div>
            </div>
        </div>
    );
};

export default NotificationCard;