import React from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <img src="/jk9-logo.png" alt="JK9 Logo" className="w-32 h-32 mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-1 text-gray-800">
            المركز الوطني الأردني للكلاب البوليسية
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Jordan National K9 Center
          </h2>
          <h1 className="text-3xl font-bold text-gray-900">JK9 Portal</h1>
        </div>
      </div>

      {/* Portal Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => navigate("/vet")}
          className="p-6 text-xl font-semibold text-white bg-[#9B8B7B] hover:bg-[#8A7A69] rounded-lg transition-colors duration-200 shadow-md"
        >
          Vet Portal Login / Sign up
        </button>

        <button
          onClick={() => navigate("/hospital")}
          className="p-6 text-xl font-semibold text-white bg-[#9B8B7B] hover:bg-[#8A7A69] rounded-lg transition-colors duration-200 shadow-md"
        >
          Hospital Panel
        </button>
      </div>

      {/* Made with Visily - We'll keep this as shown in the image */}
      <div className="mt-auto pt-8 text-sm text-gray-500">Made with Visily</div>
    </div>
  );
};
