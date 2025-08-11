import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handleToggle = () => setMobileToggle(!mobileToggle);
  const closeMenu = () => setMobileToggle(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Desktop / Tablet Navbar */}
      <div className="hidden md:flex justify-between items-center max-w-3xl mx-auto px-6 py-4">
        {/* Brand / Page Title */}
        <h1 className="text-lg font-extrabold text-gray-900">My Portfolio</h1>

        {/* Nav Links */}
        <ul className="flex gap-8 text-gray-700 font-medium text-sm">
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center max-w-3xl mx-auto px-6 py-3">
        <h1 className="text-lg font-extrabold text-gray-900">My Portfolio</h1>
        <button
          aria-label="Toggle menu"
          onClick={handleToggle}
          className="relative overflow-hidden rounded-full p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Bars3Icon className="w-7 h-7 text-gray-700" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          mobileToggle ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-6 px-6 flex justify-end">
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <XMarkIcon className="w-7 h-7 text-white" />
          </button>
        </div>

        <div className="pt-10 flex flex-col items-center space-y-6 text-2xl font-medium">
          <a
            href="#dashboard"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
