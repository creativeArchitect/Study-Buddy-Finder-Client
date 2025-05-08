import React from "react";
import {
  FaPaperclip,
  FaVideo,
  FaPhone,
  FaInfoCircle,
  FaPaperPlane,
} from "react-icons/fa";

const messages = [
  {
    sender: "Maria Parker",
    time: "10:30 AM",
    text: "Hey, do you want to work on our project tonight?",
    fromUser: false,
  },
  {
    sender: "You",
    time: "10:32 AM",
    text: "Sure, what time works for you?",
    fromUser: true,
  },
  {
    sender: "Maria Parker",
    time: "10:35 AM",
    text: "How about 7pm? We can meet in the library or do a video call.",
    fromUser: false,
  },
  {
    sender: "You",
    time: "10:36 AM",
    text: "Video call works better for me. I'll set up the meeting and send you the link.",
    fromUser: true,
  },
  {
    sender: "Maria Parker",
    time: "10:37 AM",
    text: "Perfect! See you then.",
    fromUser: false,
  },
];

const Messages = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gradient-to-br from-neutral-900 to-gray-900 p-4 border-b md:border-b-0 md:border-r border-gray-700 overflow-y-auto max-h-[40vh] md:max-h-full">
        <h2 className="text-xl font-semibold mb-4">Messages</h2>
        <div className="space-y-2">
          {["Alex Johnson", "Maria Parker", "Team Alpha", "David Wong", "ML Study Group"].map(
            (name, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
                  name === "Maria Parker" ? "bg-[#1e293b]" : "hover:bg-[#1e2639]"
                }`}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-gray-400 truncate">
                    Let's discuss the project...
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </aside>

      {/* Chat area */}
      <section className="flex-1 flex flex-col min-h-0">
        {/* Chat Header */}
        <header className="flex items-center justify-between bg-gradient-to-br from-neutral-900 to-gray-900 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              MP
            </div>
            <div>
              <p className="font-semibold">Maria Parker</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-4 text-lg text-gray-300">
            <FaPhone className="cursor-pointer" />
            <FaVideo className="cursor-pointer" />
            <FaInfoCircle className="cursor-pointer" />
          </div>
        </header>

        {/* Chat Messages */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`w-fit max-w-[90%] sm:max-w-[70%] md:max-w-[60%] px-4 py-2 rounded-lg text-sm shadow-md ${
                msg.fromUser
                  ? "bg-blue-700 ml-auto text-white"
                  : "bg-[#1e293b] text-gray-200"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-right text-xs text-gray-400 mt-1">
                {msg.time}
              </span>
            </div>
          ))}
        </main>

        {/* Input Field */}
        <footer className="border-t border-gray-700 p-3 flex items-center gap-2 bg-gradient-to-br from-neutral-900 to-gray-900">
          <button className="text-gray-400 text-xl">
            <FaPaperclip />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-[#1e293b] text-white px-4 py-2 rounded-full outline-none border border-gray-600"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full">
            <FaPaperPlane />
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Messages;
