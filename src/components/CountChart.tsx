"use client";
import { Boy, Girl } from "@mui/icons-material";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MoreHoriz } from "@mui/icons-material";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 42,
    fill: "pink",
  },
  {
    name: "Boys",
    count: 64,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 overflow-hidden shadow-lg">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <MoreHoriz fontSize="large" sx={{ color: "black"}} />

      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Boy
            sx={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              fontSize: 50,
              color: "#C3EBFA", // Color for Boys
            }}
          />
          <Girl
            sx={{
              position: "absolute",
              top: "50%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              fontSize: 50,
              color: "pink", // Color for Girls
            }}
          />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-pink-200 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;