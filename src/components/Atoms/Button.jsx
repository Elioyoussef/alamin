import React, { useState } from 'react';

const Button = ({ children, borderColor, handleClick }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
        handleClick();
    };

    const handleIconClick = (e) => {
        e.stopPropagation();
        setIsActive(false);
    };


    const defaultStyle = {
        borderColor: borderColor,
        color: borderColor
    };

    return (
        <button
            className={`border-2 p-2.5 font-medium rounded-lg transition duration-300 ease-in-out ${isActive ? 'shadow-inner' : 'shadow-md'}`}
            onClick={toggleButton}
            style={defaultStyle}
        >
            {isActive && (
                <span className="inline-block me-2 cursor-pointer" onClick={handleIconClick}>&times;</span>
            )}
            {children}
        </button>
    );
}

export default Button;
