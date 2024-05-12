import React from 'react';
import magnifierIcon from '../../assets/icons/magnifier.svg';
const SearchInput = ({ setSearchTerm }) => {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <img src={magnifierIcon} alt="Search" className="w-5 h-5 absolute right-3" />
            <input
                type="text"
                placeholder="بحث"
                className="pr-10 pl-3 py-2 w-full outline-none"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchInput;
