import React from "react";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
      {[
        {
          title: "Available Position",
          value: "24",
          subtext: "4 Urgently needed",
          color: "bg-[#FFEFE7]",
          subtextcolor: "text-[#FF5151]",
        },
        {
          title: "Job Open",
          value: "10",
          subtext: "4 Active hiring",
          color: "bg-[#E8F0FB]",
          subtextcolor: "text-[#3786F1]",
        },
        {
          title: "New Employees",
          value: "24",
          subtext: "4 Department",
          color: "bg-[#FDEBF9]",
          subtextcolor: "text-[#EE61CF]",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className={` p-3    h-full  space-y-3 rounded-2xl  ${stat.color}`}
        >
          <div className="title-medium">{stat.title}</div>

          <p className="stat-value">{stat.value}</p>

          <div className={`stat-subtext ${stat.subtextcolor}`}>
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}
