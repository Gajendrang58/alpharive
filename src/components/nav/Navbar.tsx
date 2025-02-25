"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Brand</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:flex">
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Contact
          </Link>
          <Link href="/signup" className="block px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
