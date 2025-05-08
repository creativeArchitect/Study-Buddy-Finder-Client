import React from "react";
import { FaDownload, FaShareAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6">
    
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-blue-600 text-white font-bold text-xl w-16 h-16 rounded-full flex items-center justify-center">
            AJ
          </div>
          <div>
            <h1 className="text-2xl font-bold">Alex Johnson</h1>
            <p className="text-neutral-300">Computer Science, 3rd Year</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "JavaScript",
                "Node.js",
                "Python",
                "UI/UX Design",
                "MongoDB",
              ].map((tag, i) => (
                <span
                  key={i}
                  className=" text-gray-300 text-xs px-3 py-1 rounded-full border border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded self-start md:self-auto cursor-pointer">
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 mb-8 text-center justify-center md:justify-start">
        <div>
          <p className="text-xl font-bold">15</p>
          <p className="text-gray-400 text-sm">Connections</p>
        </div>
        <div>
          <p className="text-xl font-bold">8</p>
          <p className="text-gray-400 text-sm">Projects</p>
        </div>
        <div>
          <p className="text-xl font-bold">4.8</p>
          <p className="text-gray-400 text-sm">Rating</p>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 sm:p-6 rounded-lg mb-6">
        <h2 className="text-lg font-bold mb-2">About Me</h2>
        <p className="text-gray-300 text-sm">
          I'm a Computer Science student passionate about web development and UI/UX design. I love building
          applications that solve real-world problems and am currently focusing on full-stack development with React
          and Node.js. I'm looking for teammates for hackathons who are interested in creating innovative solutions
          with clean, user-friendly interfaces.
        </p>
      </div>

      {/* Study Times */}
      <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 sm:p-6 rounded-lg mb-6">
        <h2 className="text-lg font-bold mb-2">Preferred Study Times</h2>
        <div className="flex flex-wrap gap-4 text-center text-sm">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="border bg-neutral-900 border-neutral-800 text-neutral-200 px-4 py-2 rounded w-20 shadow-sm">
              <p>{day}</p>
              <p>Evenings</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 sm:p-6 rounded-lg mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-bold">Projects</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm cursor-pointer">
            Add Project
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "Student Connect App",
              description:
                "A mobile app connecting students with similar interests for study groups.",
              tags: ["React Native", "Firebase", "Node.js"],
            },
            {
              title: "AI Study Assistant",
              description:
                "An AI-powered tool to help students organize study materials and create flashcards.",
              tags: ["Python", "TensorFlow", "Flask"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-4 rounded shadow-sm bg-neutral-900 border border-neutral-800"
            >
              <h3 className="font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 mb-2 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="border border-neutral-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-4 sm:p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Hackathon Winner",
              description: "1st place in University Hackathon 2024",
            },
            {
              title: "Study Streak",
              description: "30 days consecutive study sessions",
            },
            {
              title: "Team Player",
              description: "Collaborated with 10+ students",
            },
          ].map((achieve, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-4 rounded text-sm shadow-sm border border-neutral-800"
            >
              <h4 className="font-semibold text-white mb-1">{achieve.title}</h4>
              <p className="text-gray-300">{achieve.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
