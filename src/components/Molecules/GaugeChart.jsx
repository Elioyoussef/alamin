import React from 'react';

const calculateArc = (value, min, max) => {
  const startAngle = Math.PI; // Start at the left (180 degrees)
  const angle = ((value - min) / (max - min)) * Math.PI;
  const x = 100 + 90 * Math.cos(startAngle - angle);
  const y = 100 + 90 * Math.sin(startAngle - angle);
  const largeArcFlag = angle > Math.PI ? 1 : 0;

  return `M 10 100 A 90 90 0 ${largeArcFlag} 1 ${x} ${y}`;
};

const GaugeChart = ({ value, min, max, label, status, description }) => {
  const arcPath = calculateArc(value, min, max);

  return (
    <div className="flex flex-col items-center justify-center p-4 relative">
      <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />
        <path
          d={arcPath}
          fill="none"
          stroke="#6B21A8"
          strokeWidth="10"
          strokeLinecap="round"
        />
        </svg>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500">{label}</p>
        <h1 className="text-3xl text-black m-0">{value}</h1>
        <p className="text-green-600 text-lg">{status}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex justify-between px-2 text-gray-500 text-sm mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default GaugeChart;
