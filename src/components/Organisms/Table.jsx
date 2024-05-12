import React, { useState } from 'react'
import SearchInput from '../Molecules/SearchInput';
import TasksTable from '../Molecules/TasksTable';

const Table = ({ title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    return (
        <div className='shadow-cardShadow rounded-xl'>
            <div className='px-6 py-7'>
                <div className='flex items-center justify-between pb-5'>
                    <h1 className='text-[#2E357D] text-2xl font-bold'>{title}</h1>
                    <SearchInput setSearchTerm={searchTerm} />
                </div>
                <div>
                    <TasksTable searchTerm={searchTerm} sortConfig={sortConfig} setSortConfig={setSortConfig} />
                </div>
            </div>
        </div>
    )
}

export default Table