import React from "react";
import { FaUsers, FaMapMarkerAlt, FaVideo, FaCalendarAlt, FaClock } from "react-icons/fa";

const sessions = [
  {
    title: "Data Structures Study Group",
    day: "Mon",
    date: "May 5",
    time: "10:00 AM - 12:00 PM",
    participants: 4,
    location: "Library, Room 305",
    virtual: false,
  },
  {
    title: "Web Development Project Meeting",
    day: "Tue",
    date: "May 6",
    time: "2:00 PM - 4:00 PM",
    participants: 3,
    location: "Virtual",
    virtual: true,
  },
  {
    title: "Algorithm Practice",
    day: "Thu",
    date: "May 8",
    time: "3:00 PM - 5:00 PM",
    participants: 2,
    location: "Computer Lab",
    virtual: false,
  },
  {
    title: "Machine Learning Fundamentals",
    day: "Fri",
    date: "May 9",
    time: "1:00 PM - 3:00 PM",
    participants: 5,
    location: "Virtual",
    virtual: true,
  },
];

const Schedule = () => {
  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Study <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Schedule</span>
      </h1>

      {/* View Toggle & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="flex gap-2">
          <button className="border border-neutral-600 border-dashed hover:bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer">Day</button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer">Week</button>
          <button className="bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer">Month</button>
        </div>
        <div className="flex items-center justify-between sm:ml-auto gap-2">
          <span className="text-gray-300">May 4 - May 10</span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm cursor-pointer hover:bg-blue-800">
            Add New Session
          </button>
        </div>
      </div>

      {/* Week Grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-[700px] gap-2 sm:gap-4 mb-8">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className={`py-3 rounded-lg text-center font-semibold text-sm sm:text-base ${
                day === "Thu" ? "bg-gradient-to-br from-zinc-900 to-base border border-neutral-800" : "bg-gradient-to-br from-zinc-900 to-base border border-neutral-800"
              }`}
            >
              {day}
              {sessions.map((s) =>
                s.day === day ? (
                  <div
                    key={s.title}
                    className="mt-2 p-2 text-neutral-400 text-left text-xs sm:text-sm rounded shadow"
                  >
                    <div className="font-bold text-neutral-300">{s.title}</div>
                    <div className="mt-1">{s.time}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <FaUsers /> {s.participants}
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-1">
                      {s.virtual ? <FaVideo /> : <FaMapMarkerAlt />} {s.location}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 sm:p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>

        <div className="space-y-3">
          {sessions.slice(0, 3).map((s, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border bg-neutral-900 border-neutral-800 p-3 rounded gap-3 shadow-sm"
            >
              <div className="flex gap-3 items-center w-full">
                <div className="bg-neutral-800 border border-neutral-700 text-neutral-100 text-center px-2 py-1 rounded w-12">
                  <div className="text-sm font-bold">{s.date.split(" ")[1]}</div>
                  <div className="text-xs">{s.date.split(" ")[0]}</div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm sm:text-base">{s.title}</div>
                  <div className="text-xs sm:text-sm text-neutral-400 flex flex-wrap gap-3 mt-1 items-center">
                    <span className="flex items-center gap-1">
                      <FaClock /> {s.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers /> {s.participants}
                    </span>
                    <span className="flex items-center gap-1">
                      {s.virtual ? <FaVideo /> : <FaMapMarkerAlt />}
                      {s.virtual ? "Virtual" : s.location}
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded text-sm w-full sm:w-auto cursor-pointer">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
