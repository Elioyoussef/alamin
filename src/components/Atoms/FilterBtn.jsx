import React, { useState } from 'react';
import Filter from '../../assets/icons/Filter.svg';
const FilterBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('فرز');

    const options = ['الأحدث', 'حسب التاريخ'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };
    return (
        <div className={`relative`}>
            <button onClick={toggleDropdown} className="px-2 py-2 bg-white border rounded-lg shadow flex items-center justify-between max-w-[100px] w-full gap-2">
                {selectedValue} <span><img src={Filter} alt='chevron-down' className='w-5 h-5' /></span>
            </button>
            {isOpen && (
                <div className="absolute w-full bg-white shadow-md mt-1 z-20">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="py-1 hover:bg-gray-100 cursor-pointer border-b border-[#F2F1F1] text-center text-sm"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterBtn