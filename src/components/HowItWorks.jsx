import { User, Sparkles, MessageCircle, Users } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description:
      "Sign up and build your profile with your skills, interests, and study preferences.",
    icon: <User className="text-white w-6 h-6" />,
  },
  {
    number: 2,
    title: "Get Matched",
    description:
      "Our AI algorithm will suggest potential study partners based on compatibility.",
    icon: <Sparkles className="text-white w-6 h-6" />,
  },
  {
    number: 3,
    title: "Connect & Chat",
    description:
      "Reach out to your matches and start planning your collaboration.",
    icon: <MessageCircle className="text-white w-6 h-6" />,
  },
  {
    number: 4,
    title: "Study Together",
    description:
      "Schedule study sessions, work on projects, and achieve your academic goals together.",
    icon: <Users className="text-white w-6 h-6" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          How{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
            InterestMate
          </span>{" "}
          Works
        </h2>
        <p className="text-gray-400 mb-16 text-sm md:text-base">
          A simple process to find your perfect study partner
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-y-32">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-800 to-blue-600 transform -translate-x-1/2 z-0" />

        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="relative z-10 px-4 flex flex-col items-center text-center">
  
  {/* === ICON FOR MD AND UP (only for even steps - above) === */}
  {isEven && (
    <div className="hidden md:flex mb-4 justify-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center justify-center shadow-md">
        {step.icon}
      </div>
    </div>
  )}

  {/* === CARD === */}
  <div className="bg-gradient-to-br from-zinc-900 to-base border border-neutral-800 p-6 rounded-xl shadow-lg max-w-md w-full">
    <div className="flex items-start gap-4">
      <div className="w-5 h-5 px-4 py-4 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center">
        {step.number}
      </div>
      <div className="text-left">
        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
        <p className="text-sm text-gray-400">{step.description}</p>
      </div>
    </div>
  </div>

  {/* === ICON FOR MD AND UP (only for odd steps - below) === */}
  {!isEven && (
    <div className="hidden md:flex mt-4 justify-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-800 to-blue-600 flex items-center justify-center shadow-md">
        {step.icon}
      </div>
    </div>
  )}

  {/* === ICON FOR SMALL SCREENS (always below) === */}
  <div className="mt-4 flex md:hidden justify-center">
    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 flex items-center justify-center shadow-md">
      {step.icon}
    </div>
  </div>
</div>

          );
        })}
      </div>
    </section>
  );
}
