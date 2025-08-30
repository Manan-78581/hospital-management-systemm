import React, { useState, useContext } from 'react';
import { Input, Button, Card, Message } from '../../components/common';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust if your backend is on a different port/host
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const { data } = await API.post('/auth/register', { name, email, password, role });
      login(data);
      navigate('/');
    } catch (err) {
      setMessage({ text: err.response?.data?.message || 'Something went wrong', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
            <option value="receptionist">Receptionist</option>
            <option value="admin">Admin</option>
          </select>
          {message && <Message text={message.text} type={message.type} />}
          <Button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-blue-600 font-semibold hover:underline">
            Login here
          </button>
        </p>
      </Card>
    </div>
  );
};
