import React, { useState } from "react";
import { toast } from "react-toastify";
import QuizSection from "../Landing/QuizSection";
import SummaryComponent from "./SummaryComponent";
import PlansComponent from "./PlansComponent";
import KitsComponent from "./KitsComponent";

import susnetHub from "../../assets/images/susnet_hub.png"
import susnetKit from "../../assets/images/susnet_kit2.png"
import susnetImage from "../../assets/images/susnet_image.png"

const SelectKitsPlans = () =>
{
    const [currentStep, setCurrentStep] = useState('kits');
    const [selectedKit, setSelectedKit] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Define plan details and kit details as before...
    // Define plan details
    const planDetails = {
        Basic: {
            name: 'Basic',
            description: 'Entry Level Features',
            price: '€10/Month',
            yearlyPrice: '€100/Year (Save €20)',
            features: ['Connect to 1 Global', 'Thermostat + up to 5 TRVs'],
            extras: ['No Dashboard', 'No 24/7 Customer Service']
        },
        Standard: {
            name: 'Standard',
            description: 'Essential Features',
            price: '€20/Month',
            yearlyPrice: '€200/Year (Save €40)',
            features: ['Connect to 1 Global', 'Thermostat + up to 10 TRVs', 'Hardware integration with local AI optimization', 'Dashboard', '24/7 Customer Service'],
            // extras: [''],
        },
        Premium: {
            name: 'Premium',
            description: 'Premium Features',
            price: '€30/Month',
            yearlyPrice: '€300/Year (Save €60)',
            features: ['Connect to 1 Global', 'Thermostat + up to 20 TRVs', 'Full Optimization (Local/Global)', 'Dashboard', '24/7 Customer Service'],
            // extras: [''],
        }
    };

    // Define kit details
    const kitDetails = {
        1: {
            name: "Kit 1",
            description: "Ideal for Homes",
            contents: [
                { text: "1 x Hub", image: susnetHub },
                { text: "1 x Global Thermostat", image: susnetImage }
            ],
            price: "€330"
        },
        2: {
            name: "Kit 2",
            description: "Homes and Small Businesses",
            contents: [
                { text: "1 x Hub", image: susnetHub },
                { text: "4 x TRVs", image: susnetKit },
                { text: "1 x Global Thermostat", image: susnetImage }
            ],
            price: "€750"
        },
        3: {
            name: "Kit 3",
            description: "Custom for Large Companies",
            contents: [
                { text: "Customized # of Hub", image: susnetHub },
                { text: "Customized # of TRVs", image: susnetKit },
                { text: "Customized # of Global Thermostat", image: susnetImage }
            ],
            price: "€900"
        }
    };

    const selectKit = (kitIndex) =>
    {
        setSelectedKit(kitIndex);
    };

    const handleSelectPlan = (plan) =>
    {
        setSelectedPlan(plan);
    };

    const isSelected = (plan) => selectedPlan === plan;

    const next = () =>
    {
        if (selectedKit)
        {
            setCurrentStep('plans');
        } else
        {
            toast.error("Please select a kit first.");
        }
    };

    const goBack = () =>
    {
        if (currentStep === 'kits')
        {
            // Navigate back to QuizSection
            setCurrentStep('quiz');
        } else if (currentStep === 'plans')
        {
            setCurrentStep('kits');
        } else if (currentStep === 'summary')
        {
            setCurrentStep('plans');
        }
    };

    const update = () =>
    {
        if (selectedPlan)
        {
            setCurrentStep('summary');
        } else
        {
            toast.error("Please select a plan.");
        }
    };

    switch (currentStep)
    {
        case 'quiz':
            return <QuizSection />;
        case 'kits':
            return <KitsComponent selectKit={selectKit} selectedKit={selectedKit} goBack={goBack} next={next} />;
        case 'plans':
            return <PlansComponent handleSelectPlan={handleSelectPlan} isSelected={isSelected} setIsPlans={setCurrentStep} update={update} goBack={goBack} />;
        case 'summary':
            return <SummaryComponent selectedKit={selectedKit} selectedPlan={selectedPlan} kitDetails={kitDetails} planDetails={planDetails} onBack={goBack} />;
        default:
            return null;
    }
};

export default SelectKitsPlans;