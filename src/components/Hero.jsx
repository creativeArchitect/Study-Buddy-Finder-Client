import React, { useState } from "react";
import {
  FaBolt,
  FaGithub,
  FaUserFriends,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
              Study Partner
            </span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg">
            Connect with fellow students, build project teams, and excel
            together. InterestMate helps you find the perfect match based on
            skills, interests, and study habits.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg" onClick={()=> navigate('/register')}>
              <FaBolt /> Get Started
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-500 hover:border-white text-white font-semibold px-6 py-3 rounded-lg"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-blue-500">
            <FaUserFriends /> Join 500+ students already connected
          </p>
        </div>

        {/* Right Content - Login/Register Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto">
          <div className="flex justify-between mb-6 text-sm text-gray-400">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-md font-medium ${
                isLogin
                  ? "bg-blue-700 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-md font-medium ${
                !isLogin
                  ? "bg-blue-700 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            {isLogin ? "Sign in to your account" : "Join the community"}
          </p>

          <form>
            {!isLogin && (
              <>
                <label className="text-sm font-medium block mb-1">Name</label>
                <div className="flex items-center bg-black rounded-md px-3 mb-4">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-black text-white w-full py-2 outline-none"
                  />
                </div>
              </>
            )}

            <label className="text-sm font-medium block mb-1">Email</label>
            <div className="flex items-center bg-black rounded-md px-3 mb-4">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="you@college.edu"
                className="bg-black text-white w-full py-2 outline-none"
              />
            </div>

            <label className="text-sm font-medium block mb-1">Password</label>
            <div className="flex items-center bg-black rounded-md px-3 mb-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="bg-black text-white w-full py-2 outline-none"
              />
            </div>

            {isLogin && (
              <div className="text-right mb-6">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold cursor-pointer" onClick={()=> navigate('/dashboard')}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
