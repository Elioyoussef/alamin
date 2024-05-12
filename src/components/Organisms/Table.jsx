import React, { useState } from 'react';
import SearchInput from '../Molecules/SearchInput';
import TasksTable from '../Molecules/TasksTable';

const Table = ({ title, data, columns }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const handleSearchChange = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };

    return (
        <div className='shadow-cardShadow rounded-xl'>
            <div className='py-7  px-6'>
                <div className='flex items-center justify-between pb-5'>
                    <h1 className='text-[#2E357D] text-2xl font-bold'>{title}</h1>
                    <SearchInput setSearchTerm={handleSearchChange} />
                </div>
                <TasksTable data={data} columns={columns} searchTerm={searchTerm} sortConfig={sortConfig} setSortConfig={setSortConfig} />
            </div>
        </div>
    );
}

export default Table;
