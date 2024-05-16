import React from 'react';

const ClickableHorizontalCard = ({ title, number, percentage, icon, isClicked, type, onClick, clickedIcon }) => {
    let bgColor = '';
    let textColor = 'text-[#2E357D]';

    if (isClicked) {
        if (type === 'events') {
            bgColor = 'bg-[#2C69E6]';
            textColor = 'text-white';
        } else if (type === 'media') {
            bgColor = 'bg-[#5948A2]';
            textColor = 'text-white';
        }
    }

    return (
        <div
            className={`border-2 border-[#1C1A1A1A] rounded-xl w-full cursor-pointer ${bgColor}`}
            onClick={onClick}
        >
            <div className='px-6 py-5'>
                <div className='flex gap-5 pb-3 items-center'>
                    <div className='max-w-14 w-full'>
                        {
                            isClicked ? (<img src={icon} alt={title} width={56} height={56} />) : (<img src={clickedIcon} alt={title} width={56} height={56} />)
                        }

                    </div>
                    <p className={`text-2xl font-bold font-lama ${textColor}`}>{title}</p>
                </div>
                <div className='flex items-center gap-5'>
                    <p className={`text-[54px] font-medium ${textColor}`}>{number}</p>
                    <div className='flex flex-col font-bold'>
                        <p className={`text-sm ${textColor}`}>هذا الاسبوع</p>
                        <p className={`text-sm ${textColor}`}>
                            <span className="text-[#6CE9A6]">{percentage}</span> مقارنة بالأسبوع الماضي
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClickableHorizontalCard;
