import React from 'react'

const PageLayout = ({ children }) => {
    return (
        <div className='max-w-[1920px] mx-auto px-8 py-6'>
            {children}
        </div>
    )
}

export default PageLayout