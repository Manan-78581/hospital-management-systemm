import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy-load page components for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Patients = lazy(() => import('./pages/Patients'));
const Appointments = lazy(() => import('./pages/Appointments'));
const Billing = lazy(() => import('./pages/Billing'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));

// Additional dashboards for specific roles
const AdminDashboard = lazy(() => import('./pages/Dashboard/AdminDashboard'));
const DoctorDashboard = lazy(() => import('./pages/Dashboard/DoctorDashboard'));
const PatientDashboard = lazy(() => import('./pages/Dashboard/PatientDashboard'));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
                <Route path="/register" element={<Suspense fallback={<Loader />}><Register /></Suspense>} />

                {/* Protected Routes */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <div className="flex min-h-screen">
                                <Sidebar />
                                <div className="flex-1 flex flex-col">
                                    <Navbar />
                                    <main className="p-6 flex-grow bg-gray-100">
                                        <Suspense fallback={<Loader />}>
                                            <Dashboard />
                                        </Suspense>
                                    </main>
                                </div>
                            </div>
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/patients"
                    element={
                        <ProtectedRoute>
                            <div className="flex min-h-screen">
                                <Sidebar />
                                <div className="flex-1 flex flex-col">
                                    <Navbar />
                                    <main className="p-6 flex-grow bg-gray-100">
                                        <Suspense fallback={<Loader />}>
                                            <Patients />
                                        </Suspense>
                                    </main>
                                </div>
                            </div>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/appointments"
                    element={
                        <ProtectedRoute>
                            <div className="flex min-h-screen">
                                <Sidebar />
                                <div className="flex-1 flex flex-col">
                                    <Navbar />
                                    <main className="p-6 flex-grow bg-gray-100">
                                        <Suspense fallback={<Loader />}>
                                            <Appointments />
                                        </Suspense>
                                    </main>
                                </div>
                            </div>
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/billing"
                    element={
                        <ProtectedRoute>
                            <div className="flex min-h-screen">
                                <Sidebar />
                                <div className="flex-1 flex flex-col">
                                    <Navbar />
                                    <main className="p-6 flex-grow bg-gray-100">
                                        <Suspense fallback={<Loader />}>
                                            <Billing />
                                        </Suspense>
                                    </main>
                                </div>
                            </div>
                        </ProtectedRoute>
                    }
                />
                
                {/* Specific dashboards for different roles */}
                <Route path="/admin-dashboard" element={<ProtectedRoute><Suspense fallback={<Loader />}><AdminDashboard /></Suspense></ProtectedRoute>} />
                <Route path="/doctor-dashboard" element={<ProtectedRoute><Suspense fallback={<Loader />}><DoctorDashboard /></Suspense></ProtectedRoute>} />
                <Route path="/patient-dashboard" element={<ProtectedRoute><Suspense fallback={<Loader />}><PatientDashboard /></Suspense></ProtectedRoute>} />
                
                {/* Redirect to dashboard for any unmatched routes */}
                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
