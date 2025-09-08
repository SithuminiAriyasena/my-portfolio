import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            style={{ fontFamily: 'Dancing Script, cursive' }}
            onClick={() => scrollToSection("home")}
          >
            Sithumini
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-6 h-6 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "rotate-45 top-2.5" : ""
              }`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 top-2.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 pb-4 border-t border-gray-100 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium text-left"
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg text-center inline-block w-fit"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
