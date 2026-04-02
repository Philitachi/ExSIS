import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate role-based auth checking Coordinator
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-sm md:text-base">
      <div className="max-w-md w-full wireframe-card space-y-8 p-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 border-b pb-4">
            ExSIS
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-medium">
            Extension Services Information System
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="wireframe-label flex items-center"><Mail className="w-4 h-4 mr-1"/> Email address</label>
              <input
                type="email"
                required
                className="wireframe-input"
                placeholder="coordinator@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="wireframe-label flex items-center"><Lock className="w-4 h-4 mr-1"/> Password</label>
              <input
                type="password"
                required
                className="wireframe-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-gray-800 focus:ring-gray-800 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900 underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="wireframe-btn-primary w-full flex justify-center py-2 px-4"
            >
              Sign in as Coordinator
            </button>
            <p className="mt-4 text-xs text-center text-gray-500">
              Mock login simulates proceeding as an authorized Extension Coordinator.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
