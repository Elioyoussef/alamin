import React, { useState } from 'react';
import chevronDown from '../../assets/icons/chevronDown.svg';
const Dropdown = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('سنوي');

    const options = ['سنوي', 'شهري', 'أسبوعي', 'يومي'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <button onClick={toggleDropdown} className="px-2 py-2 bg-white border rounded-lg shadow flex items-center justify-between max-w-[100px] w-full">
                {selectedValue} <span className='w-5 h-5' ><img src={chevronDown} alt='chevron-down' /></span>
            </button>
            {isOpen && (
                <div className="absolute w-full bg-white shadow-md mt-1 z-20">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#F2F1F1]"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;