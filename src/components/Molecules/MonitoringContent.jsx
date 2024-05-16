import React from 'react';
import userLogo from '../../assets/icons/userLogo.svg';
import galleryLogo from '../../assets/icons/galleryLogo.svg';
import xLogo from '../../assets/icons/xLogo.svg';
import linkedInLogo from '../../assets/icons/linkedInLogo.svg';
import instaLogo from '../../assets/icons/instaLogo.svg';
import squaredLogo from '../../assets/icons/squaredLogo.svg';

const MonitoringContent = ({ type }) => {
    const items = [
        { id: 1, icon: userLogo, percentage: 100 },
        { id: 2, icon: galleryLogo, percentage: 35 },
        { id: 3, icon: xLogo, percentage: 60 },
        { id: 4, icon: linkedInLogo, percentage: 80 },
        { id: 5, icon: instaLogo, percentage: 50 },
        { id: 6, icon: squaredLogo, percentage: 75 },
    ];

    const itemsMedia = [
        { id: 1, text: "حساب سمو الأمين", percentage: 80 },
        { id: 2, text: "ظهور اعلامي", percentage: 100 },
        { id: 3, text: "التواصل الاجتماعي", percentage: 60 }
    ];

    return (
        <div className="p-6 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-[#2E357D] text-2xl font-bold mb-4 text-right">المحتوى المرصود</h2>
            <ul className="space-y-3">
                {type === 'events' ? items.map(item => (
                    <li key={item.id} className="flex justify-between items-center gap-3">
                        <div className="flex items-center gap-2">
                            <img src={item.icon} alt="Social Icon" width={24} height={24} />
                        </div>
                        <div className="w-full h-2.5 bg-transparent rounded">
                            <div className="h-full bg-[#EFCB81]" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                    </li>
                )) : itemsMedia.map(item => (
                    <li key={item.id} className="flex justify-between items-center text-nowrap gap-2 pb-9">
                        <div className="flex items-center gap-2">
                            <span className="text-right text-[#2E357D] font-bold">{item.text}</span>
                        </div>
                        <div className="w-full h-5 bg-transparent rounded">
                            <div className="h-full bg-[#EFCB81]" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MonitoringContent;
