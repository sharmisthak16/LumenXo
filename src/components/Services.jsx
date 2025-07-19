import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Palette, TrendingUp, Wrench, Server } from 'lucide-react';
import Navbar from '../pages/Navbar';

  const handleGetCall = () => {
    window.location.href = '/ContactUs';
  };
const AnimatedServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);


  const services = [
    {
      title: ' Administration',
      description: `Strategic integration of corporate responsibility into core operations for sustainable business practices.`,
      features: [
        "Strategic Planning",
        "Process Optimization",
        "Corporate Governance",
        "Risk Management"
      ],
      technologies: [
        { name: "Salesforce", icon: "SF", color: "bg-blue-500" },
        { name: "SAP", icon: "S", color: "bg-blue-600" },
        { name: "Oracle", icon: "O", color: "bg-red-500" },
        { name: "Microsoft", icon: "M", color: "bg-blue-600" }
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      iconComponent: Sparkles,
      accentColor: "blue"
    },
    {
      title: ' Application Development',
      description: `Robust, scalable, and intuitive applications across platforms from ideation to deployment.`,
      features: [
        "Custom Software Development",
        "Mobile Applications",
        "Web Applications",
        "API Development"
      ],
      technologies: [
        { name: "React", icon: "R", color: "bg-blue-500" },
        { name: "Node.js", icon: "N", color: "bg-green-500" },
        { name: "Python", icon: "P", color: "bg-blue-600" },
        { name: "Java", icon: "J", color: "bg-red-500" }
      ],
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      iconComponent: Code,
      accentColor: "purple"
    },
    {
      title: ' Web Design',
      description: `Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.`,
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Brand Identity",
        "User Research"
      ],
      technologies: [
        { name: "Figma", icon: "F", color: "bg-purple-600" },
        { name: "Adobe XD", icon: "A", color: "bg-pink-500" },
        { name: "Sketch", icon: "S", color: "bg-orange-500" },
        { name: "Webflow", icon: "W", color: "bg-blue-600" }
      ],
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      iconComponent: Palette,
      accentColor: "cyan"
    },
    {
      title: ' Digital Marketing',
      description: `End-to-end digital marketing solutions — SEO, social media strategy, content marketing, and analytics.`,
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "PPC Campaigns"
      ],
      technologies: [
        { name: "Google Ads", icon: "G", color: "bg-green-500" },
        { name: "Facebook", icon: "F", color: "bg-blue-600" },
        { name: "HubSpot", icon: "H", color: "bg-orange-500" },
        { name: "Mailchimp", icon: "M", color: "bg-yellow-500" }
      ],
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      iconComponent: TrendingUp,
      accentColor: "emerald"
    },
    {
      title: ' WordPress Development',
      description: `Dynamic, SEO-friendly, and fully customized WordPress websites tailored to your business goals.`,
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "E-commerce Solutions",
        "SEO Optimization"
      ],
      technologies: [
        { name: "WordPress", icon: "W", color: "bg-blue-600" },
        { name: "PHP", icon: "P", color: "bg-purple-600" },
        { name: "MySQL", icon: "M", color: "bg-blue-500" },
        { name: "WooCommerce", icon: "W", color: "bg-purple-500" }
      ],
      gradient: "from-orange-400 via-red-500 to-pink-600",
      iconComponent: Wrench,
      accentColor: "orange"
    },
    {
      title: ' Backend Development',
      description: `Secure APIs, optimized databases, and scalable server-side logic for smooth application performance.`,
      features: [
        "API Development",
        "Database Design",
        "Server Architecture",
        "Cloud Integration"
      ],
      technologies: [
        { name: "Node.js", icon: "N", color: "bg-green-500" },
        { name: "Python", icon: "P", color: "bg-blue-600" },
        { name: "MongoDB", icon: "M", color: "bg-green-600" },
        { name: "AWS", icon: "A", color: "bg-orange-500" }
      ],
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
      iconComponent: Server,
      accentColor: "slate"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      services.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const AnimatedServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleGetStarted = () => {
      window.location.href = '/BookNow';
    };

    const titleParts = service.title.split(' ');
    const emoji = titleParts[0];
    const titleText = titleParts.slice(1).join(' ');
    const IconComponent = service.iconComponent;

    return (
      <div
        className={`group relative transition-all duration-500 transform ${
          visibleCards.has(index)
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-8 opacity-0 scale-95'
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredCard(index);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredCard(null);
        }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30`} />
        
        {/* Main card */}
        <div className={`relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 text-white rounded-2xl p-5 overflow-hidden transition-all duration-500 transform ${
          isHovered ? 'scale-105 shadow-xl border-gray-600/70' : 'scale-100 shadow-lg'
        }`}>
          
          {/* Background mesh */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-overlay`} />
          </div>

          {/* Icon section */}
          <div className="relative mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 relative transition-all duration-300 shadow-md ${
              isHovered ? 'rotate-3 scale-110' : ''
            }`}>
              <IconComponent className={`w-6 h-6 text-white z-10`} />
              <div className="absolute -top-1 -right-1 text-lg">
                {emoji}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
            {titleText}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center">
              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`} />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-300 text-xs">
                  <div className={`w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full mr-2`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center">
              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`} />
              Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {service.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 flex items-center space-x-2 transition-all duration-300 hover:bg-gray-700/60"
                >
                  <div className={`w-6 h-6 ${tech.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{tech.icon}</span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleGetStarted}
            className={`w-full bg-gradient-to-r ${service.gradient} text-white py-2.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/button relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/button:translate-x-1 relative z-10" />
          </button>

          {/* Card number */}
          <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs transition-all duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}>
            {index + 1}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
          
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-2 text-sm font-medium text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                {/* <Sparkles className="w-4 h-4" /> */}
                {/* <span>What We Offer</span> */}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Our Services
            </h1>
{/*             
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              Comprehensive digital solutions crafted with precision and expertise to transform your business vision into reality.
            </p> */}
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse" />
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Services grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="text-center mt-16 pt-12 border-t border-gray-800/50">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Let's discuss your project and bring your ideas to life with our expert team.
            </p>
            <button onClick={handleGetCall} className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedServicesSection;

