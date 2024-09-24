import React from "react";
import {
  Dashboard,
  Department,
  Employee,
  Logo,
  Recruitment,
  Schedule,
  Support,
  Settings,
} from "./ui/svgs";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-[#fafafa] p-6 shadow-md border-r">
      <div className="flex items-center mb-8">
        <span>
          <Logo />
        </span>
      </div>
      <nav>
        {/* Main Menu */}
        <div className="opacity-50 font-medium mb-4">MAIN MENU</div>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-[#FF5151] gap-4"
            >
              <Dashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Recruitment />
              Recruitment
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Schedule />
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Employee />
              Employee
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Department />
              Department
            </a>
          </li>
        </ul>

        {/* Other Section */}
        <div className="opacity-50 font-medium mt-8 mb-4">OTHER</div>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Support />
              Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 gap-4"
            >
              <Settings />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
