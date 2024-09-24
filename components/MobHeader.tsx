import {
  Briefcase,
  Building2,
  Calendar,
  HeadphonesIcon,
  Menu,
  Settings,
  Sheet,
  UserCircle,
  Users,
} from "lucide-react";
import React from "react";
import { SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function MobHeader() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-lg mr-2"></div>
        <span className="text-xl font-bold">Vasitum</span>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <nav className="p-6">
            <ul className="space-y-2">
              {[
                { icon: Users, label: "Dashboard", active: true },
                { icon: Briefcase, label: "Recruitment" },
                { icon: Calendar, label: "Schedule" },
                { icon: UserCircle, label: "Employee" },
                { icon: Building2, label: "Department" },
                { icon: HeadphonesIcon, label: "Support" },
                { icon: Settings, label: "Settings" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center p-2 rounded-lg ${
                      item.active
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
