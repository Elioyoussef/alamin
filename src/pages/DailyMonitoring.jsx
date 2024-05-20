import React, { useState } from 'react';
import Dropdown from '../components/Atoms/Dropdown';
import ClickableHorizontalCard from '../components/Molecules/ClickableHorizontalCard';
import Table from '../components/Organisms/Table';
import MediaBadge from '../components/Atoms/MediaBadge';
import EventsBadge from '../components/Molecules/EventsBadge';
import Download from '../components/Atoms/Download';
import mediaEvent from '../assets/icons/mediaEventsUnclicked.svg';
import trackedEvent from '../assets/icons/trackedEventsUnclicked.svg';
import trackedEventsClicked from '../assets/icons/trackedEventsClicked.svg';
import mediaEventsClicked from '../assets/icons/mediaEventsClicked.svg';
import EventsList from '../components/Molecules/EventsList';
import MonitoringContent from '../components/Molecules/MonitoringContent';

const DailyMonitoring = () => {
  const [clickedCard, setClickedCard] = useState('events');

  const columns = [
    { Header: 'تفاصيل الرصد', accessor: 'title', isSortable: false },
    { Header: 'المصدر', accessor: 'source', isSortable: true },
    { Header: 'التاريخ', accessor: 'date', isSortable: true },
    { Header: 'تصنيفها', accessor: 'status', render: classification => <MediaBadge classification={classification} />, isSortable: true },
  ];
  const columns2 = [
    { Header: 'عنوان الخبر', accessor: 'title', isSortable: false },
    { Header: 'الحالة', accessor: 'classification', render: classification => <EventsBadge classification={classification} />, isSortable: true },
    { Header: 'تصنيفها', accessor: 'status', render: status => <MediaBadge status={status} />, isSortable: true },
    { Header: 'تحميل', accessor: 'download', render: () => <Download />, isSortable: false }
  ];
  const dataEvents = [
    {
      id: 1,
      title: "استعادة وقت استجابة أسرع لبيانات سجل المراحل الكبرى",
      source: " محمد عبد الكريم",
      date: "12 أبريل 2024",
      status: "media"
    },
    {
      id: 2,
      title: "تحديث بيانات التقويم الاجتماعي",
      source: "محمد عبد الكريم",
      date: "15 أبريل 2024",
      status: "مقال صحفي"
    },
    {
      id: 3,
      title: "مراجعة مقابلات الشخصيات الكبرى",
      source: " محمد عبد الكريم",
      date: "15 أبريل 2024",
      status: "media"
    },
    {
      id: 4,
      title: "استعراض الفعاليات الأخيرة في المجتمع",
      source: " محمد عبد الكريم",
      date: "10 أبريل 2024",
      status: "مقال صحفي"
    }
  ];

  const dataMedia = [
    {
      id: 1,
      title: "تقرير إعلامي عن الاقتصاد",
      status: "تواصل اجتماعي",
      classification: "انتهى"
    },
    {
      id: 2,
      title: "مراجعة إعلامية للتكنولوجيا",
      status: "media",
      classification: "جاري"
    },
    {
      id: 3,
      title: "تحليل إعلامي للسياسة",
      status: "تواصل اجتماعي",
      classification: "انتهى"
    },
    {
      id: 4,
      title: "تقرير إعلامي عن الثقافة",
      status: "media",
      classification: "جاري"
    }
  ];

  const handleCardClick = (type) => {
    setClickedCard(prevType => (prevType === type ? null : type));
  };

  return (
    <div className='py-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#2E357D] text-2xl font-bold'>المحتوى المدخل اخيرا</h1>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      <div className='flex items-top gap-5 py-2.5'>
        <div className='w-1/4'>
          <EventsList />
        </div>
        <div className='w-3/4'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
              <ClickableHorizontalCard
                title="الأحداث المرصودة"
                number="93"
                percentage="-8%"
                icon={trackedEvent}
                clickedIcon={trackedEventsClicked}
                isClicked={clickedCard === 'events'}
                type="events"
                onClick={() => handleCardClick('events')}
              />
              <ClickableHorizontalCard
                title="التقارير الإعلامية"
                number="19"
                percentage="+45%"
                icon={mediaEvent}
                clickedIcon={mediaEventsClicked}
                isClicked={clickedCard === 'media'}
                type="media"
                onClick={() => handleCardClick('media')}
              />
            </div>
            <div>
              <MonitoringContent type={clickedCard} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {clickedCard === 'events' && <Table title="الرصد اليومي" columns={columns} data={dataEvents} />}
        {clickedCard === 'media' && <Table title="التقارير الإعلامية" columns={columns2} data={dataMedia} />}
      </div>
    </div>
  )
}

export default DailyMonitoring;
