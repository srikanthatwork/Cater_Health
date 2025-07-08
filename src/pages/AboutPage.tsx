import React from 'react';
import { Shield, Award, Users, Microscope, Heart, Globe, Target, Zap, Leaf, TrendingUp, Star, Crown } from 'lucide-react';
import Image from '../Public/images/portrait-businessman-smiling.jpg'
const AboutPage = () => {
  const stats = [
    { number: '500M+', label: 'Lives Impacted', icon: <Users className="w-5 h-5" /> },
    { number: '50B+', label: 'CFU Premium Formula', icon: <Zap className="w-5 h-5" /> },
    { number: '98%', label: 'Customer Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '15+', label: 'Years R&D Excellence', icon: <Award className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Science-First Innovation',
      description: 'Bridging traditional wellness with modern science through clinically-backed, plant-based formulations that deliver measurable results.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Natural Excellence',
      description: 'Harnessing adaptogens, herbs, superfoods, and bioactive compounds through sustainable sourcing and ethical practices.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Personalized Wellness',
      description: 'AI-driven health assessments create targeted formulations for immunity, gut health, mental clarity, and vitality.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Preventive Care Movement',
      description: 'More than supplements - we\'re building a lifestyle movement rooted in preventive care and holistic wellness.'
    }
  ];

  const team = [
    {
      name: "Devarayalu",
      role: "CEO  & Founder",
      // credentials: "Ph.D. Nutraceutical Sciences, IIT Delhi",
      image:Image
        ,
      // bio: "15+ years pioneering plant-based nutraceutical research and AI-driven personalization",
    },
    // {
    //   name: 'Dr. Arjun Mehta',
    //   role: 'Head of Product Innovation',
    //   credentials: 'Ph.D. Biochemistry, AIIMS',
    //   image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   bio: 'Expert in adaptogens and bioactive compounds with 20+ published research papers'
    // },
    // {
    //   name: 'Kavya Reddy',
    //   role: 'Chief Technology Officer',
    //   credentials: 'M.Tech AI/ML, IISc Bangalore',
    //   image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   bio: 'Leading AI-driven personalized health assessments and digital wellness platforms'
    // }
  ];

  const certifications = [
    'FSSAI Approved',
    'ISO 22000 Certified',
    'GMP Certified',
    'AYUSH Compliant',
    'Organic Certified',
    'Sustainable Sourcing'
  ];

  const strengths = [
    {
      title: 'Continuous R&D Excellence',
      description: 'Stay ahead of trends with future-ready, need-based product development',
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: 'Ethical & Sustainable Operations',
      description: 'Responsible sourcing practices aligned with eco-conscious values',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: 'Premium Brand Identity',
      description: 'Strong visual identity and user-friendly packaging for enhanced experience',
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: 'Customer-First Innovation',
      description: 'Multidisciplinary team focused on trust and long-term value creation',
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-200 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Crown className="w-5 h-5" />
              <span>Revolutionizing Wellness Since 2020</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Bridging Traditional Wellness
              <span className="block text-amber-300">with Modern Science</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Caterhealth is a cutting-edge nutraceutical brand offering
              plant-based, clinically-backed supplements that cater to
              individual health needs through AI-driven personalization and
              sustainable innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-amber-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Revolutionizing Health Habits Through Natural Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CaterHealth aims to revolutionize health habits by making
                natural supplements a seamless part of daily life. We harness
                the power of adaptogens, herbs, superfoods, and bioactive
                compounds to create targeted formulations for immunity, gut
                health, mental clarity, and vitality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By combining AI-driven personalized health assessments with
                sustainable sourcing, we've become more than a supplement
                brand—we're a lifestyle movement rooted in preventive care,
                holistic wellness, and everyday performance enhancement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-amber-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    AI-Driven Personalization
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-amber-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Sustainable Sourcing
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-amber-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Clinically-Backed Formulas
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-amber-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Preventive Care Focus
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Research and Innovation"
                className="rounded-3xl shadow-2xl border-4 border-amber-200"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-red-500 text-white p-4 rounded-2xl shadow-xl">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Leading India's{" "}
              <span className="text-red-600">Wellness Revolution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Positioned at the forefront of India's booming nutraceutical
              sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-3xl border-2 border-amber-200">
              <div className="bg-gradient-to-r from-amber-400 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Market Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                India's nutraceutical sector is experiencing unprecedented
                growth, driven by rising interest in preventive solutions and
                post-pandemic health consciousness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-3xl border-2 border-amber-200">
              <div className="bg-gradient-to-r from-amber-400 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Expanding Reach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Growing awareness in Tier 2 and Tier 3 cities, coupled with
                urbanization and rising disposable income, creates vast
                opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-3xl border-2 border-amber-200">
              <div className="bg-gradient-to-r from-amber-400 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Government Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Favorable government initiatives promoting AYUSH and
                wellness-based industries provide strong regulatory backing for
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that drive our innovation and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-amber-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-amber-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Competitive <span className="text-red-600">Strengths</span>
            </h2>
            <p className="text-xl text-gray-600">
              Powered by innovation, authenticity, and unwavering consumer focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-2xl border border-amber-200"
              >
                <div className="bg-gradient-to-r from-amber-400 to-red-500 p-3 rounded-xl text-white flex-shrink-0">
                  {strength.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Multidisciplinary experts driving wellness innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow border-2 border-amber-200 w-full max-w-[300px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-amber-200"
                />
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-bold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {member.credentials}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Quality & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Trusted standards ensuring the highest quality and safety
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-6 text-center border-2 border-amber-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-black text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Ambitious Goals
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Positioning CaterHealth as India's leader in clean and conscious
              wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-black text-lg mb-2">Innovation Leadership</h3>
              <p className="text-white/90 text-sm">
                Introducing cutting-edge formulations based on emerging health
                trends
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-black text-lg mb-2">Diverse Product Lines</h3>
              <p className="text-white/90 text-sm">
                Expanding offerings for diverse age groups and health needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-black text-lg mb-2">Nationwide Reach</h3>
              <p className="text-white/90 text-sm">
                Strategic digital channels ensuring pan-India accessibility
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-black text-lg mb-2">Wellness Community</h3>
              <p className="text-white/90 text-sm">
                Building loyal communities through education and engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 text-amber-500" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the wellness revolution with CaterHealth's science-backed,
            personalized nutrition solutions. Experience the future of
            preventive healthcare today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Join Waitlist
            </button>
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-black py-4 px-8 rounded-2xl transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;