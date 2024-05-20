import React from 'react';
import NotificationList from './NotificationList';

const Notifications = () => {
    return (
        <div className="max-w-md mx-auto mt-5">
            <div className="flex justify-between items-center mb-4 px-4 bg-[#2C69E633] rounded-2xl py-2">
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-white bg-[#2C69E6] rounded-full px-4 py-2">6 تحديثات</span>
                </div>
                <div className='flex items-center gap-2'>
                    <h2 className="font-semibold text-gray-800">جديد</h2>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
            </div>
            <NotificationList />
        </div>
    );
};

export default Notifications;
