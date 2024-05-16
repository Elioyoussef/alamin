import React from 'react'
import Dropdown from '../components/Atoms/Dropdown'
import ClickableHorizontalCard from '../components/Molecules/ClickableHorizontalCard'
import Table from '../components/Organisms/Table';
import StatusBadge from '../components/Molecules/StatusBadge';
import mediaEvent from '../assets/icons/mediaEventsUnclicked.svg';
import trackedEvent from '../assets/icons/trackedEventsUnclicked.svg';
import EventsList from '../components/Molecules/EventsList';
const DailyMonitoring = () => {
  const columns = [
    { Header: 'تفاصيل الرصد', accessor: 'title', isSortable: false },
    { Header: 'المصدر', isSortable: true },
    { Header: 'التاريخ', accessor: 'date', isSortable: true },
    { Header: 'تصنيفها', accessor: 'status', render: status => <StatusBadge status={status} />, isSortable: true },
  ];
  const data = [
    {
      "id": 1,
      "title": "استعادة وقت استجابة أسرع لبيانات سجل المراحل الكبرى",
      "source": "الأحداث الاجتماعية",
      "date": "15 أبريل 2024",
      "status": "نشط"
    },
    {
      "id": 2,
      "title": "تحديث بيانات التقويم الاجتماعي",
      "source": "التقويم الاجتماعي",
      "date": "15 أبريل 2024",
      "status": "نشط"
    },
    {
      "id": 3,
      "title": "مراجعة مقابلات الشخصيات الكبرى",
      "source": "مقابلات",
      "date": "15 أبريل 2024",
      "status": "معلق"
    },
    {
      "id": 4,
      "title": "استعراض الفعاليات الأخيرة في المجتمع",
      "source": "الأحداث الاجتماعية",
      "date": "15 أبريل 2024",
      "status": "مكتمل"
    }
  ];

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
              <ClickableHorizontalCard title="الأحداث المرصودة" number="93" percentage="-8%" icon={trackedEvent} isClicked={true} />
              <ClickableHorizontalCard title="التقارير الإعلامية" number="19" percentage="+45%" icon={mediaEvent} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Table title="الرصد اليومي" columns={columns} data={data} />
      </div>
    </div>
  )
}

export default DailyMonitoring