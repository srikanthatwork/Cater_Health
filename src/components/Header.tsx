import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search, Download, Wallet, ChevronDown, Heart, Bell, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../Public/images/Caterhealth-new-logo.png'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsProductsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Products', href: '/products' },
        { name: 'Gut Health', href: '/category/gut-health' },
        { name: 'Immune Support', href: '/category/immune-support' },
        { name: 'Women\'s Health', href: '/category/womens-health' }
      ]
    },
    { name: 'Research', href: '/reports' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-amber-100 shadow-lg">
      {/* Top Promotional Bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="bg-amber-400/20 p-1.5 rounded-full">
                  <Crown className="w-4 h-4 text-amber-300" />
                </div>
                <span className="font-semibold">
                  Premium Quality • Free shipping on orders over ₹999
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-xs opacity-90">
                <div className="w-1 h-1 bg-amber-300/60 rounded-full"></div>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-amber-400/10 hover:bg-amber-400/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center space-x-1.5 border border-amber-300/30 hover:border-amber-300/50">
                <Download className="w-3.5 h-3.5" />
                <span>Download App</span>
              </button>
              <div className="h-3 w-px bg-amber-300/30"></div>
              <Link
                to="/login"
                className="text-white hover:text-amber-200 transition-colors text-sm font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Cater Health Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text: hidden on mobile, shown on tablets and up */}
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-tight">
                  Cater Health
                </span>
                <span className="text-xs text-red-600 font-bold uppercase tracking-widest">
                  Luxury Wellness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 ml-3">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative dropdown-container">
                      <button
                        onClick={() =>
                          setIsProductsDropdownOpen(!isProductsDropdownOpen)
                        }
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        className={`flex items-center space-x-1.5 px-6 py-3.5 text-sm font-bold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 group ${
                          isActive(item.href) || isProductsDropdownOpen
                            ? "text-red-700 bg-gradient-to-r from-amber-50 to-red-50 shadow-md"
                            : "text-gray-700"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-all duration-300 ${
                            isProductsDropdownOpen
                              ? "rotate-180 text-red-600"
                              : "group-hover:rotate-180"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isProductsDropdownOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200 py-4 z-50 transform transition-all duration-300"
                          onMouseEnter={() => setIsProductsDropdownOpen(true)}
                          onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        >
                          {/* Dropdown Header */}
                          <div className="px-6 py-3 border-b border-amber-100">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                              Premium Products
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                              Luxury wellness solutions
                            </p>
                          </div>

                          {/* Dropdown Items */}
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setIsProductsDropdownOpen(false)}
                              className="group/item flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 transition-all duration-200 mx-3 my-1 rounded-xl border border-transparent hover:border-amber-200"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                                <span>{dropdownItem.name}</span>
                              </div>
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover/item:text-red-500 transform group-hover/item:translate-x-1 transition-all duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}

                          {/* Dropdown Footer */}
                          <div className="px-6 py-3 border-t border-amber-100 mt-2">
                            <Link
                              to="/products"
                              onClick={() => setIsProductsDropdownOpen(false)}
                              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              <span>View All Products</span>
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-6 py-3.5 text-sm font-bold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 ${
                        isActive(item.href)
                          ? "text-red-700 bg-gradient-to-r from-amber-50 to-red-50 shadow-md"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className="relative group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search luxury wellness products..."
                    className="w-full pl-14 pr-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-amber-50/30 focus:bg-white text-gray-900 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                  />
                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                    <Search className="w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Mobile Search Toggle */}
              <button
                className="md:hidden p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                  3
                </span>
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
              </Link>

              {/* Profile */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => setIsProfileDropdownOpen(true)}
                // onMouseLeave={() => setIsProfileDropdownOpen(false)}
              >
                <button className="p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300">
                  <User className="w-5 h-5" />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200 py-3 z-50"
                   onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    <div className="px-5 py-4 border-b border-amber-100">
                      <p className="text-sm font-bold text-gray-900">
                        Your Account
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Manage your luxury wellness journey
                      </p>
                    </div>

                    <div className="py-2">
                      <Link
                        to="/account"
                        className="flex items-center px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 transition-all duration-200 mx-2 rounded-xl"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile Settings
                      </Link>

                      <Link
                        to="/orders"
                        className="flex items-center px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 transition-all duration-200 mx-2 rounded-xl"
                      >
                        <ShoppingCart className="w-4 h-4 mr-3" />
                        Order History
                      </Link>

                      <Link
                        to="/wishlist"
                        className="flex items-center px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 transition-all duration-200 mx-2 rounded-xl"
                      >
                        <Heart className="w-4 h-4 mr-3" />
                        Wishlist
                      </Link>

                      <Link
                        to="/recommendations"
                        className="flex items-center px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 transition-all duration-200 mx-2 rounded-xl"
                      >
                        <Crown className="w-4 h-4 mr-3" />
                        Recommendations
                      </Link>
                    </div>

                    <div className="border-t border-amber-100 py-2">
                      <button className="flex items-center w-full px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200 mx-2 rounded-xl">
                        <svg
                          className="w-4 h-4 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-3 text-gray-700 hover:text-red-600 hover:bg-amber-50 rounded-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden py-4 border-t border-amber-100 bg-amber-50/30">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search luxury wellness products..."
                  className="w-full pl-14 pr-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 font-medium"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-amber-100 bg-amber-50/30 relative z-40">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-5 py-4 text-base font-bold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-red-50 hover:text-red-700 ${
                        isActive(item.href)
                          ? "text-red-700 bg-gradient-to-r from-amber-50 to-red-50"
                          : "text-gray-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-lg hover:bg-amber-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;