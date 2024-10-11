

// const SusnetKits = () =>
// {
//   return (
//     <div className="w-full bg-gray-50 h-[400px] ">
//       <h1 className=" text-center font-bold text-4xl font-serif mt-10">Susnet Kits</h1>

//       <div className='flex justify-between mt-14 px-2 ml-10 overflow-x-hidden'>
//         <div className='col-4 px-16' >

//           <h4 className='font-bold text-center text-4xl text-cyan-600 hover:text-orange-600 font-serif mr-6 pr-6 '>Kit 1</h4>
//           <p className='text-sm  font-bold text-center mt-3 font-sans'> Ideal for Home and Small Business.</p>
//           <p className=" text-sm text-center mt-2 font-sans text-gray-500" >1 Hub + 1TRV +1 Global Thermostat
//           </p>
//           <p className="mt-2"><span className="font-bold text-lg ml-16 text-red-600 "> Price: €330</span></p>

//         </div>


//         <div className='col-4 px-16' >

//           <h4 className='font-bold text-center text-4xl text-cyan-600   hover:text-orange-600 font-serif mr-6 pr-6'>Kit 2</h4>
//           <p className='text-sm font-bold text-center  mt-3 font-sans'> Home and large Business.</p>
//           <p className=" text-sm text-center mt-2 font-sans text-gray-500" >1 Hub + 10 TRV + 2 Global Thermostat
//           </p>
//           <p className="mt-2"><span className="font-bold text-lg ml-16 text-red-600"> Price: €750</span></p>
//         </div>

//         <div className='col-4 px-16' >

//           <h4 className='font-bold text-center text-4xl text-cyan-600  hover:text-orange-600 font-serif mr-6 pr-6'>Kit 3</h4>
//           <p className='text-sm  font-bold text-center mt-3 font-sans'> Custom kit for large companies.</p>
//           <p className=" text-sm text-center mt-2 font-sans text-gray-500" >Customized for business and companies.
//           </p>
//           <p className="mt-2"><span className="font-bold text-lg text-red-600 ml-20"> Price : €900</span></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SusnetKits

const SusnetKits = () =>
{
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-300 py-16">
      <h1 className="text-center font-bold text-5xl font-serif mb-12 text-gray-800">Susnet Kits</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {/* Kit 1 */}
        <div className="relative group p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <h4 className="font-bold text-3xl text-cyan-600 group-hover:text-white transition duration-300">Home Starter Kit</h4>
            <p className="text-base font-semibold text-gray-700 group-hover:text-gray-300 mt-3">Perfect for small households and home-based businesses.</p>
            <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-2">Includes: 1 Hub, 1 TRV, and 1 Global Thermostat.</p>
            <p className="mt-4 text-lg font-bold text-red-600 group-hover:text-white">Price: €330</p>
          </div>
        </div>

        {/* Kit 2 */}
        <div className="relative group p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <h4 className="font-bold text-3xl text-cyan-600 group-hover:text-white transition duration-300">Business Pro Kit</h4>
            <p className="text-base font-semibold text-gray-700 group-hover:text-gray-300 mt-3">Designed for larger homes and mid-sized businesses.</p>
            <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-2">Includes: 1 Hub, 10 TRVs, and 2 Global Thermostats.</p>
            <p className="mt-4 text-lg font-bold text-red-600 group-hover:text-white">Price: €750</p>
          </div>
        </div>

        {/* Kit 3 */}
        <div className="relative group p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out"></div>
          <div className="relative z-10">
            <h4 className="font-bold text-3xl text-cyan-600 group-hover:text-white transition duration-300">Enterprise Custom Kit</h4>
            <p className="text-base font-semibold text-gray-700 group-hover:text-gray-300 mt-3">Tailored solutions for large enterprises and industrial settings.</p>
            <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-2">Customizable for unique business needs.</p>
            <p className="mt-4 text-lg font-bold text-red-600 group-hover:text-white">Price: Starting from €900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SusnetKits;


