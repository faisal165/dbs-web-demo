import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Present','Absent','Leave'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 12,14],
      backgroundColor: [
        'rgba(43, 57, 98, 1)',
        'rgba(255, 76, 0, 1)',
        'rgba(255, 199, 54, 1)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 0,
    },
  ],
};

export function AttendenceReport() {
  return <Pie data={data}  />;
}