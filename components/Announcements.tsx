import React from "react";
import { Pin, MoreHorizontal } from "lucide-react";

const announcements = [
  {
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
    pinned: true,
  },
  {
    title: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
    pinned: true,
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
    pinned: false,
  },
  {
    title: "Company-wide training session",
    time: "2 days ago",
    pinned: false,
  },
  {
    title: "New project kickoff meeting",
    time: "3 days ago",
    pinned: false,
  },
  {
    title: "Quarterly review preparations",
    time: "4 days ago",
    pinned: false,
  },
];

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function Announcement() {
  return (
    <div className="bg-white rounded-2xl border p-4 w-full h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="title-medium text-[#161E54]">Announcement</h2>
        <div className="text-gray-500 text-sm">Today, {formattedDate}</div>
      </div>
      <div
        className="overflow-y-auto flex-grow"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <ul className="space-y-4 pr-2">
          {announcements.map((announcement, index) => (
            <li
              key={index}
              className="flex items-center justify-between border p-3 bg-gray-50 rounded-md"
            >
              <div>
                <div className="text-gray-900 font-medium">
                  {announcement.title}
                </div>
                <div className="text-sm text-gray-500">{announcement.time}</div>
              </div>
              <div className="flex items-center space-x-2">
                {announcement.pinned && (
                  <Pin className="w-4 h-4 text-gray-500" />
                )}
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-red-500 font-medium">
          See All Announcements
        </a>
      </div>
    </div>
  );
}
