import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Crown, Sparkles, Bell } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Elite Support',
      details: '+91 (555) 123-4567',
      subtext: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Premium Email',
      details: 'hello@caterhealth.com',
      subtext: 'Response within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      details: '123 Innovation Street',
      subtext: 'Bangalore, Karnataka 560001'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      details: 'Coming Soon',
      subtext: 'Chat with our wellness experts'
    }
  ];

  const faqs = [
    {
      question: 'When will Caterhealth products be available?',
      answer: 'Our luxury wellness products are currently in development. Join our VIP waitlist to be notified when they launch.'
    },
    {
      question: 'What makes Caterhealth different from other nutraceutical brands?',
      answer: 'We bridge traditional wellness with modern science through AI-driven personalization, sustainable sourcing, and clinically-backed formulations.'
    },
    {
      question: 'Do you offer personalized health assessments?',
      answer: 'Yes! Our AI-driven platform will provide personalized health assessments to create targeted supplement recommendations.'
    },
    {
      question: 'Are your products suitable for all age groups?',
      answer: 'We\'re developing diverse product lines for different age groups and health needs, all backed by scientific research.'
    },
    {
      question: 'What is your approach to sustainability?',
      answer: 'We maintain ethical sourcing practices and sustainable operations, aligning with eco-conscious values throughout our supply chain.'
    },
    {
      question: 'How can I stay updated on product launches?',
      answer: 'Join our VIP waitlist and follow our blog for the latest updates on product development and launch dates.'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'investment', label: 'Investment Inquiry' },
    { value: 'media', label: 'Media & Press' },
    { value: 'research', label: 'Research Collaboration' }
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
              <span>Premium Support Experience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Get in <span className="text-amber-300">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connect with our team of wellness experts and innovation leaders. We're here to answer your questions about our upcoming luxury wellness solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-200">
                    <div className="bg-gradient-to-r from-amber-400 to-red-500 p-3 rounded-xl text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900">{info.title}</h3>
                      <p className="text-gray-600 font-semibold">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-red-600" />
                <h3 className="font-black text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Monday - Friday</span>
                  <span className="text-gray-900 font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Saturday</span>
                  <span className="text-gray-900 font-bold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Sunday</span>
                  <span className="text-gray-900 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* VIP Waitlist */}
            <div className="bg-gradient-to-r from-amber-100 to-red-100 rounded-2xl p-6 border-2 border-amber-300">
              <Crown className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-black text-red-900 mb-2">Join VIP Waitlist</h3>
              <p className="text-sm text-red-700 mb-3 font-semibold">
                Be the first to experience our luxury wellness products when they launch.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-black py-3 px-6 rounded-xl text-sm transition-colors w-full">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-200">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 font-semibold"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 resize-vertical font-semibold"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers about Caterhealth and our upcoming products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200">
                <h3 className="font-black text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="relative">
            <Crown className="w-16 h-16 mx-auto mb-4 text-amber-300" />
            <h2 className="text-3xl font-black mb-4">Ready to Transform Wellness?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the revolution in personalized nutraceuticals and be part of India's wellness transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-400 text-gray-900 font-black py-4 px-8 rounded-2xl hover:bg-amber-300 transition-colors">
                Join VIP Waitlist
              </button>
              <button className="border-2 border-amber-400 text-amber-200 hover:bg-amber-400 hover:text-gray-900 font-black py-4 px-8 rounded-2xl transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;