import React from 'react'
const MediaBadge = ({ status }) => {
    const isMedia = status === 'media';
    const bgColor = isMedia ? 'bg-[#E7F7FF]' : 'bg-[#DAD3FE]';
    const textColor = isMedia ? 'text-[#2C69E6]' : 'text-[#5948A2]';
    const text = isMedia ? 'تواصل اجتماعي' : 'مقال صحفي';
    return (
        <div className={`flex items-center ${bgColor} rounded-full max-w-[115px] w-full justify-center`}>
            <p className={`${textColor} text-sm font-light text-center`}>{text}</p>
        </div>
    )
}

export default MediaBadge