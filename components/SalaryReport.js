import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['    Earning AED 82,500', 'Deduction AED 82,500'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 12],
      backgroundColor: [
        'rgba(43, 57, 98, 1)',
        'rgba(255, 70, 29, 1)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 0,
    },
  ],
};

export function SalaryReport() {
  return <Pie data={data}  />;
}
