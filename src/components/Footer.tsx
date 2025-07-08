import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Crown,
  Diamond,
  Sparkles,
} from "lucide-react";
import logo from "../Public/images/Caterhealth-new-logo.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
              <div>
                <span className="text-2xl font-black text-white">
                  Cater Health
                </span>
                {/* <p className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                  Luxury Wellness
                </p> */}
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Science-driven solutions for peak health and performance.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h3 className="text-lg font-black text-white mb-3 flex items-center">
                <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
                Join Elite Members
              </h3>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border-2 border-amber-400/30 rounded-l-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 backdrop-blur-sm font-semibold"
                />
                <button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-6 py-3 rounded-r-xl transition-all duration-300 flex items-center font-black">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-600 p-3 rounded-xl transition-all duration-300 group border border-amber-400/30"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-600 p-3 rounded-xl transition-all duration-300 group border border-amber-400/30"
              >
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-600 p-3 rounded-xl transition-all duration-300 group border border-amber-400/30"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 flex items-center">
              <Diamond className="w-5 h-5 text-amber-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Support */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 flex items-center">
              <Crown className="w-5 h-5 text-amber-400 mr-2" />
              Elite Collections
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/category/gut-health"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gut Health Luxe
                </Link>
              </li>
              <li>
                <Link
                  to="/category/immune-support"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Immune Elite
                </Link>
              </li>
              <li>
                <Link
                  to="/category/womens-health"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Women's Royal
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  VIP Account
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-amber-400/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600/20 p-3 rounded-xl border border-amber-400/30">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-black">Elite Support</p>
                <p className="text-gray-300">+91 9700-112-000</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600/20 p-3 rounded-xl border border-amber-400/30">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-black">VIP Email</p>
                <p className="text-gray-300">info@caterhealth.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600/20 p-3 rounded-xl border border-amber-400/30">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-black">Luxury Headquarters</p>
                <p className="text-gray-300">
                  {" "}
                  Plot No: 16, Block No: 01, Vittal Rao Nagar, Madhaur,
                  Hyderabad, Telangana - 500085
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; 2025 Cater Health. Crafted with
            </p>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <p className="text-gray-400">for your journey.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-amber-400 transition-colors font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-amber-400 transition-colors font-semibold"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-amber-400 transition-colors font-semibold"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
