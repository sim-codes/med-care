"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Suspense } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function MyLineChart(){
  const data ={
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Female",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000)),
        borderColor: "#DF1AFF",
        tension: 0.43,
        pointRadius: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#DF1AFF",
        pointHoverBorderWidth: 1,
      },
      {
        label: "Male",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000)),
        borderColor: "#00E7BD",
        tension: 0.43,
        pointRadius: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#00E7BD",
        pointHoverBorderWidth: 1,
      },
    ],
  }
   
  return (
    <div className="border border-gray-200 rounded-lg p-5 w-50">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Patient Overview</h1>
        <div className="flex gap-3">
          <p className="flex items-center">
            <div className="rounded-full w-3 h-3 bg-[#DF1AFF] me-1"></div>
            Female
          </p>

          <p className="flex items-center">
            <div className="rounded-full w-3 h-3 bg-[#00E7BD] me-1"></div>
            Male
          </p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Line
          data={data}
          options={{

          }}
        />
      </Suspense>
    </div>
  );
};
