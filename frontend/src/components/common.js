import React from 'react';

export const Button = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-300
      ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
      ${className}`}
  >
    {children}
  </button>
);

export const Input = ({ type, placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300
      ${className}`}
  />
);

export const Card = ({ children, className }) => (
  <div className={`bg-white p-8 rounded-3xl shadow-lg w-full max-w-md ${className}`}>
    {children}
  </div>
);

export const Message = ({ text, type }) => (
  <div className={`p-3 rounded-lg text-center font-medium ${type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
      {text}
  </div>
);
