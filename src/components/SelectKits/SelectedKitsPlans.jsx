import React, { useState } from "react";
import { toast } from "react-toastify";
import QuizSection from "../Landing/QuizSection";
import SummaryComponent from "./SummaryComponent";
import PlansComponent from "./PlansComponent";
import KitsComponent from "./KitsComponent";

import { planDetails } from "../../assets/Data";
import { kitDetails } from "../../assets/Data";

const SelectKitsPlans = () =>
{
    const [currentStep, setCurrentStep] = useState('kits');
    const [selectedKit, setSelectedKit] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

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