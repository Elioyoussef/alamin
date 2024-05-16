import React from 'react';
import tick from '../../assets/icons/tick.svg'; // Ensure this path is correct

const CustomCheckbox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center cursor-pointer gap-1">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="appearance-none h-6 w-6 border border-gray-300 rounded-md bg-white checked:bg-[#2E357D] checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                style={{
                    backgroundImage: checked ? `url(${tick})` : "none",
                    backgroundSize: '50%',
                    backgroundPosition: 'center'
                }}
            />
            <span className="text-gray-700">{label}</span>
        </label>
    );
};

export default CustomCheckbox;
