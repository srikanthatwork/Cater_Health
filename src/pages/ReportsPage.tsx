import React, { useState } from 'react';
import { Download, Calendar, User, Eye, FileText, TrendingUp, BarChart3, Users, Crown, Sparkles, Bell } from 'lucide-react';

const ReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reports = [
    {
      id: 1,
      title: 'India\'s Nutraceutical Revolution: Market Analysis & Future Opportunities 2025',
      category: 'Market Research',
      author: 'Caterhealth Research Team',
      date: 'March 15, 2025',
      views: 12847,
      downloads: 3421,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Comprehensive analysis of India\'s booming nutraceutical sector, government initiatives, and emerging opportunities in Tier 2 & 3 cities.',
      featured: true,
      tags: ['Market Analysis', 'India', 'Growth Trends']
    },
    {
      id: 2,
      title: 'AI-Driven Personalization in Nutraceuticals: The Future of Wellness',
      category: 'Innovation',
      author: 'Dr. Kavya Reddy',
      date: 'March 10, 2025',
      views: 8934,
      downloads: 2156,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'How artificial intelligence is revolutionizing personalized health assessments and targeted supplement formulations.',
      featured: false,
      tags: ['AI Technology', 'Personalization', 'Innovation']
    },
    {
      id: 3,
      title: 'Plant-Based Bioactive Compounds: Scientific Evidence & Applications',
      category: 'Research',
      author: 'Dr. Arjun Mehta',
      date: 'March 5, 2025',
      views: 7623,
      downloads: 1834,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'In-depth analysis of adaptogens, herbs, and superfoods with clinical evidence for targeted health applications.',
      featured: false,
      tags: ['Plant-Based', 'Bioactive Compounds', 'Clinical Research']
    },
    {
      id: 4,
      title: 'Sustainable Sourcing in Nutraceuticals: Best Practices & Impact Assessment',
      category: 'Sustainability',
      author: 'Dr. Priya Sharma',
      date: 'February 28, 2025',
      views: 9156,
      downloads: 2743,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Comprehensive guide to ethical sourcing practices and environmental impact in the nutraceutical industry.',
      featured: false,
      tags: ['Sustainability', 'Ethical Sourcing', 'Environmental Impact']
    },
    {
      id: 5,
      title: 'Preventive Healthcare Trends: Consumer Behavior & Market Dynamics',
      category: 'Consumer Insights',
      author: 'Research Team',
      date: 'February 20, 2025',
      views: 6789,
      downloads: 1567,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Analysis of changing consumer preferences towards preventive care and wellness solutions in India.',
      featured: false,
      tags: ['Consumer Behavior', 'Preventive Care', 'Market Trends']
    },
    {
      id: 6,
      title: 'Regulatory Landscape: AYUSH Compliance & Quality Standards',
      category: 'Regulatory',
      author: 'Compliance Team',
      date: 'February 15, 2025',
      views: 5432,
      downloads: 1289,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Complete guide to regulatory requirements, AYUSH compliance, and quality standards in Indian nutraceuticals.',
      featured: false,
      tags: ['Regulatory', 'AYUSH', 'Quality Standards']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Reports', count: reports.length },
    { value: 'Market Research', label: 'Market Research', count: reports.filter(r => r.category === 'Market Research').length },
    { value: 'Innovation', label: 'Innovation', count: reports.filter(r => r.category === 'Innovation').length },
    { value: 'Research', label: 'Scientific Research', count: reports.filter(r => r.category === 'Research').length },
    { value: 'Sustainability', label: 'Sustainability', count: reports.filter(r => r.category === 'Sustainability').length },
    { value: 'Consumer Insights', label: 'Consumer Insights', count: reports.filter(r => r.category === 'Consumer Insights').length }
  ];

  const filteredReports = selectedCategory === 'all' 
    ? reports 
    : reports.filter(report => report.category === selectedCategory);

  const featuredReport = reports.find(report => report.featured);
  const regularReports = reports.filter(report => !report.featured);

  const stats = [
    { icon: <FileText className="w-6 h-6" />, label: 'Research Reports', value: '25+' },
    { icon: <Users className="w-6 h-6" />, label: 'Industry Experts', value: '50+' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Market Studies', value: '15+' },
    { icon: <BarChart3 className="w-6 h-6" />, label: 'Data Points', value: '1M+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-200 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Crown className="w-5 h-5" />
              <span>Research Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Research <span className="text-amber-300">Reports</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive insights into nutraceutical innovation, market trends, and the future of personalized wellness in India
            </p>
            <div className="flex justify-center">
              <div className="bg-amber-400/20 backdrop-blur-sm rounded-2xl p-4 border border-amber-300/30">
                <span className="text-amber-200 font-bold text-sm">
                  All reports are research-backed and independently verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-amber-400 to-red-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Report */}
        {featuredReport && (
          <div className="mb-16">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Featured Report</h2>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredReport.image}
                    alt={featuredReport.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-black">
                      Featured
                    </span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">
                      {featuredReport.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                    {featuredReport.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredReport.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="font-semibold">{featuredReport.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredReport.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredReport.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-3 px-6 rounded-xl transition-colors inline-flex items-center shadow-lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 text-sm font-bold rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-600'
                    : 'border-amber-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReports.filter(report => !report.featured).map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 border-2 border-amber-200"
            >
              <div className="relative">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {report.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {report.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {report.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {report.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">{report.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{report.downloads.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-semibold">
                    {report.date}
                  </div>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-xl transition-colors inline-flex items-center text-sm shadow-lg">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl font-black mb-4">Stay Updated with Latest Research</h2>
            <p className="text-xl mb-8 opacity-90">
              Get notified when we publish new research reports and market insights
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

export default ReportsPage;