import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Group1 from '../../assets/images/Group1.png';
import Group2 from '../../assets/images/Group2.png';
import Group3 from '../../assets/images/Group3.png';

const SusnetComponent = () =>
{
  const cards = [
    {
      title: "Global Thermostat",
      description: "This AI-powered, Wi-Fi-based thermostat is designed to revolutionize energy management.",
      image: Group1
    },
    {
      title: "IoT Hub",
      description: "This IoT Hub is a stable, bidirectional data transmitter designed to enable network connectivity with a closed-loop schema.",
      image: Group2
    },
    {
      title: "Thermostatic Radiator Valves (TRVs)",
      description: "This Wi-Fi-enabled TRV device leverages AI to transform energy management. Equipped with state-of-the-art AI ledger.",
      image: Group3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br flex gap-12 from-teal-50 to-gray-100 py-20 px-8 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="sm:max-w-md md:max-w-[68rem] mx-auto">
        <motion.h1
          variants={cardVariants}
          className="text-4xl md:text-5xl font-extrabold text-center text-teal-600 mb-4"
        >
          Susnet Components
        </motion.h1>
        <motion.p
          variants={cardVariants}
          className="text-xl text-center text-gray-600 mb-12"
        >
          The components set works best with the subscription plan
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300"
            >
              <img className="w-full h-48 object-fit" src={card.image} alt={card.title} />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-teal-600 prose">{card.title}</h4>
                <p className="text-gray-600 mb-4 prose">{card.description}</p>
                <button className="inline-flex items-center text-teal-600 prose hover:text-teal-700 transition-colors duration-200">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SusnetComponent;