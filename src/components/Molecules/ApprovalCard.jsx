import React from 'react'

const ApprovalCard = ({number, title, type}) => {
  if (type === 'internal') {
    return (
      <div className="rounded-xl bg-[#5948A233] max-w-[200px] w-full"> 
        <div className='px-8 py-10'>
          <p className='text-[80px] text-[#5948A2] leading-[80px] pb-4 text-center'>{number}</p>
          <p className='text-xl font-bold text-[#5948A2] text-center'>{title}</p>
        </div>
      </div>
    );
  }
  else if (type === 'external') {
    return (
      <div className="rounded-xl bg-[#E7F7FF] max-w-[200px] w-full">
        <div className='px-8 py-10'>
          <p className='text-[80px] text-[#2C69E6] leading-[80px] pb-4 text-center'>{number}</p>
          <p className='text-xl font-bold text-[#2C69E6] text-center'>{title}</p>
        </div>
      </div>
    );
  }
  }
 

export default ApprovalCard