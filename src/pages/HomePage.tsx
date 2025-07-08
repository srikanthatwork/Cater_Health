import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Heart, Star, Check, Zap, Award, Users, TrendingUp, ChevronRight, Play, Crown, Sparkles, Diamond, Clock, Bell, Brain, Target, Microscope } from 'lucide-react';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { dispatch } = useCart();

  const categories = [
    {
      name: 'Immunity Boost',
      description: 'Amla, Elderberry & Astragalus for natural defense',
      icon: <Shield className="w-8 h-8" />,
      href: '/category/immune-support',
      color: 'from-amber-500 to-red-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: ' Health',
      description: 'Prebiotics + Ayurvedic herbs for microbiome balance',
      icon: <Leaf className="w-8 h-8" />,
      href: '/category/gut-health',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mental Clarity',
      description: 'Adaptogens & nootropics for cognitive enhancement',
      icon: <Brain className="w-8 h-8" />,
      href: '/category/mental-clarity',
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const bestSellers = [
    {
      id: 'turmeric-plus',
      name: 'Turmeric+ Joint Health',
      price: "....",
      originalPrice: "....",
      rating: 4.8,
      reviews: 1284,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'joint-health',
      badge: 'Coming Soon',
      description: 'Curcumin with Piperine for enhanced bioavailability',
      comingSoon: true
    },
    {
      id: 'mindzen-stress',
      name: 'MindZen Stress Relief',
      price: "....",
      rating: 4.7,
      reviews: 892,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'mental-clarity',
      badge: 'Coming Soon',
      description: 'Ashwagandha & L-Theanine for cortisol reduction',
      comingSoon: true
    },
    {
      id: 'digestease-gut',
      name: 'DigestEase Gut Balance',
      price: "....",
      rating: 4.9,
      reviews: 756,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'gut-health',
      badge: 'Coming Soon',
      description: 'Prebiotics + probiotics for digestive harmony',
      comingSoon: true
    }
  ];

  const features = [
    { icon: <Microscope className="w-6 h-6" />, label: 'Clinically Formulated', description: 'Research-backed formulations' },
    { icon: <Leaf className="w-6 h-6" />, label: 'Plant-Based Bioactives', description: 'Adaptogens & superfoods' },
    { icon: <Brain className="w-6 h-6" />, label: 'AI-Powered Personal', description: 'Personalized assessments' },
    { icon: <Shield className="w-6 h-6" />, label: 'Sustainably Sourced', description: 'Ethical & eco-conscious' }
  ];

  const whyCaterHealth = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: '100% Plant-Based Bioactive Compounds',
      description: 'Harness the power of adaptogens, herbs, superfoods, and bioactive compounds for targeted health solutions.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Driven Personalized Health Assessments',
      description: 'Advanced technology creates customized supplement recommendations based on your unique health profile.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Research-Backed Adaptogens & Superfoods',
      description: 'Clinically studied ingredients that bridge traditional wellness wisdom with modern scientific validation.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Plastic-Neutral & Ethically Sourced',
      description: 'Sustainable operations and ethical sourcing practices aligned with eco-conscious values.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya M.',
      location: 'Mumbai',
      rating: 5,
      comment: 'Fixed my bloating in 2 weeks! The personalized assessment was spot-on.',
      product: 'DigestEase'
    },
    {
      name: 'Arjun K.',
      location: 'Bangalore',
      rating: 5,
      comment: 'MindZen completely transformed my stress levels. Science-backed results!',
      product: 'MindZen'
    },
    {
      name: 'Kavya R.',
      location: 'Delhi',
      rating: 5,
      comment: 'Love the sustainable packaging and the quality is unmatched.',
      product: 'Turmeric+'
    }
  ];

  const handleNotifyMe = (productName: string) => {
    alert(`We'll notify you when ${productName} becomes available!`);
  };

  const handleHealthAssessment = () => {
    alert('Take Your Free AI-Powered Health Assessment - Coming Soon!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-red-50 to-amber-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-amber-200">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Preventive Care Meets Modern Science</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Science-Backed
                <span className="bg-gradient-to-r from-amber-500 via-red-600 to-amber-600 bg-clip-text text-transparent">
                  {" "}
                  Vitality
                </span>
                <br />
                Rooted in Nature
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Personalized Plant-Based Supplements for Immunity, Gut Health &
                Mental Clarity. Where traditional wellness meets cutting-edge AI
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button
                  onClick={handleHealthAssessment}
                  className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  <Brain className="mr-3 w-6 h-6" />
                  <span className="text-lg">
                    Take Your Free Health Assessment
                  </span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-3 border-amber-400 hover:border-red-500 text-gray-700 hover:text-red-600 font-black py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center justify-center bg-white/80 backdrop-blur-sm">
                  <Play className="mr-3 w-6 h-6" />
                  <span className="text-lg">Discover Our Science</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl mb-3 inline-flex items-center justify-center text-amber-600 border border-amber-200">
                      {feature.icon}
                    </div>
                    <h3 className="font-black text-gray-900 text-sm">
                      {feature.label}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Science-Backed  Products"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-amber-200"
                />
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-2xl p-4 shadow-2xl animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Microscope className="w-6 h-6 fill-current" />
                    <div>
                      <p className="font-black">AI-Powered</p>
                      <p className="text-xs opacity-90">Personalization</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-4 shadow-2xl animate-pulse">
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-6 h-6" />
                    <div>
                      <p className="font-black">Plant-Based</p>
                      <p className="text-xs opacity-90">Bioactives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CaterHealth Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                CaterHealth?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Clinically Formulated. Sustainably Sourced. AI-Powered
              Personalization.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold">
              <Target className="w-5 h-5 text-amber-600" />
              <span>More than supplements - it's a lifestyle movement</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyCaterHealth.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-8 bg-gradient-to-br from-amber-50 to-red-50 rounded-3xl border-2 border-amber-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-amber-400 to-red-500 p-4 rounded-2xl text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Targeted Solutions for{" "}
              <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                Every Health Goal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of adaptogens, herbs, superfoods, and bioactive
              compounds for immunity, gut health, mental clarity, and vitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                // to={category.href}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-amber-200"
              >
                {/* Background Image */}
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}
                  ></div>

                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-black">
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div
                    className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mb-6 ${category.textColor} group-hover:scale-110 transition-transform duration-300 border border-amber-200`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3">{category.name}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <Clock className="mr-2 w-5 h-5" />
                    <span>Coming Soon</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Bestsellers{" "}
              <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                Carousel
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most anticipated science-backed formulations, coming soon for
              targeted health solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 border border-amber-200 relative"
              >
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-black border border-amber-300">
                      {product.badge}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save ₹{(product.originalPrice - product.price).toFixed(0)}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <Crown className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2 font-bold">
                      {product.rating} ({product.reviews.toLocaleString()}{" "}
                      anticipated)
                    </span>
                  </div> */}

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-black text-gray-900">
                        INR{product.price}
                      </span>
                      {/* {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          INR{product.originalPrice}
                        </span>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Customer{" "}
              <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our community of wellness enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-red-600">
                      {testimonial.product}
                    </p>
                    <p className="text-xs text-gray-500">Verified Purchase</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Lorem{" "}
              <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                Ipsum
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorem animi vero omnis laboriosam laborum expedita est vel reprehenderit labore, iste unde itaque ullam fugit velit molestiae sint eaque qui.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-red-600">
                      {testimonial.product}
                    </p>
                    <p className="text-xs text-gray-500">Verified Purchase</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-200 px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Target className="w-5 h-5" />
            <span>Join The Healthy Movement</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience the future of personalized Health. Take your free
            AI-powered health assessment and discover supplements tailored
            specifically for your unique health goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleHealthAssessment}
              className="group bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 hover:from-amber-500 hover:to-amber-600 font-black py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Brain className="mr-3 w-6 h-6" />
              <span className="text-lg">Take Your Free Health Assessment</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/about"
              className="group border-3 border-amber-400 text-amber-200 hover:bg-amber-400 hover:text-gray-900 font-black py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center"
            >
              <span className="text-lg">Discover Our Science</span>
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;