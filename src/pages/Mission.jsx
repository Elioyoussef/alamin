import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endpoints from '../config/apiConfig'
import Dropdown from '../components/Atoms/Dropdown'
import Spinner from '../../src/components/Atoms/Spinner'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import Table from '../components/Organisms/Table'
import StatusBadge from '../components/Molecules/StatusBadge'
import clock from '../assets/icons/clock-icon.svg';
import finished from '../assets/icons/finished-icon.svg';

const Mission = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const postData = {
          paging: {
            currentPage: 0,
            takenRows: 6
          }
        };
        const response = await axios.post(endpoints.getAllAmeenOfficeTasks, postData);
        const newTasks = response.data.ameenOfficeTasksListDto.map(element => ({
          id: element.id,
          title: element.title,
          status: element.ameenOfficeTaskStatus ? element.ameenOfficeTaskStatus.name : 'Unknown'
        }));

        setTasks(newTasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const columns = [
    { Header: 'المهمة', accessor: 'title', isSortable: false },
    { Header: 'الحالة', accessor: 'status', render: status => <StatusBadge status={status} />, isSortable: true }
  ];

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='py-6 flex justify-end'>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      <div className='flex gap-5 items-center pb-6'>
        <HorizontalCard title='مهمة جارية' status='pending' number='34' percentage='-8%' icon={clock} />
        <HorizontalCard title='مهمة منجزة' status='done' number='45' percentage='+45%' icon={finished} />
      </div>
      <div>
        <Table title="سجل مهام المكتب الإعلامي لسمو الأمين" data={tasks} columns={columns} />
      </div>
    </div>
  )
}

export default Mission;
