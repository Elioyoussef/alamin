import React from 'react'
import pendingBadge from '../../assets/icons/pendingBadge.svg'
import doneBadge from '../../assets/icons/doneBadge.svg'

const StatusBadge = ({ status }) => {
    const isDone = status === 'done';
    const bgColor = isDone ? 'bg-[#DAD3FE]' : 'bg-[#E7F7FF]';
    const textColor = isDone ? 'text-[#5948A2]' : 'text-[#2C69E6]';
    const text = isDone ? 'مهمة جارية' : 'مهمة منجزة';
    const icon = isDone ? doneBadge : pendingBadge;
    return (
        <div className={`flex items-center ${bgColor} rounded-full px-1 max-w-[115px] w-full`}>
            <div className='max-w-3.5 ml-2'>
                <img src={icon} alt={text} className="block w-full" />
            </div>
            <span className={`${textColor} text-sm font-light`}>{text}</span>
        </div>
    )
}

export default StatusBadge