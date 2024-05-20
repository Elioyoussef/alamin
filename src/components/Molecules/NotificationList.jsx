import React from 'react';
import NotificationCard from '../Atoms/NotificationCard';
import notifications from '../../json/notification.json';

const NotificationList = () => {
    return (
        <div>
            {notifications.map((notification, index) => (
                <NotificationCard
                    key={index}
                    date={notification.date}
                    category={notification.category}
                    text={notification.text}
                />
            ))}
        </div>
    );
};

export default NotificationList;
