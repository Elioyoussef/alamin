import React from 'react'
import { Link } from 'react-router-dom'
import leftArrow from '../../assets/icons/left-arrow.svg'
const Card = ({title, link, children}) => {
  const elio = console.log('elio');
  return (
    <div className='rounded-xl shadow-cardShadow w-[471px] h-auto'>
        <div className='px-5 py-5 w-full '>
            <Link className='flex justify-between items-center' to={link}>
                <h1 className='text-2xl text-[#2E357D] font-bold'>{title}</h1>
                <span className='max-w-5'><img className='block w-full' src={leftArrow} alt={title}/></span>
            </Link>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Card