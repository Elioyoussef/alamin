import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Amin from '../assets/images/alamin-banner.png'
import CarouselTwo from '../assets/images/carousel-two.png'
import CarouselThree from '../assets/images/carousel-three.png'
import Notifications from '../components/Molecules/Notification'
import Card from '../components/Molecules/Card';
import PostsSummary from '../components/Molecules/PostsSummary';
import GaugeChart from '../components/Molecules/GaugeChart';

const Home = () => {
  return (
    <div className='flex align-top gap-6 py-5'>
      <div className='w-1/4'>
        <Notifications />
      </div>
      <div className='flex flex-col gap-6 w-3/4'>
        <div className='rounded-xl w-full'>
          <img src={Amin} alt="Alamin Picture" className='block w-full'/>
        </div>
        <div className='bg-[#EAEBF2] rounded-xl'>
            <div className='px-6 py-5 flex justify-between items-center'>
                <div><PostsSummary title="موجز عن أخر منشور " totalPercentage="+8.11" comparisonPercentage="+2.58%" status="ممتاز" piePercentage="25"/></div>
                <div><GaugeChart value={50} min={400} max={850} label="جيد" status="حساب متفاعل" /></div>
                <div><GaugeChart value={300} min={400} max={850} label="جيد" status="حساب متفاعل" /></div>
            </div>
        </div>
        <div>
          <Card title="الفيديو والصور" link='/visuals'>
            <div className='py-5'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={3.5}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src={CarouselTwo} alt="Carousel Two" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CarouselThree} alt="Carousel Three" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CarouselTwo} alt="Carousel Two" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CarouselThree} alt="Carousel Two" />
              </SwiperSlide>
            </Swiper>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home