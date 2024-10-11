// import React from 'react';
// import Group1 from '../../assets/images/Group1.png';
// import Group2 from '../../assets/images/Group2.png';
// import Group3 from '../../assets/images/Group3.png';

// const SusnetComponent = () =>
// {
//   return (
//     <div className="relative bg-gray-50 py-16 px-12">
//       <h1 className="mt-4 font-bold text-4xl text-center text-teal-600">Susnet Components</h1>
//       <p className="text-lg font-semibold text-center mt-2 text-gray-600">
//         The components set works best with the subscription plan
//       </p>

//       <div className="flex mt-8 flex-wrap px-4 gap-6 justify-center items-center">
//         {/* <div className="flex justify-center mt-8 px-4 space-x-6 overflow-hidden"> */}
//         {/* Card 1 */}
//         <div className="flex-shrink-0 w-[350px] transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-xl rounded-lg bg-white border border-gray-200 p-6">
//           <img className="w-full h-40 object-cover rounded-t-lg" src={Group1} alt="Global Thermostat" />
//           <h4 className="font-bold text-lg text-center mt-3 text-teal-600">Global Thermostat</h4>
//           <p className="text-sm text-center text-gray-700 mt-2">
//             This AI-powered, Wi-Fi-based thermostat is designed to revolutionize energy management.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="flex-shrink-0 w-[350px] transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-xl rounded-lg bg-white border border-gray-200 p-6">
//           <img className="w-full h-40 object-cover rounded-t-lg" src={Group2} alt="IoT Hub" />
//           <h4 className="font-bold text-lg text-center mt-3 text-teal-600">IoT Hub</h4>
//           <p className="text-sm text-center text-gray-700 mt-2">
//             This IoT Hub is a stable, bidirectional data transmitter designed to enable network connectivity with a closed-loop schema.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="flex-shrink-0 w-[350px] transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-xl rounded-lg bg-white border border-gray-200 p-6">
//           <img className="w-full h-40 object-cover rounded-t-lg" src={Group3} alt="Thermostatic Radiator Valves" />
//           <h4 className="font-bold text-lg text-center mt-3 text-teal-600">Thermostatic Radiator Valves (TRVs)</h4>
//           <p className="text-sm text-center text-gray-700 mt-2">
//             This Wi-Fi-enabled TRV device leverages AI to transform energy management. Equipped with state-of-the-art AI ledger.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SusnetComponent;


// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Group1 from '../../assets/images/Group1.png';
// import Group2 from '../../assets/images/Group2.png';
// import Group3 from '../../assets/images/Group3.png';

// const SusnetComponent = () =>
// {
//   const cards = [
//     {
//       title: "Global Thermostat",
//       description: "This AI-powered, Wi-Fi-based thermostat is designed to revolutionize energy management.",
//       image: Group1
//     },
//     {
//       title: "IoT Hub",
//       description: "This IoT Hub is a stable, bidirectional data transmitter designed to enable network connectivity with a closed-loop schema.",
//       image: Group2
//     },
//     {
//       title: "Thermostatic Radiator Valves (TRVs)",
//       description: "This Wi-Fi-enabled TRV device leverages AI to transform energy management. Equipped with state-of-the-art AI ledger.",
//       image: Group3
//     }
//   ];

//   return (
//     <div className="relative bg-gradient-to-br from-teal-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-extrabold text-center text-teal-600 mb-4"
//         >
//           Susnet Components
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-xl text-center text-gray-600 mb-12"
//         >
//           The components set works best with the subscription plan
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
//               <div className="p-6">
//                 <h4 className="font-bold text-xl mb-2 text-teal-600">{card.title}</h4>
//                 <p className="text-gray-600 mb-4">{card.description}</p>
//                 <button className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SusnetComponent;


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
      className="relative bg-gradient-to-br from-teal-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
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