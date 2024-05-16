import React from 'react'
const ClickableHorizontalCard = ({ title, number, percentage, icon, isClicked }) => {
    return (
        <div className='border-2 border-[#1C1A1A1A] rounded-xl w-full'>
            <div className='px-6 py-5'>
                <div className='flex gap-5 pb-3 items-center'>
                    <div className='max-w-14 w-full'>
                        <img src={icon} alt={title} />
                    </div>
                    <p className='text-2xl text-[#2E357D] font-bold font-lama'>{title}</p>
                </div>
                <div className='flex items-center gap-5'>
                    <p className='text-[54px] text-[#2E357D] font-medium'>{number}</p>
                    <div className='flex flex-col font-bold'>
                        <p className='text-sm text-[#1C1A1A]'>هذا الاسبوع</p>
                        <p className='text-sm text-[#1C1A1A]'><span className='text-[#6CE9A6]'>{percentage}</span> مقارنة بالأسبوع الماضي</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickableHorizontalCard