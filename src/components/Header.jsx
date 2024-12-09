import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-blue-400">
            My Website
          </Link>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/form"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
