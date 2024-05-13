import React, { useState } from 'react'
import Tabs from '../components/Atoms/Tabs'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import SocialBoard from '../components/Organisms/SocialBoard'
import Dropdown from '../components/Atoms/Dropdown'
import Flowers from '../assets/icons/flowers.svg'
import Mail from '../assets/icons/mail.svg'
import Message from '../assets/icons/message.svg'
import Phone from '../assets/icons/phone.svg'

const Social = () => {
  const [showExternal, setShowExternal] = useState(false);
  return (
    <div className='py-6'>
      <div className='flex items-center justify-between pb-7'>
        <div></div>
        <div className='max-w-[500px] w-full'>
          <Tabs onTabSelect={setShowExternal} />
        </div>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      {
        !showExternal ? (
          <div>
            <div className='flex items-center justify-between gap-5 pb-6'>
              <HorizontalCard title='باقة ورد' number='82' percentage='+12%' icon={Flowers} />
              <HorizontalCard title='خطاب تهنئة' number='88' percentage='-8%' icon={Mail} />
              <HorizontalCard title='رسالة نصية' number='62' percentage='+45%' icon={Message} />
              <HorizontalCard title='مكالمة' number='189' percentage='+8%' icon={Phone} />
            </div>
            <SocialBoard boardTitle='جهات الاتصال' />
          </div>
        ) : (
          <div>
            <div className='flex items-center justify-between gap-5 pb-6'>
              <HorizontalCard title='باقة ورد' number='120' percentage='+12%' icon={Flowers} />
              <HorizontalCard title='خطاب تهنئة' number='144' percentage='-8%' icon={Mail} />
              <HorizontalCard title='رسالة نصية' number='82' percentage='+45%' icon={Message} />
              <HorizontalCard title='مكالمة' number='90' percentage='+8%' icon={Phone} />
            </div>
            <SocialBoard boardTitle='مقترحات بإنتظار المراجعة' />
          </div>
        )
      }
    </div>
  )
}

export default Social