import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/vet/profile"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/vet/new-case"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              New case
            </NavLink>
            <NavLink
              to="/vet/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/vet/add-case"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gray-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Add Case
            </NavLink>
            <button
              onClick={() => navigate("/")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Log out
            </button>
          </div>
          <Logo />
        </div>
      </div>
    </nav>
  );
};
