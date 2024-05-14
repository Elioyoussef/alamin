import React, { useState } from 'react'
import SearchInput from '../Molecules/SearchInput'
import Button from '../Atoms/Button'
import FilterBtn from '../Atoms/FilterBtn'
import categoryWhite from '../../assets/icons/categoryWhite.svg'
import categoryBlack from '../../assets/icons/categoryBlack.svg'
import listBlack from '../../assets/icons/listBlack.svg'
import listWhite from '../../assets/icons/listWhite.svg'
import RequestItem from './RequestItem'

const SocialBoard = ({ boardTitle, handleSearchChange }) => {
    const [isCategoryView, setIsCategoryView] = useState(true)
    const [isListView, setIsListView] = useState(false)
    const yellowBtn = "#EFCB81"
    const greenBtn = "#039855"
    const purpleBtn = "#AB98FD"
    const blackBtn = "#1C1A1A"

    const handleCategoryView = () => {
        setIsCategoryView(true)
        setIsListView(false)
    }
    const handleListView = () => {
        setIsCategoryView(false)
        setIsListView(true)
    }
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
                    <div className='flex items-center justify-between gap-3'>
                        <SearchInput setSearchTerm={handleSearchChange} />
                        <FilterBtn />
                        <button className={`px-2 py-2 border rounded-lg shadow flex justify-center items-center max-w-10 ${isListView ? "bg-[#2E357D]" : "bg-white"}`}
                            onClick={handleListView}
                        >
                            {
                                isListView ? <img src={listWhite} alt='category-white' /> : <img src={listBlack} alt='category-black' />
                            }
                        </button>
                        <button className={`px-2 py-2 border rounded-lg shadow flex justify-center items-center max-w-10 ${isCategoryView ? "bg-[#2E357D]" : "bg-white"}`}
                            onClick={handleCategoryView}>
                            {
                                isCategoryView ? <img src={categoryWhite} alt='category-white' /> : <img src={categoryBlack} alt='category-black' />
                            }
                        </button>
                    </div>
                </div>
                <div>
                    <RequestItem handleSearchChange={handleSearchChange} />
                </div>
            </div>
        </div>
    )
}

export default SocialBoard