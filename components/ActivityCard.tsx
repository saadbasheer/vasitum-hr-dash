import React from "react";

export default function RecentActivity() {
  return (
    <div className=" text-white bg-[#1B204A] sm:h-[250px] rounded-2xl  w-full mb-5">
      <div className="bg-[#13164D] z-3 rounded-t-2xl  p-3">
        <h2 className="title-medium text-2xl">Recently Activity</h2>
      </div>
      <div className="p-5">
        <div className="text-xs  text-gray-300 mb-2 mt-3">
          10:40 AM, Fri 10 Sept 2021
        </div>
        <h3 className="title-medium text-nowrap">You Posted a New Job</h3>
        <p className="text-sm text-gray-300 mb-5">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className="flex-row sm:flex justify-between items-center mb-6 ">
          <p className="text-md text-nowrap mb-5 sm:mb-0">Today you make 12 Activity</p>
          <a
            href="#"
            className="bg-[#FF5151] text-white text-sm font-medium px-4 py-2 rounded-xl text-nowrap hover:bg-red-600"
          >
            See All Activity
          </a>
        </div>
      </div>
    </div>
  );
}
