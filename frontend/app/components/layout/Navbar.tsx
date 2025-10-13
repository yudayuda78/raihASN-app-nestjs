import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
       <Link to="/" className="flex items-center space-x-2">
          <img
            src="/raihlogo.png"
            alt="RaihASN Logo"
            className="h-12 w-auto"
          />
        </Link>
        {/* Menu (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-[#07aced] transition">Paket</a></li>
            <li><a href="#" className="hover:text-[#07aced] transition">Tryout</a></li>
            <li><a href="#" className="hover:text-[#07aced] transition">Blog</a></li>
          </ul>
        </div>

        {/* Login Button (Desktop) */}
        <Link to="/login">
          <Button className="hidden md:block text-white px-4 py-2 rounded-lg transition">
            Login
          </Button>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-[#07aced] text-2xl transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-[#07aced] transition">Paket</a>
          <a href="#" className="block text-gray-700 hover:text-[#07aced] transition">Tryout</a>
          <a href="#" className="block text-gray-700 hover:text-[#07aced] transition">Blog</a>
          <button className="w-full bg-[#07aced] text-white px-4 py-2 rounded-lg hover:bg-[#0598d4] transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
