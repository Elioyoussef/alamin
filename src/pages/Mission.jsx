import React from 'react'
import Dropdown from '../components/Atoms/Dropdown'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import Table from '../components/Organisms/Table'
import StatusBadge from '../components/Molecules/StatusBadge'
const Mission = () => {
  const columns = [
    { Header: 'المهمة', accessor: 'title', isSortable: false },
    { Header: 'الحالة', accessor: 'status', render: status => <StatusBadge status={status} />, isSortable: true },
  ];

  const data = [
    { id: 1, title: "متابعة مهام الللجان ورفع بالتوصيات والمقترحات", status: "done" },
    { id: 2, title: "متابعة مهام الللجان ورفع بالتوصيات والمقترحات", status: "done" },
    { id: 3, title: "تنفيذ تغريدة بمناسبة يوم العلم السعودي", status: "pending" },
    { id: 4, title: "اعداد تقرير اعلامي عن اخر تغريدة ", status: "pending" },
    { id: 5, title: "متابعة مهام الللجان ورفع بالتوصيات والمقترحات", status: "pending" },
    { id: 6, title: "تنفيذ تغريدة بمناسبة يوم العلم السعودي", status: "done" },
    { id: 7, title: "مهمة سبعة", status: "done" },
    { id: 8, title: "مهمة ثمانية", status: "pending" },
    { id: 9, title: "مهمة تسعة", status: "done" }
  ];
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
        <Table title="سجل مهام المكتب الإعلامي لسمو الأمين" data={data} columns={columns} />
      </div>
    </div>

  )
}

export default Mission