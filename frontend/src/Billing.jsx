import React from 'react';
import { Card } from '../components/common';

const Billing = () => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing & Payments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Generate Invoice</h2>
          <p className="text-gray-600">
            Create and send invoices for patient services.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Manage Payments</h2>
          <p className="text-gray-600">
            View payment history and process new payments.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Insurance Details</h2>
          <p className="text-gray-600">
            Manage insurance claims and patient details.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">Pending Bills</h2>
          <p className="text-gray-600">
            This section will display a list of all pending patient bills.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
