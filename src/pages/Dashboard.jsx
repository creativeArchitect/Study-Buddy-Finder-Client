import { useState } from "react";
import { MessageSquare, Calendar, Users, Menu } from "lucide-react";
import Discover from "../components/Discover";
import Matches from '../components/Matches';
import Messages from '../components/Messages';
import Schedule from '../components/Schedule';
import Profile from '../components/Profile';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "discover":
        return <Discover />;
      case "matches":
        return <Matches />;
      case "messages":
        return <Messages />;
      case "schedule":
        return <Schedule />;
      case "profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 py-6 sm:px-6 lg:px-8">

      <header className="flex justify-between items-center mb-6 w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-lg">IM</div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
            InterestMate
          </span>
        </div>

        {/* Hamburger menu icon for mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Horizontal nav for larger screens */}
        <nav className="hidden sm:flex gap-6 text-sm sm:text-base">
          <button onClick={() => setActiveTab("discover")} className="hover:text-blue-400">Discover</button>
          <button onClick={() => setActiveTab("matches")} className="hover:text-blue-400">Matches</button>
          <button onClick={() => setActiveTab("messages")} className="hover:text-blue-400">Messages</button>
          <button onClick={() => setActiveTab("schedule")} className="hover:text-blue-400">Schedule</button>
          <button onClick={() => setActiveTab("profile")} className="hover:text-blue-400">Profile</button>
        </nav>
      </header>
      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="sm:hidden bg-neutral-900 p-2 rounded-lg space-y-3 mb-6">
          <button onClick={() => setActiveTab("discover")} className="block w-full text-left hover:text-blue-400">Discover</button>
          <button onClick={() => setActiveTab("matches")} className="block w-full text-left hover:text-blue-400">Matches</button>
          <button onClick={() => setActiveTab("messages")} className="block w-full text-left hover:text-blue-400">Messages</button>
          <button onClick={() => setActiveTab("schedule")} className="block w-full text-left hover:text-blue-400">Schedule</button>
          <button onClick={() => setActiveTab("profile")} className="block w-full text-left hover:text-blue-400">Profile</button>
        </div>
      )}


      {activeTab ? (
        <div>{renderTabContent()}</div>
      ) : (
        <div className="flex flex-col gap-10">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Your{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
              Dashboard
            </span>
          </h1>
          <p className="text-neutral-400 sm:text-md md:text-lg">
          Find your rhythm, support your peers, and together you'll achieve more than you imagined.
          </p>
        </div>

          {/* Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="text-blue-400" />
                  <div>
                    <p className="text-sm">Connections</p>
                    <p className="text-xl sm:text-2xl font-bold">23</p>
                    <p className="text-green-400 text-sm">+12% from last week</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-blue-400" />
                  <div>
                    <p className="text-sm">Messages</p>
                    <p className="text-xl sm:text-2xl font-bold">48</p>
                    <p className="text-green-400 text-sm">+5% from last week</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-400" />
                  <div>
                    <p className="text-sm">Study Hrs</p>
                    <p className="text-xl sm:text-2xl font-bold">12</p>
                    <p className="text-green-400 text-sm">+3 hrs from last week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathons */}
            <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Upcoming Hackathons</h2>
              <div className="flex flex-col gap-3">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border bg-neutral-900 border-neutral-800 rounded-lg gap-2">
                  <div>
                    <p className="font-semibold">AI Solutions Hackathon</p>
                    <p className="text-sm text-neutral-500">Starts in 2 weeks • 8 teams registered</p>
                  </div>
                  <button className="text-sm bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded cursor-pointer">Register</button>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border bg-neutral-900 border-neutral-800 rounded-lg gap-2">
                  <div>
                    <p className="font-semibold">Digital forensics Hackathon</p>
                    <p className="text-sm text-neutral-500">Starts in 2 weeks • 8 teams registered</p>
                  </div>
                  <button className="text-sm bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded cursor-pointer">Register</button>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border bg-neutral-900 border-neutral-800 rounded-lg gap-2">
                  <div>
                    <p className="font-semibold">Campus Innovation Challenge</p>
                    <p className="text-sm text-neutral-500">Starts in 2 weeks • 8 teams registered</p>
                  </div>
                  <button className="text-sm bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded cursor-pointer">Register</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
