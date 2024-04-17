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
import Link from "next/link";

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
    <div className="border border-gray-200 rounded-lg p-5 w-full">
      <div className="grid grid-cols-3 gap-2 mb-2">
        <h2 className="font-medium text-2xl text-[#4A4A4A]">Patient Overview</h2>
        <div className="flex gap-3">
          <p className="flex items-center">
            <span className="rounded-full w-3 h-3 bg-[#DF1AFF] me-1"></span>
            Female
          </p>

          <p className="flex items-center">
            <span className="rounded-full w-3 h-3 bg-[#00E7BD] me-1"></span>
            Male
          </p>
        </div>

        <div className="justify-self-end me-5 border border-gray-100 rounded-lg p-2 w-auto">
          <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Options
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
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
