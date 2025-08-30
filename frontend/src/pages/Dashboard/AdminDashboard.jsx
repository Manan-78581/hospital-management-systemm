import React from 'react';
import { Card } from '../../components/common';

const AdminDashboard = () => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-blue-600">250+</h3>
          <p className="text-gray-600 mt-2">Total Patients</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-green-600">35</h3>
          <p className="text-gray-600 mt-2">Total Doctors</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-yellow-600">12</h3>
          <p className="text-gray-600 mt-2">Available Rooms</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-red-600">75%</h3>
          <p className="text-gray-600 mt-2">Bed Occupancy</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p className="text-gray-600">
            This section will be used to manage all user accounts, including doctors, staff, and patients. You can view, add, edit, and deactivate users here.
          </p>
        </Card>
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">System Analytics</h2>
          <p className="text-gray-600">
            View key performance indicators (KPIs) such as daily appointments, revenue reports, and department-specific data to monitor hospital operations.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
