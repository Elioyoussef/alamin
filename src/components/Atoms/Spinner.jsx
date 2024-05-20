import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner border-t-4 border-b-4 border-[#2E357D] rounded-full w-12 h-12 animate-spin"></div>
        </div>
    );
};

export default Loading;
