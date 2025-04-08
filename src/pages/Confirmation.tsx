import React from 'react';
import { Logo } from '../components/Logo';

export const Confirmation: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <Logo />
      </div>
      <h1 className="text-2xl font-bold mb-2">JK9 Vet Portal</h1>
      <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
      <p className="text-xl mb-2">Case submitted</p>
      <p className="text-xl text-gray-600">Wait for approval</p>
    </div>
  );
};