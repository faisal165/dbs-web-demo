import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Used', 'Remaining'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 20],
      backgroundColor: [
        'rgba(52, 69, 119, 1)',
        'rgba(241, 241, 241, 1)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 0,
    },
  ],
};

export function CasualLeave() {
  return <Doughnut data={data} />;
}