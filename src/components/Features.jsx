import React from "react";
import {
  FaUserFriends,
  FaComments,
  FaLaptop,
  FaUser,
  FaBolt,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const features = [
  {
    title: "Smart Matching",
    description:
      "Our AI-powered algorithm matches you with students who have complementary skills and compatible study schedules.",
    icon: <FaUserFriends className="text-2xl text-blue-600" />,
  },
  {
    title: "Real-Time Chat",
    description:
      "Connect instantly with potential study partners through our integrated messaging system.",
    icon: <FaComments className="text-2xl text-blue-600" />,
  },
  {
    title: "Skill Discovery",
    description:
      "Find students with specific skills for your next project or hackathon team.",
    icon: <FiCode className="text-2xl text-blue-600" />,
  },
  {
    title: "Study Sessions",
    description:
      "Schedule and manage virtual or in-person study sessions with your matches.",
    icon: <FaLaptop className="text-2xl text-blue-600" />,
  },
  {
    title: "Rich Profiles",
    description:
      "Showcase your skills, projects, and availability to attract the right study partners.",
    icon: <FaUser className="text-2xl text-blue-600" />,
  },
  {
    title: "Progress Tracking",
    description:
      "Keep track of your study hours and celebrate your academic achievements.",
    icon: <FaBolt className="text-2xl text-blue-600" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Features</span>{" "}
          <span className="text-white">Designed for Students</span>
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Everything you need to find study partners, form project teams, and collaborate effectively.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-900 to-base p-6 rounded-xl shadow hover:border border-blue-800 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Features;

