import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';

const PricingPlans = () =>
{
  const [isHome, setIsHome] = useState(true);

  const homePlans = [
    {
      title: 'BASIC',
      monthlyPrice: '$4.99',
      yearlyPrice: '$49.99',
      features: ['50 GB Bandwidth', '24-hour support'],
      unavailableFeatures: ['Finance Analyzing', 'Customer Management'],
      color: 'from-teal-400 to-teal-600',
      textColor: 'text-teal-600',
      featured: false,
    },
    {
      title: 'STANDARD',
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      features: ['100 GB Bandwidth', 'Finance Analyzing', '24-hour support'],
      unavailableFeatures: ['Customer Management'],
      color: 'from-cyan-400 to-cyan-600',
      textColor: 'text-cyan-600',
      featured: true,
    },
    {
      title: 'PREMIUM',
      monthlyPrice: '$14.99',
      yearlyPrice: '$149.99',
      features: ['150 GB Bandwidth', 'Finance Analyzing', '24-hour support', 'Customer Management'],
      unavailableFeatures: [],
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-600',
      featured: false,
    },
  ];

  const businessPlans = [
    {
      title: 'BASIC',
      monthlyPrice: '$4.99',
      yearlyPrice: '$49.99',
      features: ['50 GB Bandwidth', '24-hour support'],
      unavailableFeatures: ['Finance Analyzing', 'Customer Management'],
      color: 'from-teal-400 to-teal-600',
      textColor: 'text-teal-600',
      featured: false,
    },
    {
      title: 'STANDARD',
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      features: ['100 GB Bandwidth', 'Finance Analyzing', '24-hour support'],
      unavailableFeatures: ['Customer Management'],
      color: 'from-cyan-400 to-cyan-600',
      textColor: 'text-cyan-600',
      featured: true,
    },
    {
      title: 'PREMIUM',
      monthlyPrice: '$14.99',
      yearlyPrice: '$149.99',
      features: ['150 GB Bandwidth', 'Finance Analyzing', '24-hour support', 'Customer Management'],
      unavailableFeatures: [],
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-600',
      featured: false,
    },
  ];

  const plans = isHome ? homePlans : businessPlans;

  const handleToggle = () =>
  {
    setIsHome(!isHome);
  };

  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 -z-10"
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0694A2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M0 0 Q 50 50 100 0 Q 50 50 0 100 Z" fill="url(#bg-gradient)" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          Choose Your Perfect Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-lg font-medium text-gray-700 max-w-2xl mx-auto"
        >
          Tailored solutions for home and business. Flexible, powerful, and designed to grow with you.
        </motion.p>

        {/* Toggle for Home/Business */}
        <div className="flex justify-center items-center mb-16">
          <span className={`mr-4 text-lg ${isHome ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>Home</span>
          <motion.div
            onClick={handleToggle}
            className={`relative inline-flex items-center h-8 w-16 rounded-full cursor-pointer ${isHome ? 'bg-blue-600' : 'bg-cyan-600'
              }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              layout
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30
              }}
              className="inline-block w-6 h-6 bg-white rounded-full shadow-lg"
              animate={{
                translateX: isHome ? '10%' : '150%',
                rotate: isHome ? 0 : 180,
              }}
            />
          </motion.div>
          <span className={`ml-4 text-lg ${!isHome ? 'font-semibold text-cyan-600' : 'text-gray-600'}`}>Business</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
          <AnimatePresence>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl ${plan.featured ? 'border-4 border-cyan-400' : ''
                  }`}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-cyan-400 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm flex items-center">
                    <Zap className="w-4 h-4 mr-1" /> Most Popular
                  </div>
                )}
                {/* Plan Label */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${plan.color}`} />
                <h3 className={`text-2xl font-bold mb-4 ${plan.textColor}`}>
                  <span className="relative">
                    {plan.title}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-1 bg-current"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </span>
                </h3>

                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {isHome ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 text-lg"> / {isHome ? 'month' : 'year'}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-sm text-gray-700 flex items-center"
                    >
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </motion.li>
                  ))}
                  {plan.unavailableFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (plan.features.length + i) * 0.1 }}
                      className="text-sm text-gray-400 flex items-center"
                    >
                      <X className="w-5 h-5 mr-2 text-red-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Buy Now Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 text-white rounded-lg transition duration-300 bg-gradient-to-r ${plan.color} hover:shadow-lg`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
