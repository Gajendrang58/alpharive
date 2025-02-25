"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import react from "../../../public/science.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50">
      {/* Topbar */}
      <div className="bg-[#161922] text-white text-sm py-2 px-4">
        <div className="container mx-auto flex items-center justify-center">
          This banner helps in notifying visitors of an announcement.
        </div>
      </div>
      <div className="bg-[linear-gradient(270deg,#6FFFE9_0%,#20232D_23.87%,#BFA2F6_50.45%,#20232D_73.42%,#EFFEFC_100%)] opacity-100 w-full h-[1px]"></div>

      {/* Main Header */}
      <div className="bg-[#00080F] shadow-md">
        <div className="container mx-auto px-4 py-7 flex items-center justify-between">
          <div className="flex">
            <Image src={react} alt="" height={40} width={40} />
            <Link href="/" className="text-2xl font-bold text-white mt-1 ml-2">
              Cryptox
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-[#cddod5] hover:text-blue-600">
              Feature
            </Link>
            <Link href="/about" className="text-[#cddod5] hover:text-blue-600">
              Pricing
            </Link>
            <Link
              href="/services"
              className="text-[#cddod5] hover:text-blue-600"
            >
              Blog
            </Link>
            <Link href="/contact" className="text-[#cddod5] hover:text-blue-600">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden bg-white border-t shadow-md absolute top-full left-0 w-full">
            <ul className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:brightness-1000 transition">
                Get Started
              </button>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
