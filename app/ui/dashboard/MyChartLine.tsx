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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
import DayFilter from "@/app/ui/dashboard/DayFilter";

export default function MyLineChart(){
  return (
    <div className="border border-gray-200 rounded-lg p-5 w-50">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Patient Overview</h1>
        <div className="flex gap-3">
          <p className="flex items-center">
            <div className="rounded-full w-3 h-3 bg-purple-700 me-1"></div>
            Female
          </p>
          <p className="flex items-center">
          <div className="rounded-full w-3 h-3 bg-teal-500 me-1"></div>
            Male
          </p>
        </div>
        <DayFilter />
      </div>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000)),
              backgroundColor: "purple",
            },
            {
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000)),
              backgroundColor: "teal",
            },
          ],
        }}
      />
    </div>
  );
};
