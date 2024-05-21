import React from 'react';
import { Link } from 'react-router-dom';

const calculateArc = (value, min, max) => {
  if (value <= min) return '';
  if (value > max) value = max;

  const startAngle = Math.PI;
  const angle = ((value - min) / (max - min));
  const x = 100 + 90 * Math.cos(startAngle - angle);
  const y = 100 + 90 * Math.sin(startAngle - angle);
  const largeArcFlag = angle > Math.PI ? 1 : 0;

  return `M 10 90 A 100 120 0 ${largeArcFlag} 1 ${y} ${x}`;
};

const GaugeChart = ({ title, value, min, max, label, status, description }) => {
  const arcPath = calculateArc(value, min, max);

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 relative">
        <h3 className='font-medium text-xl text-[#1A1A1A] pb-2.5'>{title}</h3>
        <svg width="300" height="150" viewBox="0 0 200 100" className="overflow-visible">
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          {arcPath && (
            <path
              d={arcPath}
              fill="none"
              stroke="#6B21A8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
          {value > max && (
            <path
              d="M10 100 A90 90 0 0 1 190 100"
              fill="none"
              stroke="#6B21A8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center top-14 pt-2">
          <p className="text-[#717171]">{label}</p>
          <h1 className="text-4xl text-[#1A1A1A] font-semibold">{value}</h1>
          <p className="text-[#61CC72] font-medium">{status}</p>
        </div>
        <div className="flex justify-between text-gray-500 text-sm mt-2 w-full px-1 pt-2">
          <p>{max}</p>
          <p className="text-[#717171] text-sm font-medium">{description}</p>
          <p>{min}</p>
        </div>
      </div>
      <div className='max-w-[200px] mx-auto'>
        <button className='rounded-[40px] text-center bg-[#5948A2] text-white py-3 w-full mt-7'>
          <Link to='/social'>لمشاهدة التقرير</Link>
        </button>
      </div>
    </div>
  );
};

export default GaugeChart;
