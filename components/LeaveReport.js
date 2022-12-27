import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Paid Leaves 22%','Used Leaves 48%','Remaining Leaves 30%'],
  datasets: [
    {
      label: '# of Votes',
      data: [14, 12, 12],
      backgroundColor: [
        'rgba(52, 69, 119, 1)',
        'rgba(61, 83, 150, 1)',
        'rgba(76, 101, 174, 1)',
        
      ],
      borderColor: [
        '',
        '',
        
      ],
      borderWidth: 0,
    },
  ],
};

export function LeaveReport() {
  return <Pie data={data}  />;
}
