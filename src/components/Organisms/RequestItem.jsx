import React from 'react'
import Flower from '../../assets/icons/flowerLogo.svg'
import Mail from '../../assets/icons/mailLogo.svg'
import Phone from '../../assets/icons/phoneCall.svg'
import leftArrow from '../../assets/icons/left-arrow.svg'

const RequestItem = () => {
    const requestData = require('../../json/tableStates.json');
    const getButtonClasses = (action) => {
        switch (action) {
            case 'أوافق':
                return 'bg-[#EFCB81] text-[#434443] border-none';
            case 'X':
                return 'bg-[#585958] text-white border-none';
            case 'عرض السجل':
                return 'bg-[#E7E5E6] text-[#1C1A1A] border-none';
            case 'تم اعتماد المقترح':
                return 'bg-[#6CE9A6] text-[#1C1A1A] border-none';
            case 'تم استلام رد':
                return 'bg-[#D8D0FB] text-[#5948A2] border-none';
            default:
                return 'bg-[gray-200] text-black border-gray-400';
        }
    };
    const getImageForProposal = (proposalType) => {
        switch (proposalType) {
            case "بوكيه ورد":
                return Flower;
            case "مكالمة هاتفية":
                return Phone;
            case "خطاب تهئنة":
                return Mail;
            default:
                return "X";
        }
    };
    return (
        <div className="flex flex-wrap -mx-2">
            {requestData.map(item => (
                <div key={item.id} className='w-full sm:w-1/2 lg:w-1/4 border border-[#E8E8E8]'>
                    <div className='bg-white p-3.5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <img src={getImageForProposal(item.details.proposal)} alt="Proposal Icon" className="h-6 w-6" />
                                <p className='text-lg font-bold text-[#2E357D]'>{item.title}</p>
                            </div>
                            <div>
                                <img className='block w-3 h-3' src={leftArrow} alt='arrow' />
                            </div>
                        </div>
                        <div className="mt-2 pl-8">
                            <ul className="text-sm text-gray-400 font-bold pr-8">
                                <li className='border-r-2 border-[#D7ADAD] pr-2'>القسم: <span className='text-black'>{item.details.section}</span></li>
                                <li className='border-r-2 border-[#D7ADAD] my-2 pr-2'>المناسبة: <span className='text-black'>{item.details.occasion}</span></li>
                                <li className='border-r-2 border-[#D7ADAD] pr-2'>المقترح:<span className='text-[#5B4DFF]'>{item.details.proposal}</span></li>
                            </ul>
                            <div className='flex gap-3 mt-3 pr-8'>
                                {item.actions.map((action, index) => (
                                    <button key={index}
                                        className={`border-2 px-4 py-2 rounded-lg font-bold text-sm ${getButtonClasses(action)}`}>
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default RequestItem