import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SpecialHeading from '@components/shared/SpecialHeading';
import { FaChartPie } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MonthEarningProps {
  data: number[];
}

const MonthEarning: React.FC<MonthEarningProps> = ({ data }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const monthIndex = (currentMonth - 5 + i + 12) % 12;
    return months[monthIndex];
  });

  const chartData = {
    labels: last6Months,
    datasets: [
      {
        label: 'Monthly Earnings',
        data: data.slice(-6),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Earnings',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(tickValue: number | string) {
            if (typeof tickValue === 'number') {
              return `$${tickValue}`;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <section className="p-4 rounded-lg shadow-md">
      <SpecialHeading title='Month Earning' icon={<FaChartPie />} />
      <Line options={options} data={chartData} />
    </section>
  );
};

export default MonthEarning;