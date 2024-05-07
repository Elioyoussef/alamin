import React from 'react'
import LinkIcon from './Molecules/LinkIcon'
import calendar from '../assets/icons/calendar.svg';
import calendarActive from '../assets/icons/calendarActive.svg';
import committees from '../assets/icons/committees.svg';
import committeesActive from '../assets/icons/committeesActive.svg';
import heartHandActive from '../assets/icons/heartHandActive.svg';
import heartHand from '../assets/icons/heartHand.svg';
import home from '../assets/icons/home.svg';
import homeActive from '../assets/icons/homeActive.svg';
import media from '../assets/icons/media.svg';
import mediaActive from '../assets/icons/mediaActive.svg';
import mission from '../assets/icons/mission.svg';
import missionActive from '../assets/icons/missionActive.svg';
import monitoring from '../assets/icons/monitoring.svg';
import monitoringActive from '../assets/icons/monitoringActive.svg';
import social from '../assets/icons/social.svg';
import socialActive from '../assets/icons/socialActive.svg';
const Navbar = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
        <div className=' bg-[#B99E9E0F] p-2'>
        <ul className='flex justify-between items-center'>
                <LinkIcon path="/" label="نظرة عامة" icon={home} activeIcon={homeActive}/>
                <LinkIcon path="/calendar" label="التقويم" icon={calendar} activeIcon={calendarActive}/>
                <LinkIcon path="/social" label="التواصل الإجتماعي" icon={social} activeIcon={socialActive} />
                <LinkIcon path="/mission" label="المهام" icon={mission} activeIcon={missionActive} />
                <LinkIcon path="/daily-monitoring" label="الرصد اليومي" icon={monitoring} activeIcon={monitoringActive} />
                <LinkIcon path="/visuals" label="المرئيات" icon={media} activeIcon={mediaActive} />
                <LinkIcon path="/initiatives" label="المبادرات" icon={heartHand} activeIcon={heartHandActive} />
                <LinkIcon path="/committees" label="اللجان" icon={committees} activeIcon={committeesActive} />
            </ul>
        </div>
    </div>
  )
}

export default Navbar