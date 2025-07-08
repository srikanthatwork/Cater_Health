import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, Crown, Sparkles, Bell } from 'lucide-react';

const BlogPage = () => {
  const featuredArticle = {
    id: 1,
    title: 'The Future of Nutraceuticals: How AI-Driven Personalization is Revolutionizing Wellness',
    excerpt: 'Discover how Caterhealth is bridging traditional wellness with modern science through cutting-edge AI technology and personalized health assessments.',
    author: 'Dr. Priya Sharma',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Innovation',
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: 'Plant-Based Nutraceuticals: The Science Behind Natural Wellness',
      excerpt: 'Exploring how adaptogens, herbs, and superfoods are transforming preventive healthcare in India.',
      author: 'Dr. Arjun Mehta',
      date: 'March 12, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Research'
    },
    {
      id: 3,
      title: 'India\'s Nutraceutical Revolution: Market Trends and Opportunities',
      excerpt: 'Understanding the booming wellness sector and how government support is driving innovation.',
      author: 'Kavya Reddy',
      date: 'March 10, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Market Analysis'
    },
    {
      id: 4,
      title: 'Sustainable Sourcing: Our Commitment to Ethical Wellness',
      excerpt: 'How Caterhealth ensures eco-friendly practices while delivering premium quality supplements.',
      author: 'Dr. Priya Sharma',
      date: 'March 8, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sustainability'
    },
    {
      id: 5,
      title: 'Bioactive Compounds: The Future of Targeted Health Solutions',
      excerpt: 'Deep dive into the science of bioactive compounds and their role in personalized nutrition.',
      author: 'Dr. Arjun Mehta',
      date: 'March 5, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Science'
    },
    {
      id: 6,
      title: 'Preventive Care Movement: Building a Healthier India',
      excerpt: 'How the shift towards preventive healthcare is creating opportunities for wellness innovation.',
      author: 'Kavya Reddy',
      date: 'March 3, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Wellness'
    }
  ];

  const categories = [
    'All Categories',
    'Innovation',
    'Research',
    'Market Analysis',
    'Sustainability',
    'Science',
    'Wellness'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Crown className="w-5 h-5 text-amber-600" />
              <span>Wellness Innovation Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Wellness <span className="text-red-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on nutraceutical innovation, market trends, and the future of personalized wellness
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-amber-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-black">
                    Featured
                  </span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span className="font-semibold">{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-3 px-6 rounded-xl transition-colors inline-flex items-center shadow-lg">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 text-sm font-bold rounded-full border-2 border-amber-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 border-2 border-amber-200"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-100 to-red-100 text-red-700 font-bold py-3 px-4 rounded-xl hover:from-red-600 hover:to-red-700 hover:text-white transition-all duration-300 flex items-center justify-center">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="relative">
            <Crown className="w-16 h-16 mx-auto mb-4 text-amber-300" />
            <h2 className="text-3xl font-black mb-4">Stay Updated with Wellness Innovation</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights on nutraceutical research, market trends, and wellness innovation delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-red-600 font-semibold"
              />
              <button className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-black py-4 px-8 rounded-2xl transition-colors flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;