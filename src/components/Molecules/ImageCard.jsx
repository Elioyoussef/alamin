import React from 'react'
// Component not fully structured and done !!!
const ImageCard = ({image}) => {
  return (
   <div className='w-[471px] h-[360px] bg-cover bg-center bg-no-repeat rounded-xl'style={{ backgroundImage: `url(${image})` }}></div>
  )
}

export default ImageCard