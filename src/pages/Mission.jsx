import React from 'react'
import Dropdown from '../components/Atoms/Dropdown'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import Table from '../components/Organisms/Table'
const Mission = () => {
  return (
    <div>
      <div className='py-6 flex justify-end'>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      <div className='flex gap-5 items-center pb-6'>
        <HorizontalCard title='مهمة جارية' status='pending' number='34' percentage='-8%' />
        <HorizontalCard title='مهمة منجزة' status='done' number='45' percentage='+45%' />
      </div>
      <div>
        <Table title='سجل مهام المكتب الإعلامي لسمو الأمين' />
      </div>
    </div>

  )
}

export default Mission