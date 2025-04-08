import React from 'react';
import logo from '../assets/Logo.svg';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-right">
        <img 
          src={logo}
          alt="JK9 Logo" 
          className="h-12 w-auto bg-gray-500 shadow-md rounded-lg p-3"
        /> 
      </div>
    </div>
  );
};