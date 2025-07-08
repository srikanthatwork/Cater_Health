import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Grid, List, Search, SlidersHorizontal, Heart, ShoppingCart, Crown, Diamond, Sparkles, Clock, Bell } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const { dispatch } = useCart();
  const [sortBy, setSortBy] = useState('best-selling');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const comingSoonProducts = [
    {
      id: 'gut-balance-pro',
      name: 'Gut Balance Pro Elite',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 1284,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'gut-health',
      description: '50B CFU luxury formula for comprehensive gut restoration',
      badge: 'Coming Soon',
      stage: 'Elite',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'daily-probiotic',
      name: 'Daily Probiotic Royal',
      price: 39.99,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'gut-health',
      description: '25B CFU premium digestive maintenance',
      badge: 'Coming Soon',
      stage: 'Premium',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'advanced-digestive',
      name: 'Advanced Digestive Luxe',
      price: 54.99,
      rating: 4.7,
      reviews: 567,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'gut-health',
      description: '75B CFU maximum luxury strength formula',
      badge: 'Coming Soon',
      stage: 'Platinum',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'immune-support',
      name: 'Immune Defense Royal',
      price: 44.99,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'immune-support',
      description: 'Elite-strength immune system enhancement',
      badge: 'Coming Soon',
      stage: 'Elite',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'defense-formula',
      name: 'Defense Formula Platinum',
      price: 52.99,
      rating: 4.8,
      reviews: 654,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'immune-support',
      description: 'Advanced luxury immune system protection',
      badge: 'Coming Soon',
      stage: 'Platinum',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'womens-flora',
      name: 'Women\'s Flora Luxe',
      price: 47.99,
      rating: 4.9,
      reviews: 756,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'womens-health',
      description: 'Luxury feminine health & hormonal balance',
      badge: 'Coming Soon',
      stage: 'Elite',
      inStock: false,
      comingSoon: true
    },
    {
      id: 'feminine-balance',
      name: 'Feminine Balance Royal',
      price: 42.99,
      rating: 4.6,
      reviews: 434,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'womens-health',
      description: 'Premium hormonal balance and wellness support',
      badge: 'Coming Soon',
      stage: 'Premium',
      inStock: false,
      comingSoon: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products', count: comingSoonProducts.length },
    { value: 'gut-health', label: 'Gut Health', count: comingSoonProducts.filter(p => p.category === 'gut-health').length },
    { value: 'immune-support', label: 'Immune Support', count: comingSoonProducts.filter(p => p.category === 'immune-support').length },
    { value: 'womens-health', label: 'Women\'s Health', count: comingSoonProducts.filter(p => p.category === 'womens-health').length }
  ];

  const filteredProducts = comingSoonProducts.filter(product => {
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleNotifyMe = (productName: string) => {
    alert(`We'll notify you when ${productName} becomes available!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-200">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Luxury Products Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Elite <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">Wellness</span> Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our premium luxury wellness products are being carefully crafted and will be available soon
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-amber-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search upcoming luxury products..."
                className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 font-semibold text-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 sticky top-8 border-2 border-amber-200">
              <div className="flex items-center space-x-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-black text-gray-900">Elite Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-black text-gray-900 mb-4">Collections</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setFilterCategory(category.value)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                        filterCategory === category.value
                          ? 'bg-gradient-to-r from-amber-100 to-red-100 text-red-700 font-black border-2 border-amber-300'
                          : 'text-gray-700 hover:bg-amber-50 border border-amber-200'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-sm bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-bold">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="bg-gradient-to-r from-amber-100 to-red-100 p-4 rounded-xl border border-amber-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Bell className="w-5 h-5 text-red-600" />
                  <h3 className="font-black text-red-800">Get Notified</h3>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  Be the first to know when our luxury products launch!
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
                  Join Waitlist
                </button>
              </div>

              {/* View Mode */}
              <div className="mt-6">
                <h3 className="text-lg font-black text-gray-900 mb-4">View Style</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-600 font-semibold">
                  <span className="font-black text-gray-900">{filteredProducts.length}</span> luxury products coming soon
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-amber-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border-2 border-amber-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white font-semibold"
                  >
                    <option value="best-selling">Most Anticipated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-amber-200 group relative">
                    {/* Coming Soon Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-amber-400 text-gray-900 px-6 py-3 rounded-2xl font-black text-lg mb-3 shadow-xl">
                          Coming Soon
                        </div>
                        <button
                          onClick={() => handleNotifyMe(product.name)}
                          className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-red-700 transition-colors"
                        >
                          Notify Me
                        </button>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-black">
                          {product.badge}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                          {product.stage}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Crown className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-black text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2 font-semibold">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-black text-gray-900">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-amber-200 relative">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 bg-amber-400 text-gray-900 px-4 py-2 rounded-xl font-black">
                      Coming Soon
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-2xl opacity-70"
                        />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                          {product.stage}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <div className="flex items-center mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2 font-semibold">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                              )}
                            </div>
                            <button
                              onClick={() => handleNotifyMe(product.name)}
                              className="bg-red-600 text-white py-2 px-6 rounded-xl font-black hover:bg-red-700 transition-colors flex items-center space-x-2"
                            >
                              <Bell className="w-4 h-4" />
                              <span>Notify Me</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Coming Soon CTA */}
            <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center text-white">
              <Crown className="w-16 h-16 mx-auto mb-4 text-amber-300" />
              <h2 className="text-3xl font-black mb-4">Luxury Wellness Coming Soon</h2>
              <p className="text-xl mb-6 opacity-90">
                Our premium products are being carefully crafted to deliver the ultimate wellness experience
              </p>
              <button className="bg-amber-400 text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-300 transition-colors">
                Join VIP Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;