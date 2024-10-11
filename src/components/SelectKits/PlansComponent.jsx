// PlansComponent.jsx
import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';

const PlansComponent = ({ handleSelectPlan, isSelected, setIsPlans, update }) => (
    <div className="w-full bg-cyan-800 h-auto overflow-x-hidden">
        <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
            Please Select Plans
        </h2>
        <div className="grid lg:grid-cols-3 gap-0 mt-10 mr-10">
            {/* Basic Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
                <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Basic") ? "bg-gray-200" : "bg-white"}`}>
                    {/* Basic plan content */}
                    <div className="px-1 py-3">
                        <h1 className="text-4xl font-semibold px-4 font-serif ml-3">Basic</h1>
                        <p className="text-sm ml-10 mt-2 text-gray-400">Entry Level Features</p>
                        <span className="text-black text-4xl font-bold ml-10 pt-2">€10 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                    </div>
                    <div className="px-5 py-3">
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">1 IOT Hub +1 Thermostat</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">Connect Upto 5 Devices</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <XMarkIcon className="w-6 h-6 text-red-500" />
                                <p className="text-sm text-grey-600">No Data Dashboard</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <XMarkIcon className="w-6 h-6 text-red-500" />
                                <p className="text-sm text-grey-600">No Customer Support</p>
                            </li>
                        </ul>
                        <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Basic")}>
                            Select
                        </button>
                    </div>
                </div>
            </div>

            {/* Standard Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
                <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Standard") ? "bg-gray-200" : "bg-white"}`}>
                    {/* Standard plan content */}
                    <button className="bg-cyan-800 w-full px-2 py-1 text-sm rounded-2xl text-white">Most Popular</button>
                    <div className="px-1 py-3">
                        <h1 className="text-4xl font-semibold px-4 font-serif ml-4">Standard</h1>
                        <span className="text-black ml-10 text-4xl font-bold">€20 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                    </div>
                    <div className="px-5 py-3">
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">1 IOT Hub +5 TRVs</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">Connect Upto 20 Devices</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">Access Dashboard</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">24/7 Customer Support</p>
                            </li>
                        </ul>

                        <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Standard")}>
                            Select
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
                <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Premium") ? "bg-gray-200" : "bg-white"}`}>
                    {/* Premium plan content */}
                    <div className="px-1 py-3">
                        <h1 className="text-4xl font-semibold px-4 font-serif ml-2">Premium</h1>
                        <span className="text-black font-bold text-4xl ml-10">€30 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                    </div>
                    <div className="px-5 py-3">
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">2 IOT Hub +10 TRVs</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">Connect Upto 30 Devices</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <XMarkIcon className="w-6 h-6 text-red-500" />
                                <p className="text-sm text-grey-600">No Data Dashboard</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                <p className="text-sm text-grey-600">24/7 Customer Support</p>
                            </li>
                        </ul>
                        <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Premium")}>
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex ml-[550px] mt-8">
            <button className="bg-red-500 hover:bg-blue-500 mt-3 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => setIsPlans(false)}>Back</button>
            <button className="bg-red-500 hover:bg-blue-500 mt-3 ml-10 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={update}>Next</button>
        </div>
    </div>
);

export default PlansComponent;