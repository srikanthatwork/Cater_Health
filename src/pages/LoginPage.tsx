import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, CheckCircle, AlertCircle, Crown, Sparkles, Diamond } from 'lucide-react';
import logo from '../Public/images/Caterhealth-new-logo.png'; // Adjust the path as necessary

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('YOUR_BACKEND_API_URL/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          remember_me: rememberMe
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          sessionStorage.setItem('authToken', data.token);
          sessionStorage.setItem('user', JSON.stringify(data.user));
        }
        navigate('/');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-amber-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-3 group mb-8"
          >
            <img
              src={logo}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                // borderRadius: '50%',
                // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
            <div className='justify-start items-start flex flex-col'>
              <span className="text-3xl font-black text-gray-900">
                Cater Health
              </span>
              <p className="text-xs text-red-600 font-bold uppercase tracking-widest">
                Luxury Wellness
              </p>
            </div>
          </Link>

          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-lg">
            Continue your elite wellness journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 border-amber-200">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 text-sm font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-black text-gray-700 mb-3"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-amber-50/30 focus:bg-white text-gray-900 placeholder-gray-500 font-semibold"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-black text-gray-700 mb-3"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-12 pr-12 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-amber-50/30 focus:bg-white text-gray-900 placeholder-gray-500 font-semibold"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-amber-500 hover:text-red-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-amber-500 hover:text-red-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-amber-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 font-semibold"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-black text-red-600 hover:text-red-500 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-black rounded-2xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Crown className="w-5 h-5" />
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-amber-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-bold">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-amber-200 rounded-2xl shadow-sm bg-white text-sm font-black text-gray-700 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="ml-2">Google</span>
            </button>

            <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-amber-200 rounded-2xl shadow-sm bg-white text-sm font-black text-gray-700 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-black text-red-600 hover:text-red-500 transition-colors"
            >
              Join the Elite
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="font-semibold">Secure Login</span>
          </div>
          <div className="flex items-center space-x-1">
            <Diamond className="w-4 h-4 text-red-500" />
            <span className="font-semibold">Premium Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;