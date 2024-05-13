import React from 'react'
import SearchInput from '../Molecules/SearchInput'
import Button from '../Atoms/Button'
import FilterBtn from '../Atoms/FilterBtn'
const SocialBoard = ({ boardTitle, handleSearchChange }) => {
    const yellowBtn = "#EFCB81"
    const greenBtn = "#039855"
    const purpleBtn = "#AB98FD"
    const blackBtn = "#1C1A1A"
    return (
        <div className='shadow-cardShadow rounded-xl'>
            <div className='py-7  px-6'>
                <div className='flex items-center justify-between pb-5'>
                    <h1 className='text-[#2E357D] text-2xl font-bold'>{boardTitle}</h1>
                    <div className='flex items-center gap-3'>
                        <Button children='مقترحات جديدة' borderColor={yellowBtn} handleClick={() => console.log('clicked')} />
                        <Button children='مقترحات معتمدة' borderColor={greenBtn} handleClick={() => console.log('clicked')} />
                        <Button children='تم استلام رد' borderColor={purpleBtn} handleClick={() => console.log('clicked')} />
                        <Button children='الأرشيف' borderColor={blackBtn} handleClick={() => console.log('clicked')} />
                    </div>
                    <div className='flex items-center'>
                        <SearchInput setSearchTerm={handleSearchChange} />
                        <FilterBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialBoard