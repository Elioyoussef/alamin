import React from 'react'
// Component not fully structured and done !!!
const ImageCard = ({ image }) => {
  return (
    <div className='max-w-[471px] h-[360px] bg-cover bg-center bg-no-repeat rounded-xl w-full' style={{ backgroundImage: `url(${image})` }}></div>
  )
}

export default ImageCard