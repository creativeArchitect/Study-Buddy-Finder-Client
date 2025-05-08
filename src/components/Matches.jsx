import React from "react";

const matchData = Array.from({ length: 4 }, (_, index) => ({
  key: index,
  name: "Maria Parker",
  year: "Year 2",
  major: "Data Science",
  skills: ["Python", "Machine Learning", "Statistics"],
  description:
    "Looking for team members who are interested in building ML projects for healthcare applications.",
  connected: true,
}));

const MatchCard = ({ match }) => (
  <div className="text-white p-4 rounded-lg shadow-md bg-gradient-to-br from-zinc-900 to-base border border-neutral-800">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 ">
      <div>
        <h3 className="text-lg font-semibold">{match.name}</h3>
        <p className="text-sm text-neutral-500">
          {match.major}, {match.year}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {match.skills.map((skill, i) => (
            <span
              key={i}
              className="text-gray-300 text-xs px-2 py-1 rounded-full border border-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {match.connected && (
        <span className="text-green-600 text-sm font-medium mt-2 sm:mt-0">
          Connected
        </span>
      )}
    </div>
    <p className="text-sm text-gray-300 italic mb-4">"{match.description}"</p>
    <div className="flex flex-wrap gap-2">
      <button className="flex-1 min-w-[100px] bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer">
        Message
      </button>
      <button className="flex-1 min-w-[100px] bg-neutral-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-neutral-900">
        Schedule
      </button>
      <button className="flex-1 min-w-[100px] border border-neutral-600 border-dashed hover:bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer">
        Profile
      </button>
    </div>
  </div>
);

const Matches = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        Your <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Matches</span>
      </h1>
      <p className="text-neutral-400 text-sm sm:text-base mb-6">
        Students you've matched with based on compatible skills and interests.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm cursor-pointer">
          All Matches
        </button>
        <button className="border border-neutral-600 border-dashed hover:bg-neutral-900 text-white px-4 py-2 rounded text-sm cursor-pointer">
          Pending
        </button>
        <button className="bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-2 rounded text-sm cursor-pointer">
          Connected
        </button>
      </div>

      <div className="space-y-4">
        {matchData.map((match) => (
          <MatchCard key={match.key} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
