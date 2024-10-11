import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';

const PlansComponent = ({ handleSelectPlan, isSelected, setIsPlans, update }) =>
{
    const handleCardClick = (planName) =>
    {
        if (isSelected(planName))
        {
            handleSelectPlan(null); // Deselect if already selected
        } else
        {
            handleSelectPlan(planName); // Select if not already selected
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 gap-y-6 px-3  flex flex-col items-center justify-center py-8">
            <h2 className="font-bold text-xl lg:text-2xl prose text-white text-center mb-4">
                Please Select a Subscription Plan
            </h2>
            <div className="flex  flex-col md:flex-row gap-6 w-full max-w-5xl px-4">
                {[
                    {
                        name: 'Basic',
                        description: 'Entry Level Features',
                        price: '€10/Month',
                        yearlyPrice: '€100/Year (Save €20)',
                        features: ['Connect to 1 Global', 'Thermostat + up to 5 TRVs'],
                        extras: ['No Dashboard', 'No 24/7 Customer Service'],
                        isSelected: isSelected('Basic')
                    },
                    {
                        name: 'Standard',
                        description: 'Essential Features',
                        price: '€20/Month',
                        yearlyPrice: '€200/Year (Save €40)',
                        features: ['Connect to 1 Global', 'Thermostat + up to 10 TRVs', 'Hardware integration with local AI optimization', 'Dashboard'],
                        extras: ['24/7 Customer Service'],
                        isSelected: isSelected('Standard')
                    },
                    {
                        name: 'Premium',
                        description: 'Premium Features',
                        price: '€30/Month',
                        yearlyPrice: '€300/Year (Save €60)',
                        features: ['Connect to 1 Global', 'Thermostat + up to 20 TRVs', 'Full Optimization (Local/Global)', 'Dashboard'],
                        extras: ['24/7 Customer Service'],
                        isSelected: isSelected('Premium')
                    }
                ].map((plan, idx) => (
                    <div
                        key={idx}
                        className={`rounded-lg p-4 shadow-md flex-1 cursor-pointer ${plan.isSelected ? 'bg-white' : 'bg-gray-100'}`}
                        onClick={() => handleCardClick(plan.name)}
                    >
                        <div className="bg-cyan-700 w-24 mx-auto text-white text-center text-sm prose font-semibold rounded-full px-2 py-1 mb-2 inline-block">
                            {plan.name}
                        </div>
                        <h3 className="text-sm font-bold prose mb-1">{plan.description}</h3>
                        <div className="mb-2 flex flex-col justify-center items-center">
                            <p className="font-bold prose text-red-600 text-sm">{plan.price}</p>
                            <p className="text-sm prose font-bold">or</p>
                            <p className="text-xs prose font-bold text-green-600">{plan.yearlyPrice}</p>
                        </div>
                        <ul className="text-sm mb-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center mb-1 prose text-xs font-semibold">
                                    <CheckIcon className="w-4 h-4 text-green-800 mr-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                            {plan.extras.map((extra, i) => (
                                <li key={i} className="flex items-center mb-1 prose text-xs font-semibold">
                                    <XMarkIcon className="w-4 h-4 text-red-500 mr-1 flex-shrink-0" />
                                    <span>{extra}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-1 rounded-lg text-white font-bold text-xs ${plan.isSelected ? 'bg-cyan-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                            onClick={(e) =>
                            {
                                e.stopPropagation(); // Prevent the card click event from firing
                                handleCardClick(plan.name);
                            }}
                        >
                            {plan.isSelected ? 'Selected' : 'Select'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-between w-full max-w-3xl px-4">
                <button
                    onClick={() => setIsPlans(false)}
                    className="bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 hover:from-green-600 hover:via-orange-600 hover:to-blue-600 text-white font-bold rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Back
                </button>
                <button
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-teal-600 hover:via-cyan-500 hover:to-purple-600 text-white font-bold rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={update}
                >
                    Next
                </button>
            </div>
            {/* <div className="flex justify-between w-full max-w-3xl px-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold" onClick={() => setIsPlans(false)}>
                    Back
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold" onClick={update}>
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default PlansComponent;
