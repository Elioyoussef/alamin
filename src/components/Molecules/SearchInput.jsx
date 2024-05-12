import React from 'react'
import magnifierIcon from '../../assets/icons/magnifier.svg'

const SearchInput = ({ setSearchTerm }) => {
    return (
        <div className="relative flex items-center border border-[#DDDFDD] rounded-lg overflow-hidden">
            <img src={magnifierIcon} alt="بحث" className="w-5 h-5 absolute right-3" />
            <input
                type="text"
                placeholder="بحث"
                className="pr-10 pl-3 py-2 w-full outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchInput