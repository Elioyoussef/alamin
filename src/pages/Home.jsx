import React from 'react'
import Card from '../components/Molecules/Card'
import ApprovalCard from '../components/Molecules/ApprovalCard'
const Home = () => {
  return (
    <div className='flex align-top gap-3 py-5'>
      <div>
        Calendar
      </div>
      <div className='flex flex-col gap-7'>
        <Card title='اجتماعيات' link='/social'>
          <ApprovalCard number='30' title='موافقة داخلية'/>
        </Card>
        <Card title='الرصد اليومي' link='/daily-monitoring'/>
      </div>
      <div className='flex flex-col gap-7'>
        <Card title='الفيديو والصور' />
        <Card title='الفيديو والصور' link='/media'/>
      </div>
    </div>
  )
}

export default Home