import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const naviagate = useNavigate();

  return (
    <nav className="bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
      
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-lg">IM</div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
            InterestMate
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#features" className="hover:text-white transition py-2 px-4 rounded-lg hover:bg-neutral-800">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition py-2 px-4 rounded-lg hover:bg-neutral-800">
            How It Works
          </a>
          <a href="#testimonials" className="hover:text-white transition py-2 px-4 rounded-lg hover:bg-neutral-800">
            Testimonials
          </a>
          <a
            href="#"
            className="border border-zinc-700 px-4 py-2 rounded-lg font-semibold text-white hover:bg-neutral-800 transition" onClick={()=> naviagate('/dashboard')}
          >
            Demo Dashboard
          </a>
        </div>

        {/* Hamburger Icon (small screens only) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-10 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out fixed top-0 left-0 z-20 bg-black w-64 h-full p-6 flex flex-col items-center lg:hidden`}
        >
          <button onClick={closeMenu} className="text-gray-400 self-end mb-6">
            ✕
          </button>
          <a href="#features" onClick={closeMenu} className="hover:text-white transition py-2 px-4 rounded-lg block mb-4 hover:bg-neutral-800 w-full text-center">
            Features
          </a>
          <a href="#how-it-works" onClick={closeMenu} className="hover:text-white transition py-2 px-4 rounded-lg block mb-4 hover:bg-neutral-800 w-full text-center">
            How It Works
          </a>
          <a href="#testimonials" onClick={closeMenu} className="hover:text-white transition py-2 px-4 rounded-lg block mb-4 hover:bg-neutral-800 w-full text-center">
            Testimonials
          </a>
          <a href="#" onClick={()=> {
            closeMenu;
            naviagate('/dashboard')
          }} className="border border-zinc-700 px-4 py-2 rounded-lg font-semibold text-white hover:bg-neutral-800 transition block w-full text-center">
            Demo Dashboard
          </a>
        </div>

      </div>
    </nav>
  );
}
