import React from 'react'
import upIcon from '../../assets/icons/up-circle.svg'
import PieChart from './PieChart'
const PostsSummary = ({ title, totalPercentage, comparisonPercentage, status, piePercentage }) => {
    return (
        <div className='p-4 bg-white rounded-2xl'>
            <h3 className='text-[#1D1929] text-2xl font-bold pb-6'>{title}</h3>
            <div className='flex items-start gap-2.5'>
                <div>
                    <PieChart percentage={piePercentage} />
                </div>
                <div className='flex gap-2.5 flex-col'>
                    <div className='pb-8'>
                        <p className='text-[#1C1A1A] text-[26px] font-bold text-end pb-4'>{totalPercentage}%</p>
                        <div className='flex items-center gap-1 justify-end'>
                            <p className='text-[11px] text-[#717171] font-medium'>مقارنة بالمنشور السابق <span className='text-[#5948A2] font-bold text-xs'>{comparisonPercentage}</span></p>
                            <img src={upIcon} alt='UP' width={15} height={15} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2.5 justify-end'>
                            <p className='text-sm text-[#717171]'>الشكاوي والمطالبات</p>
                            <div className='w-3 h-3 bg-[#5948A2] rounded-[4px]'></div>
                        </div>
                        <div className='flex items-center gap-2.5 pb-4 justify-end'>
                            <p className='text-sm text-[#717171]'>ردود إيجابية</p>
                            <div className='w-3 h-3 bg-[#61CC72] rounded-[4px]'></div>
                        </div>
                    </div>
                    <p className='text-[#717171]'>الحالة العامة للمنشور <span className='text-[#5B58E1] font-bold'>{status}</span></p>
                </div>
            </div>
        </div>
    )
}

export default PostsSummary