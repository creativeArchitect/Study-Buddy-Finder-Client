import React, { useState } from "react";

const users = [
  {
    initials: "JS",
    name: "John Smith",
    major: "Computer Science, Year 3",
    skills: ["React", "JavaScript", "Node.js", "UI/UX"],
    availability: "Weekdays Evenings, Weekends",
  },
  {
    initials: "AJ",
    name: "Ayush Jangid",
    major: "Computer Science, Year 3",
    skills: ["React", "JavaScript", "Node.js", "Express.js", "C++", "Data Structures"],
    availability: "Weekdays Evenings, Weekends",
  },
  // Add more users as needed
];

const Discover = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-black text-white p-4 sm:p-6 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Discover <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-transparent bg-clip-text">Study Partners</span>
      </h2>
      <p className="text-neutral-500 mb-6 text-sm sm:text-base">
        Find students with complementary skills and interests to form your perfect team.
      </p>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
      
        {/* Skills */}
        <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded">
          <h3 className="font-semibold text-base mb-3">Filter by Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "Python",
              "UI/UX Design",
              "Data Science",
              "Machine Learning",
              "Mobile Development",
              "Backend Development",
            ].map((skill) => (
              <label key={skill} className="flex items-center gap-2 text-sm text-neutral-300">
                <input type="checkbox" className="accent-blue-600" /> {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded">
          <h3 className="font-semibold text-base mb-3">Availability</h3>
          <div className="flex flex-wrap gap-2">
            {["Weekdays", "Weekends", "Mornings", "Afternoons", "Evenings"].map((time) => (
              <label key={time} className="flex items-center gap-2 text-sm text-neutral-300">
                <input type="checkbox" className="accent-blue-600" /> {time}
              </label>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded">
          <h3 className="font-semibold text-base mb-3">Find by Name</h3>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 text-sm rounded bg-neutral-900 border border-neutral-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded  md:self-auto cursor-pointer">
            Search
            </button>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, idx) => (
          <div key={idx} className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-white text-lg">
                  {user.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-base">{user.name}</h4>
                  <p className="text-sm text-neutral-400">{user.major}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-1">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, i) => (
                    <span key={i} className="text-gray-300 text-xs px-3 py-1 rounded-full border border-neutral-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-1">Availability</p>
                <p className="text-gray-300 text-sm">{user.availability}</p>
              </div>
            </div>

            <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
