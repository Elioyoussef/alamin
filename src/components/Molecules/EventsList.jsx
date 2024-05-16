import React, { useState, useEffect } from 'react';
import eventsData from '../../json/events.json';

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsData);
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <p className='pb-2 text-[#1C1A1A] text-xs font-bold'>الثلاثاء 25 أغسطس 2024</p>
            {events.map(event => (
                <div key={event.id} className="mb-4 p-3 bg-gray-100 rounded-xl">
                    <h4 className="text-base font-bold text-[#001D66] pb-1.5"><span className='bg-[#D4E0F9] text-[#2C69E6] text-sm p-1.5 rounded-3xl me-2.5'>جديد</span>{event.description}</h4>
                    <p className="text-sm text-[#001D66] font-bold pb-1.5">{event.date} الساعة {event.time}</p>
                    <p className="text-sm text-[#001D66] font-medium pb-1.5">{event.location}</p>
                </div>
            ))}
        </div>
    );
};

export default EventsList;
