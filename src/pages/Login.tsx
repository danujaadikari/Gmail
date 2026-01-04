import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - navigate to inbox
    navigate('/inbox');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-google-blue rounded-full mb-4">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-normal text-gray-800">Gmail</h1>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-google-border rounded-lg p-10 shadow-sm">
          <h2 className="text-2xl font-normal text-gray-800 mb-2 text-center">Sign in</h2>
          <p className="text-sm text-google-gray mb-6 text-center">to continue to Gmail</p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-google-border rounded-md focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue focus:ring-opacity-20 transition-all text-base"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 border border-google-border rounded-md focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue focus:ring-opacity-20 transition-all text-base"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="mb-8">
              <a href="#" className="text-sm text-google-blue hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-google-blue text-white py-3 px-6 rounded-md hover:bg-google-blue-hover transition-colors font-medium text-sm"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-google-gray">
          <p>Gmail UI Demo - Frontend Only</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
