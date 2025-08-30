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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const { data } = await API.post('/auth/login', { email, password });
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {message && <Message text={message.text} type={message.type} />}
          <Button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          New User?{' '}
          <button onClick={() => navigate('/register')} className="text-blue-600 font-semibold hover:underline">
            Register here
          </button>
        </p>
      </Card>
    </div>
  );
};
