import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Button } from './common';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const { logout, user } = useContext(AuthContext);

  if (!user) return null; // Don't show sidebar if not logged in

  return (
    <aside className="w-64 bg-white p-6 shadow-xl rounded-r-3xl h-screen flex flex-col fixed">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">HMS</h1>
      <nav className="flex-grow">
        <NavLink to="/" className="block px-4 py-3 rounded-xl text-left text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200">
          Dashboard
        </NavLink>
        {user.role === 'doctor' && (
          <>
            <NavLink to="/patients" className="block px-4 py-3 rounded-xl text-left text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200">
              My Patients
            </NavLink>
            <NavLink to="/appointments" className="block px-4 py-3 rounded-xl text-left text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200">
              My Appointments
            </NavLink>
          </>
        )}
      </nav>
      <Button onClick={logout} className="mt-auto">Logout</Button>
    </aside>
  );
};
