import React from 'react';

const SummaryComponent = ({ selectedKit, selectedPlan, kitDetails, planDetails }) => (
    <div className="w-full bg-cyan-800 h-auto overflow-x-hidden">
        <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
            Your Selected Kits and Plans
        </h2>
        <div className="flex mt-4">
            <div className="text-white text-center  border-1 w-48 ml-[420px] h-auto shadow-xl p-4">
                <p className="text-xl font-bold ">
                    Selected Kit {kitDetails[selectedKit].name}
                </p>
                <p className="text-sm mt-4">{kitDetails[selectedKit].description}</p>
                <p className="text-sm mt-2">{kitDetails[selectedKit].contents}</p>
                <p className="mt-2">
                    <span className="font-bold text-lg text-red-600">
                        Price: {kitDetails[selectedKit].price}
                    </span>
                </p>
            </div>
            <div className="text-white text-center  border-1 w-48 ml-[100px] h-auto shadow-xl p-4 ">
                <p className="text-xl font-bold ">
                    Selected Plan {planDetails[selectedPlan].name}
                </p>
                <p className="text-sm mt-4">
                    Price: {planDetails[selectedPlan].price}
                </p>
                <ul className="text-sm mt-2">
                    {planDetails[selectedPlan].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="flex justify-center mt-8">
            <button className="bg-red-500 hover:bg-blue-500 font-bold rounded-lg px-3 py-2 mb-2 ml-10 text-white">
                Proceed
            </button>
        </div>
    </div>
);

export default SummaryComponent;