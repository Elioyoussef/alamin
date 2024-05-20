import React from 'react';

const PieChart = ({ percentage }) => {
  const radius = 16;
  const viewBox = `0 0 ${radius * 2} ${radius * 2}`;
  const angle = (percentage / 100) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius + radius * Math.cos(radians - Math.PI / 2);
  const y = radius + radius * Math.sin(radians - Math.PI / 2);
  const largeArcFlag = percentage > 50 ? 1 : 0;

  return (
    <svg viewBox={viewBox} width="100" height="100">
      <circle cx={radius} cy={radius} r={radius} fill="#61CC72" />
      <path
        d={`M${radius} ${radius} L${radius} 0 A${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y} Z`}
        fill="#5948A2"
      />
      <text
        x="52%"
        y="25%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="4"
        fontWeight="bold"
        transform="rotate(45 16 16)"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default PieChart;
