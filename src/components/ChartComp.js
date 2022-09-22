import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
            ticks: {
                display: false
            },
            grid: {
                display: false,
                drawBorder: false,
             }
        },
        x: {
            grid: {
               display: false,
               drawBorder: false,
            },
            ticks:{
                color: '#92857A',
                font: 'DM Sans',
            }
         },
    }
};

const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let dataV = [1, 2, 3, 1.8, 1.5, 2.5, 1.7]

const data = {
    labels,
    datasets: [
        {
            label:'days',
            data:dataV,
            backgroundColor: dataV.map(value=> value>=3?'#76B5BC':'#EC755D'),
            borderRadius: 5,
            borderSkipped: false,
        }
    ],
};

export default function ChartComp() {
    return <Bar options={options} data={data} />;
}
