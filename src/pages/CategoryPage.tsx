import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Filter, Clock, Bell, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { dispatch } = useCart();
  const [sortBy, setSortBy] = useState('best-selling');

  const categoryData = {
    'gut-health': {
      title: 'Advanced Gut Health Solutions',
      description: 'Target bloating, IBS, and gut flora imbalance with clinically studied strains - Coming Soon',
      products: [
        {
          id: 'gut-balance-pro',
          name: 'Gut Balance Pro Elite',
          price: 49.99,
          originalPrice: 59.99,
          rating: 4.8,
          reviews: 1284,
          image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'gut-health',
          description: '50B CFU – For comprehensive gut repair',
          badge: 'Coming Soon',
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
          description: '25B CFU – Everyday digestive maintenance',
          badge: 'Coming Soon',
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
          description: '75B CFU – Maximum strength formula',
          badge: 'Coming Soon',
          comingSoon: true
        }
      ]
    },
    'immune-support': {
      title: 'Immune System Support',
      description: 'Strengthen your natural defenses with targeted probiotic blends - Coming Soon',
      products: [
        {
          id: 'immune-support',
          name: 'Immune Defense Royal',
          price: 44.99,
          rating: 4.7,
          reviews: 892,
          image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'immune-support',
          description: 'Boost immunity with specialized strains',
          badge: 'Coming Soon',
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
          description: 'Advanced immune system protection',
          badge: 'Coming Soon',
          comingSoon: true
        }
      ]
    },
    'womens-health': {
      title: 'Probiotics Designed for Women',
      description: 'Contains L. rhamnosus GR-1® for feminine balance and urinary tract health - Coming Soon',
      products: [
        {
          id: 'womens-flora',
          name: 'Women\'s Flora Luxe',
          price: 47.99,
          rating: 4.9,
          reviews: 756,
          image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'womens-health',
          description: 'Supports vaginal & urinary tract health',
          badge: 'Coming Soon',
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
          description: 'Hormonal balance and wellness support',
          badge: 'Coming Soon',
          comingSoon: true
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return <div>Category not found</div>;
  }

  const handleNotifyMe = (productName: string) => {
    alert(`We'll notify you when ${productName} becomes available!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm breadcrumbs mb-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700 font-semibold">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-bold">{currentCategory.title}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Coming Soon</span>
              </div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">{currentCategory.title}</h1>
              <p className="text-lg text-gray-600">{currentCategory.description}</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-2 border-amber-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 font-semibold"
                >
                  <option value="best-selling">Most Anticipated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 border-2 border-amber-200 relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-amber-400 text-gray-900 px-6 py-3 rounded-2xl font-black text-lg mb-3 shadow-xl">
                    Coming Soon
                  </div>
                  <button
                    onClick={() => handleNotifyMe(product.name)}
                    className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Notify Me</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover opacity-70"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-black">
                    {product.badge}
                  </span>
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                    Save ₹{(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
                <div className="absolute bottom-4 right-4">
                  <Crown className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                
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
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center text-white">
          <Crown className="w-16 h-16 mx-auto mb-4 text-amber-300" />
          <h2 className="text-3xl font-black mb-4">Luxury Products Coming Soon</h2>
          <p className="text-xl mb-6 opacity-90">
            Our {currentCategory.title.toLowerCase()} products are being carefully crafted for the ultimate wellness experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-300 transition-colors">
              Join VIP Waitlist
            </button>
            <Link
              to="/products"
              className="border-2 border-amber-400 text-amber-200 px-8 py-4 rounded-2xl font-black hover:bg-amber-400 hover:text-gray-900 transition-colors"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;