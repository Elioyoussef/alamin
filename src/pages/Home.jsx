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

const Home = () => {
  return (
    <div className='flex align-top gap-6 py-5'>
      <div>
        <Notifications />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='rounded-xl'>
          <img src={Amin} alt="Alamin Picture" />
        </div>
        <div></div>
        <div>
          <Card title="الفيديو والصور" link='/media'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src={CarouselTwo} alt="Carousel Two" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CarouselThree} alt="Carousel Three" />
              </SwiperSlide>
            </Swiper>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home