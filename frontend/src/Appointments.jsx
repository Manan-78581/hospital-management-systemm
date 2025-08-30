import React from 'react';
import { Card } from '../components/common';

const Appointments = () => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Book an Appointment</h2>
          <p className="text-gray-600">
            Schedule a new appointment with a doctor.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">View Appointments</h2>
          <p className="text-gray-600">
            Check your upcoming appointments and history.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Manage Requests</h2>
          <p className="text-gray-600">
            Review and manage appointment requests from patients.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <p className="text-gray-600">
            This section will display a list of all upcoming appointments.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
