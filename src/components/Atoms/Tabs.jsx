import React, { useState } from 'react';

function Tabs({ onTabSelect }) {
    const [isExternal, setIsExternal] = useState(false);

    const handleTabChange = (external) => {
        setIsExternal(external);
        onTabSelect(external);
    };

    return (
        <div className='max-w-[500px] mx-auto justify-around'>
            <div className="flex border-b border-[#1C1A1A80] justify-around">
                <button
                    className={`py-2.5 px-4 w-full font-semibold text-sm ${!isExternal ? 'border-b-2 border-[#2E357D] text-[#2E357D]' : 'text-gray-400'}`}
                    onClick={() => handleTabChange(false)}
                >
                    داخلية
                </button>
                <button
                    className={`py-2.5 px-4 w-full font-semibold text-sm ${isExternal ? 'border-b-2 border-[#2E357D] text-[#2E357D]' : ' text-gray-400'}`}
                    onClick={() => handleTabChange(true)}
                >
                    خارجية
                </button>
            </div>
        </div>
    );
}

export default Tabs;
