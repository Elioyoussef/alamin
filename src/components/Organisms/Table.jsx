import React, { useState } from 'react'

const Table = ({ title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    return (
        <div className='shadow-cardShadow rounded-xl'>
            <div className='px-6 py-7'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#2E357D] text-2xl font-bold'>{title}</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table