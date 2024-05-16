import React from 'react';
import notFound from '../assets/images/404.png';
const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center py-20'>
            <img src={notFound} alt='404' />
        </div>
    )
}

export default NotFoundPage