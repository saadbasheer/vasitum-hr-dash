import React from "react";
import { ChevronDown, MoreVertical } from "lucide-react";

export default function UpcomingSchedule() {
   const today = new Date();
  const scheduleItems = [
    {
      title: "Review candidate applications",
      time: "Today - 11:30 AM",
      priority: true,
    },
    { title: "Interview with candidates", time: "Today - 10:30 AM" },
    {
      title: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
    },
    { title: "Team standup", time: "Today - 02:00 PM" },
    { title: "Project planning session", time: "Today - 03:30 PM" },
    { title: "Client call", time: "Today - 05:00 PM" },
  ];
const formattedDate = today.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
  return (
    <div className="bg-white rounded-2xl p-4 border h-[507px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="title-medium text-nowrap text-[#161E54]">
          Upcoming Schedule
        </h2>
        <div className="flex items-center border p-1 sm:p-2 rounded-lg text-gray-500 text-xs sm:text-sm">
          Today, {formattedDate}{" "}
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </div>
      </div>
      <div
        className="overflow-y-auto flex-grow"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="pr-2">
          {scheduleItems.map((item, index) => (
            <div key={index} className={`mb-3 ${index === 0 ? "" : "mt-4"}`}>
              {index === 0 && (
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Priority
                </div>
              )}
              {index === 1 && (
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Other
                </div>
              )}
              <div className="flex justify-between items-center border bg-gray-50 p-3 rounded">
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full mt-4 py-2 bg-white text-red-500 font-medium rounded border border-red-500 hover:bg-red-50 transition-colors">
        Create a New Schedule
      </button>
    </div>
  );
}
