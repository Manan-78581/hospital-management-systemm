import React from 'react';
import { Card } from '../../components/common';

const PatientDashboard = () => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-blue-600">3</h3>
          <p className="text-gray-600 mt-2">Upcoming Appointments</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-green-600">5</h3>
          <p className="text-gray-600 mt-2">New Reports</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-yellow-600">2</h3>
          <p className="text-gray-600 mt-2">New Prescriptions</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">Appointments</h2>
          <p className="text-gray-600">
            View, schedule, and cancel your appointments with doctors. You can also see your appointment history.
          </p>
        </Card>
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
          <p className="text-gray-600">
            Access your medical history, lab results, and prescriptions from one central location. All your records are securely stored here.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
