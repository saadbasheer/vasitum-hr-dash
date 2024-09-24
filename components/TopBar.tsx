"use client";
import React, { useState } from "react";
import { Menu, Search, ChevronDown } from "lucide-react";

import  { Messages, Notification } from "./ui/svgs";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sm:-mt-5">
      <div className=" mx-auto px-4 sm:px-2 ">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 "
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop logo and search */}
          <div className="flex-1 flex items-center sm:items-stretch justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center w-full max-w-xl">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#FF5151] focus:border-[#FF5151] sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          {/* Mobile search icon */}
          <div className="flex items-center sm:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF5151]">
              <span className="sr-only">Search</span>
              <Search className="h-6 w-6" />
            </button>
          </div>

          {/* Notification, messages, and profile */}
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5151]">
              <span className="sr-only">View notifications</span>
              <Notification/>
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5151]">
              <span className="sr-only">View messages</span>
              <Messages/>
            </button>
            <div className="ml-3 relative">
              <div>
                <button
                  className="flex items-center max-w-xs bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5151] "
                  blue-500
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    width={50}
                    height={50}
                    src="/logo.png"
                    alt="User avatar"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">
                    Saad Basheer
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          {/* Add mobile menu items here */}
        </div>
      </div>
    </nav>
  );
}
