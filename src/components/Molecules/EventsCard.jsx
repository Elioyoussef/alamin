import React from 'react'

const EventsCard = ({number, title, image}) => {
  return (
    <div className="rounded-xl max-w-[220px] w-full border border-[#E3E3E3]"> 
    <div className='px-4 py-8'>
      <p className='text-[80px] text-[#2E357D] leading-[80px] pb-2 text-center'>{number}</p>
      <p className='text-xl font-bold text-[#32477A] text-center leading-5 pb-8'>{title}</p>
      <div className='max-w-[170px] mx-auto'>
      <img src={image} alt={title} className='w-full block'/>
      </div>
    </div>
  </div>
  )
}

export default EventsCard