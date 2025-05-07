import React from "react";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-lg">IM</div>
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text text-xl font-semibold">InterestMate</span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">How It Works</li>
          <li className="hover:text-white cursor-pointer">Testimonials</li>
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition">
            <FaFacebookF className="text-blue-500 text-sm" />
          </a>
          <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition">
            <FaTwitter className="text-blue-500 text-sm" />
          </a>
          <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition">
            <FaDiscord className="text-blue-500 text-sm" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm border-t border-zinc-800 py-4">
        © 2025 InterestMate. All rights reserved.
      </div>
    </footer>
  );
}
