import React, { useEffect, useState } from 'react'
import CategoryBadge from '../components/Molecules/CategoryBadge';
import Download from '../components/Atoms/Download';
import Spinner from '../../src/components/Atoms/Spinner';
import Dropdown from '../components/Atoms/Dropdown';
import HorizontalCard from '../components/Molecules/HorizontalCard';
import Table from '../components/Organisms/Table';
import culturalIcon from '../assets/icons/culturalIcon.svg';
import advisoryIcon from '../assets/icons/advisory.svg';
import mediaIcon from '../assets/icons/mediaIcon.svg';
import endpoints from '../config/apiConfig';
import axios from 'axios';
import moment from 'moment';
const Committees = () => {
  const [committees, setCommittes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  moment.locale('ar');
  useEffect(() => {
    const fetchCommittees = async () => {
      setLoading(true);
      try {
        const postData = {
          paging: {
            currentPage: 0,
            takenRows: 6
          }
        };
        const response = await axios.post(endpoints.getAllCommittees, postData);
        console.log(response)
        const newCommittees = response.data.committeeListDto.map(element => ({
          id: element.id,
          title: element.name,
          category: element.committeeCategory ? element.committeeCategory.name : 'Unknown',
          dateM: moment(element.dateM).format('LL')
        }));
        setCommittes(newCommittees);
        setLoading(false);
      }
      catch (err) {
        console.error("Error:", err);
        setError(err);
        setLoading(false);
      }
    }
    fetchCommittees();
  }, [])
  const columns = [
    { Header: 'المهمة', accessor: 'title', isSortable: false },
    { Header: 'التاريخ', accessor: 'dateM', isSortable: true },
    { Header: 'الحالة', accessor: 'category', render: category => <CategoryBadge category={category} />, isSortable: true },
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
        <HorizontalCard title='اللجنة الإعلامية' number='56' percentage='-8%' icon={mediaIcon} />
        <HorizontalCard title='اللجنة الاستشارية' number='27' percentage='+45%' icon={advisoryIcon} />
        <HorizontalCard title='اللجنة الثقافية' number='33' percentage='+45%' icon={culturalIcon} />
      </div>
      <div>
        <Table title="اللجان" data={committees} columns={columns} />
      </div>
    </div>
  )
}

export default Committees