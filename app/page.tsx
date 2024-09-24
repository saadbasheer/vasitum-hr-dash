import TopBar from "@/components/TopBar";
import StatCards from "@/components/StatCards";
import Metrics from "@/components/Metrics";
import ActivityCard from "@/components/ActivityCard";
import Announcements from "@/components/Announcements";
import Schedule from "@/components/Schedule";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div
      className="flex  h-screen
      text-black "
    >
      <Sidebar />

      <main className="sm:flex-1   bg-[#fffeff] sm:p-5 overflow-auto">
        <TopBar />
        <div className="-mt-7 p-8">
          <h1 className="heading  text-[#161E54]">Dashboard</h1>
          <div className="flex-row  sm:flex sm:space-x-7 ">
            <div className="space-y-4 mb-5 sm:w-3/4">
              <StatCards />

              <Metrics />

              <Announcements />
            </div>

            <div className="">
              <ActivityCard /> <Schedule />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
