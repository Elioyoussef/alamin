import React from 'react';
import notFound from '../../assets/images/notFound.svg';
const TasksTable = ({ data, columns, searchTerm, sortConfig, setSortConfig }) => {
    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedData = filteredData.sort((a, b) => {
        if (sortConfig.key) {
            const isReversed = sortConfig.direction === 'descending' ? -1 : 1;
            return isReversed * a[sortConfig.key].localeCompare(b[sortConfig.key]);
        }
        return 0;
    });
    const computedColumns = columns.map(column => ({
        ...column,
        width: column.width || (columns.length === 2 ? (column.accessor === 'title' ? 'w-4/5' : 'w-1/5') : 'w-auto')
    }));
    const handleSort = (key) => {
        setSortConfig({ key, direction: sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending' });
    };
    if (sortedData.length === 0) {
        return (
            <div className="max-w-[200px] mx-auto">
                <img src={notFound} alt="not found" className="w-full block" />
            </div>
        );
    }
    return (
        <table className="min-w-full text-sm divide-y divide-gray-300">
            <thead className="bg-[#FCFCFC]">
                <tr>
                    {computedColumns.map(column => (
                        <th key={column.accessor}
                            className={`${column.width} px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right cursor-pointer`}
                            onClick={() => column.isSortable && handleSort(column.accessor)}>
                            {column.Header}
                            {column.isSortable && sortConfig && sortConfig.key === column.accessor && (
                                <span className={`inline-block mr-2 transform ${sortConfig.direction === 'ascending' ? '' : 'rotate-180'}`}>
                                    ↓
                                </span>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#F3F3F3]">
                {sortedData.map((item, index) => (
                    <tr key={index}>
                        {computedColumns.map(column => (
                            <td key={column.accessor} className={`${column.width} px-6 py-4 text-wrap text-[#585958] font-semibold text-sm`}>
                                {column.render ? column.render(item[column.accessor]) : item[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TasksTable;
