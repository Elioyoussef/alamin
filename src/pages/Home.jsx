import React from 'react'
import Card from '../components/Molecules/Card'
import ApprovalCard from '../components/Molecules/ApprovalCard'
import EventsCard from '../components/Molecules/EventsCard'
import ImageCard from '../components/Molecules/ImageCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Diagram from '../assets/images/diagram.svg'
import Amin from '../assets/images/alamin.png'
import CarouselOne from '../assets/images/carousel-one.png'
import CarouselTwo from '../assets/images/carousel-two.png'
import CarouselThree from '../assets/images/carousel-three.png'
import CalendarImage from '../assets/images/calendar.png'
import PageLayout from '../components/Template/PageLayout'


const Home = () => {
  return (
    <PageLayout>
      <div className='flex align-top gap-4 py-5'>
        <div>
          <img src={CalendarImage} alt='test-calendar' />
        </div>
        <div className='flex flex-col gap-7'>
          <Card title='اجتماعيات' link='/social'>
            <div className='py-10 flex items-top justify-between gap-2'>
              <ApprovalCard number='30' title='موافقة داخلية' type='internal' />
              <ApprovalCard number='22' title='موافقة داخلية' type='external' />
            </div>
          </Card>
          <Card title='الرصد اليومي' link='/daily-monitoring'>
            <div className='py-10 flex items-top justify-center'>
              <EventsCard number='34' title='حدث مرصود' image={Diagram} />
              <EventsCard number='12' title='تقرير اعلامي' image={Diagram} />
            </div>
          </Card>
        </div>
        <div className='flex flex-col gap-7'>
          <ImageCard image={Amin} />
          <Card title='الفيديو والصور' link='/media'>
            <div className='max-w-[372px] mx-auto w-full pt-10 pb-[77px]'>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
              >
                <SwiperSlide><img src={CarouselTwo} alt={CarouselTwo} /></SwiperSlide>
                <SwiperSlide><img src={CarouselTwo} alt={CarouselTwo} /></SwiperSlide>
                <SwiperSlide><img src={CarouselThree} alt={CarouselThree} /></SwiperSlide>
              </Swiper>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home