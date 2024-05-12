import React, { useState } from 'react'
import StatusBadge from '../Molecules/StatusBadge'
const TasksTable = () => {
    const allTasks = [
        { id: 1, title: "مهمة واحد", status: "done" },
        { id: 2, title: "مهمة اثنين", status: "done" },
        { id: 3, title: "مهمة ثلاثة", status: "pending" },
        { id: 4, title: "مهمة أربعة", status: "pending" },
        { id: 5, title: "مهمة خمسة", status: "pending" },
        { id: 6, title: "مهمة ستة", status: "done" },
        { id: 7, title: "مهمة سبعة", status: "done" },
        { id: 8, title: "مهمة ثمانية", status: "pending" },
        { id: 9, title: "مهمة تسعة", status: "done" }
    ];
    const [tasks, setTasks] = useState(allTasks.slice(0, 6));
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalTasks = allTasks.length;
    const totalPages = Math.ceil(totalTasks / itemsPerPage);

    const sortTasks = () => {
        const sortedTasks = [...tasks];
        if (sortDirection === 'ascending' || sortDirection === 'none') {
            sortedTasks.sort((a, b) => a.status.localeCompare(b.status));
            setSortDirection('descending');
        } else {
            sortedTasks.sort((a, b) => b.status.localeCompare(a.status));
            setSortDirection('ascending');
        }
        setTasks(sortedTasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    };

    const [sortDirection, setSortDirection] = useState('none');

    const goToNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= totalPages) {
            setCurrentPage(nextPage);
            setTasks(allTasks.slice((nextPage - 1) * itemsPerPage, nextPage * itemsPerPage));
        }
    };

    const goToPrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage > 0) {
            setCurrentPage(prevPage);
            setTasks(allTasks.slice((prevPage - 1) * itemsPerPage, prevPage * itemsPerPage));
        }
        console.log(currentPage)
    };
    const disabled = currentPage === 1;
    return (
        <div className="overflow-hidden overflow-x-auto border border-[#F3F3F3] rounded-lg">
            <table className="min-w-full text-sm divide-y divide-[#EAEBF2]">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="w-4/5 px-6 py-3 text-right text-xs font-medium text-[#585958] uppercase tracking-wider">
                            المهمة
                        </th>
                        <th scope="col" className="w-1/5 px-6 py-3 text-right text-xs font-medium text-[#585958] uppercase tracking-wider cursor-pointer" onClick={sortTasks}>
                            الحالة
                            <span className={`inline-block mr-2 transform ${sortDirection === 'ascending' ? 'rotate-180' : ''}`}>
                                ↓
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#F3F3F3]">
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-[#1D1E1D] font-semibold text-sm">
                                {task.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <StatusBadge status={task.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center p-4">
                <button onClick={goToPrevPage} className={`border rounded-lg ${disabled ? 'border-gray-400 text-gray-400' : 'border-[#1C1A1A80] text-[#1C1A1A]'} text-sm py-2 px-3 font-bold`}>
                    <span className="inline-block transform rotate-180 me-2 text-opacity-0">❯</span>
                    السابق
                </button>
                <button onClick={goToNextPage} className={`border rounded-lg ${disabled ? 'border-gray-400 text-gray-400' : 'border-[#1C1A1A80] text-[#1C1A1A]'} text-sm py-2 px-3 font-bold`}>
                    التالي
                    <span className="inline-block transform ms-2 text-opacity-0">❯</span>
                </button>
            </div>
        </div>
    );
}

export default TasksTable