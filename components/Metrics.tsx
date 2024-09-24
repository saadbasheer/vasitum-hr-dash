import React from "react";
import { Trend } from "./ui/svgs";

interface CardData {
  title: string;
  value: number;
  breakdown: { label: string; value: number }[];
  percentageChange: number;
  trend: number[];
}

export default function Dashboard() {
  const employeesData = {
    title: "Total Employees",
    value: 216,
    breakdown: [
      { label: "Men", value: 120 },
      { label: "Women", value: 96 },
    ],
    percentageChange: 2,
    trend: [0, 0.2, 0.4, 0.6, 0.8, 1],
  };

  const talentRequestData = {
    title: "Talent Request",
    value: 16,
    breakdown: [
      { label: "Men", value: 6 },
      { label: "Women", value: 10 },
    ],
    percentageChange: 5,
    trend: [0, 0.3, 0.5, 0.7, 0.9, 1],
  };

  return (
    <div className="flex flex-col sm:flex-row justify-evenly gap-5">
      <DashboardCard data={employeesData} />
      <DashboardCard data={talentRequestData} />
    </div>
  );
}

function DashboardCard({ data }: { data: CardData }) {
  const { title, value } = data;

  return (
    <div className="border-[#E0E0E0] border rounded-2xl w-full">
      <div className="flex p-7 space-x-3 justify-evenly">
        <div className=" gap-10 ">
          <div className="mb-5 space-y-7">
            <div className="title-medium  text-[#161E54]">{title}</div>
            <div className="w-[166px] h-[28px] font-poppins text-5xl font-medium leading-7 text-left text-[#161E54]">
              {value}
            </div>
          </div>
          <div className="metric-breakdown text-[#686868]">
            <p>120 men</p> <p>96 women</p>
          </div>
        </div>
        <div className=" space-y-5 ">
          <div className="metric-trend">
            {" "}
            <Trend />
          </div>
          <div className="text-center rounded-lg p-1 bg-[#FFEFE7]">
            +2% last month
          </div>
        </div>
      </div>
    </div>
  );
}
