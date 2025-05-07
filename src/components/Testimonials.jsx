import React from "react";
import { FaQuoteLeft, FaBolt } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I found my hackathon team through InterestMate, and we ended up winning first place! The skill matching feature is incredibly accurate.",
    name: "Alex Johnson",
    title: "Computer Science Major",
    initials: "AJ",
  },
  {
    quote:
      "As an introvert, I always struggled to find study partners. InterestMate made it easy to connect with others who share my learning style.",
    name: "Maya Patel",
    title: "Data Science Student",
    initials: "MP",
  },
  {
    quote:
      "The scheduling feature is a game-changer. I’ve been able to maintain consistent study sessions with my study group throughout the semester.",
    name: "Carlos Rodriguez",
    title: "Engineering Student",
    initials: "CR",
  },
  {
    quote:
      "If you have belief in yourself and your seniors and also your seniors is helpful then you can take help with them if you will stuck.",
    name: "Ayush Jangid",
    title: "Engineering Student",
    initials: "AJ",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Students <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Are Saying</span>
        </h2>
        <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
          Success stories from students who found their study partners on InterestMate
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-base p-6 rounded-xl shadow-md border border-neutral-900"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
              <p className="text-gray-200 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Find Your Perfect Study Partner?
              </h3>
              <p className="text-gray-300 text-lg">
                Join InterestMate today and connect with students who complement your skills and study style.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition cursor-pointer">
              <FaBolt />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
