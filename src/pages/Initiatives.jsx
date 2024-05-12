import React from 'react'
import Dropdown from '../components/Atoms/Dropdown'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import Table from '../components/Organisms/Table'
import StatusBadge from '../components/Molecules/StatusBadge'
import Download from '../components/Atoms/Download'
import clock from '../assets/icons/clock-icon.svg';
import finished from '../assets/icons/finished-icon.svg';

const Initiatives = () => {
  const columns = [
    { Header: 'المهمة', accessor: 'title', isSortable: false },
    { Header: 'التاريخ', accessor: 'date', isSortable: true },
    { Header: 'الحالة', accessor: 'status', render: status => <StatusBadge status={status} />, isSortable: true },
    { Header: 'تحميل', accessor: 'download', render: () => <Download />, isSortable: false },
  ];

  const data = [
    { id: 1, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "done" },
    { id: 2, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "14 أبريل 2024", status: "done" },
    { id: 3, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "pending" },
    { id: 4, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "pending" },
    { id: 5, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "pending" },
    { id: 6, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "done" },
    { id: 7, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "done" },
    { id: 8, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "pending" },
    { id: 9, title: "استقبال وفد سغارة اسبانيا وتواجد سفير اسبانيا لدى المملكة العربية السعودي وذلك للاطلاع ومناقشة كل مايهم.", date: "15 أبريل 2024", status: "done" }
  ];
  return (
    <div>
      <div className='py-6 flex justify-end'>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      <div className='flex gap-5 items-center pb-6'>
        <HorizontalCard title='مبادرة منتهية' status='pending' number='23' percentage='-8%' icon={clock} />
        <HorizontalCard title='مبادرة جارية' status='done' number='12' percentage='+45%' icon={finished} />
      </div>
      <div>
        <Table title="المبادرات" data={data} columns={columns} />
      </div>
    </div>
  )
}

export default Initiatives