import logo from '../../assets/images/logo_3.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Twitter from '../../assets/images/twiter.png';
import Facebook from '../../assets/images/fb.png';
import Instagram from '../../assets/images/insta.jpeg';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img className="w-20 h-20 mb-4" src={logo} alt="Company Logo" />
            <p className="text-sm opacity-75">Empowering AI Solutions for Your Future</p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-teal-400" />
              <span>+353 899832147</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-5 h-5 text-teal-400" />
              <span>info@hitoai.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-xs opacity-75">
          © {new Date().getFullYear()} HitoAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import logo from '../../assets/images/logo_3.png';
// import LinkedIn from '../../assets/images/LinkedIn.png';
// import Twitter from '../../assets/images/twiter.png';
// import Facebook from '../../assets/images/fb.png';
// import Instagram from '../../assets/images/insta.jpeg';
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          
//           {/* Logo Section */}
//           <div className="flex flex-col items-center md:items-start">
//             <img className="w-32 h-auto mb-4" src={logo} alt="Company Logo" />
//             <p className="text-center md:text-left text-sm opacity-75">Empowering AI Solutions for Your Future</p>
//           </div>

//           {/* Contact Information */}
//           <div className="flex flex-col items-center md:items-start space-y-4">
//             <div className="flex items-center space-x-2">
//               <PhoneIcon className="w-5 h-5 text-teal-400" />
//               <span>+353 899832147</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <EnvelopeIcon className="w-5 h-5 text-teal-400" />
//               <span>info@hitoai.com</span>
//             </div>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-6">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={LinkedIn} alt="LinkedIn" />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Facebook} alt="Facebook" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Instagram} alt="Instagram" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <img className="w-8 h-8 hover:opacity-75 transition duration-300" src={Twitter} alt="Twitter" />
//             </a>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-center mt-8 text-xs opacity-75">
//           © {new Date().getFullYear()} HitoAI. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
