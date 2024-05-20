import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endpoints from '../config/apiConfig'
import moment from 'moment'
import Dropdown from '../components/Atoms/Dropdown'
import Spinner from '../../src/components/Atoms/Spinner'
import HorizontalCard from '../components/Molecules/HorizontalCard'
import Table from '../components/Organisms/Table'
import InitiativeBadge from '../components/Molecules/InitiativeBadge'
import Download from '../components/Atoms/Download'
import clock from '../assets/icons/clock-icon.svg';
import finished from '../assets/icons/finished-icon.svg';
const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  moment.locale('ar');
  useEffect(() => {
    const fetchInitiatives = async () => {
      setLoading(true);
      try {
        const postData = {
          paging: {
            currentPage: 0,
            takenRows: 6
          }
        };
        const response = await axios.post(endpoints.getAllInitiatives, postData);
        const newInitiatives = response.data.initiativesListDto.map(element => ({
          id: element.id,
          title: element.title,
          status: element.initiativesStatus ? element.initiativesStatus.name : 'Unknown',
          dateM: moment(element.dateM).format('LL')
        }));
        setInitiatives(newInitiatives);
        setLoading(false);
      }

      catch (err) {
        console.error('err:', err);
        setError(err);
        setLoading(false);
      }
    };
    fetchInitiatives();
  }, [])
  const columns = [
    { Header: 'المهمة', accessor: 'title', isSortable: false },
    { Header: 'التاريخ', accessor: 'dateM', isSortable: true },
    { Header: 'الحالة', accessor: 'status', render: status => <InitiativeBadge status={status} />, isSortable: true },
    { Header: 'تحميل', accessor: 'download', render: () => <Download />, isSortable: false },
  ];

  if (loading) return <Spinner />;
  if (error) return <div>Error loading initiatives: {error.message}</div>;
  return (
    <div>
      <div className='py-6 flex justify-end'>
        <Dropdown className='max-w-[100px] w-full' />
      </div>
      <div className='flex gap-5 items-center pb-6'>
        <HorizontalCard title='مبادرة منتهية' number='23' percentage='-8%' icon={clock} />
        <HorizontalCard title='مبادرة جارية' number='12' percentage='+45%' icon={finished} />
      </div>
      <div>
        <Table title="المبادرات" data={initiatives} columns={columns} />
      </div>
    </div>
  )
}

export default Initiatives