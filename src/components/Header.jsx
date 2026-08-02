import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600 tracking-wide"
          >
            Student Dashboard
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/register" className={navLinkStyle}>
              Register
            </NavLink>

            <NavLink to="/login" className={navLinkStyle}>
              Login
            </NavLink>

            <NavLink to="/data" className={navLinkStyle}>
              Data
            </NavLink>

            <NavLink to="/profile" className={navLinkStyle}>
              Profile
            </NavLink>
            <li>
              <NavLink to="/admin/login">
                Admin Dashboard
              </NavLink>
            </li>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink
              to="/register"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>

            <NavLink
              to="/data"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Data
            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>

            <NavLink to="/admin/login">
              Admin Dashboard
            </NavLink>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;