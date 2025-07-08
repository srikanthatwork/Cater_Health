import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Clock, Bell, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 'gut-balance-pro',
    name: 'Gut Balance Pro – 50B CFU Advanced Formula',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1284,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'gut-health',
    inStock: false,
    comingSoon: true,
    description: 'Our most advanced probiotic formula with 50 billion CFUs and 10 targeted strains specifically chosen for comprehensive gut repair and maintenance. Coming Soon!',
    benefits: [
      'Reduces bloating within 14 days',
      '10 targeted strains for gut lining repair',
      'Supports healthy digestion and nutrient absorption',
      'Boosts immune system function',
      'Improves mental clarity and mood'
    ],
    ingredients: [
      'Lactobacillus acidophilus LA-14® (10B CFU)',
      'Bifidobacterium lactis BL-04® (10B CFU)',
      'Lactobacillus plantarum LP-115® (8B CFU)',
      'Lactobacillus casei LC-11® (6B CFU)',
      'And 6 more targeted strains'
    ],
    howToUse: 'Take 1 capsule daily with food, preferably in the morning. Store in a cool, dry place.',
    reviews: [
      {
        id: 1,
        name: 'Sarah M.',
        rating: 5,
        comment: 'Can\'t wait for this to launch! The formula looks amazing.',
        date: '2 weeks ago'
      },
      {
        id: 2,
        name: 'Michael R.',
        rating: 5,
        comment: 'Finally, a premium probiotic that looks worth the wait!',
        date: '1 month ago'
      },
      {
        id: 3,
        name: 'Jennifer L.',
        rating: 4,
        comment: 'Looking forward to trying this when it becomes available.',
        date: '3 weeks ago'
      }
    ]
  };

  const handleNotifyMe = () => {
    alert(`We'll notify you when ${product.name} becomes available!`);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'usage', label: 'How to Use' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm breadcrumbs">
            <Link to="/" className="text-gray-500 hover:text-gray-700 font-semibold">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/category/${product.category}`} className="text-gray-500 hover:text-gray-700 font-semibold">
              Gut Health
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-amber-200 relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-amber-400 text-gray-900 px-8 py-4 rounded-2xl font-black text-2xl mb-4 shadow-xl">
                    Coming Soon
                  </div>
                  <p className="text-white font-bold text-lg">Luxury Wellness Experience</p>
                </div>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Coming Soon</span>
              </div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-semibold">
                  {product.rating} ({product.reviews} anticipated reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Save ₹{(product.originalPrice! - product.price).toFixed(2)}
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="text-lg font-black text-gray-900">Key Benefits:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-amber-200">
              <div className="text-center">
                <Crown className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">Luxury Product Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  Be the first to experience our premium wellness formula when it launches
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleNotifyMe}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Bell className="w-5 h-5 mr-2" />
                  Notify Me When Available
                </button>
                
                <div className="flex space-x-4">
                  <button className="flex-1 p-3 border-2 border-amber-300 rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center">
                    <Heart className="w-5 h-5 text-amber-600" />
                  </button>
                  <button className="flex-1 p-3 border-2 border-amber-300 rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-amber-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-red-100 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center space-x-2 text-red-800">
                <Crown className="w-5 h-5" />
                <span className="font-black">Premium Quality Guaranteed</span>
              </div>
              <p className="text-sm text-red-700 mt-1 font-semibold">
                Luxury formulation • 30-day money-back guarantee • Free shipping
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b-2 border-amber-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-bold text-sm ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">{product.description}</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our Gut Balance Pro formula contains clinically studied probiotic strains that work synergistically to restore and maintain optimal gut health. Each capsule delivers 50 billion CFUs of beneficial bacteria to support digestive wellness and overall health. This premium product is currently in development and will be available soon.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-4">Active Ingredients (Coming Soon):</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center bg-amber-50 p-6 rounded-xl border border-amber-200">
                  <h3 className="text-lg font-black text-gray-900 mb-2">Customer Anticipation</h3>
                  <p className="text-gray-600">See what customers are saying about our upcoming launch</p>
                </div>
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-black text-gray-900">{review.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 font-semibold">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-4">How to Use (When Available):</h3>
                <p className="text-gray-700 mb-4 text-lg">{product.howToUse}</p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-black text-blue-900 mb-2">Pro Tips:</h4>
                  <ul className="space-y-1 text-blue-800">
                    <li>• Take consistently at the same time each day for best results</li>
                    <li>• Avoid taking with hot beverages or alcohol</li>
                    <li>• Results typically seen within 2-4 weeks of consistent use</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Coming Soon CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center text-white">
          <Crown className="w-16 h-16 mx-auto mb-4 text-amber-300" />
          <h2 className="text-3xl font-black mb-4">Join the VIP Waitlist</h2>
          <p className="text-xl mb-6 opacity-90">
            Be among the first to experience our luxury wellness products when they launch
          </p>
          <button
            onClick={handleNotifyMe}
            className="bg-amber-400 text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-300 transition-colors"
          >
            Get Exclusive Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;