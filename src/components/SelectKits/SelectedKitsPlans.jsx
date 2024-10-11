import React, { useState } from "react";
import { toast } from "react-toastify";
import QuizSection from "../Landing/QuizSection";
import SummaryComponent from "./SummaryComponent";
import PlansComponent from "./PlansComponent";
import KitsComponent from "./KitsComponent";

const SelectKitsPlans = () =>
{
    const [isPlans, setIsPlans] = useState(false);
    const [isSummary, setIsSummary] = useState(false);
    const [selectedKit, setSelectedKit] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [hasSelected, setHasSelected] = useState(false);
    const [back, setBack] = useState(false);

    // Define plan details
    const planDetails = {
        Basic: {
            name: "Basic",
            price: "€10 / month",
            features: [
                "1 IOT Hub + 1 Thermostat",
                "Connect up to 5 Devices",
                "No Data Dashboard",
                "No Customer Support"
            ]
        },
        Standard: {
            name: "Standard",
            price: "€20 / month",
            features: [
                "1 IOT Hub + 5 TRVs",
                "Connect up to 20 Devices",
                "Access Dashboard",
                "24/7 Customer Support"
            ]
        },
        Premium: {
            name: "Premium",
            price: "€30 / month",
            features: [
                "2 IOT Hubs + 10 TRVs",
                "Connect up to 30 Devices",
                "Access Dashboard",
                "24/7 Customer Support"
            ]
        }
    };

    // Define kit details
    const kitDetails = {
        1: {
            name: "Kit 1",
            description: "Ideal for Home and Small Business.",
            contents: "1 Hub + 1 TRV + 1 Global Thermostat",
            price: "€330"
        },
        2: {
            name: "Kit 2",
            description: "Home and large Business.",
            contents: "1 Hub + 10 TRVs + 2 Global Thermostats",
            price: "€750"
        },
        3: {
            name: "Kit 3",
            description: "Custom kit for large companies.",
            contents: "Customized for business and companies.",
            price: "€900"
        }
    };

    const selectKit = (kitIndex) =>
    {
        setHasSelected(!hasSelected);
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
            setIsPlans(true);
        } else
        {
            toast.error("Please select a kit first.");
        }
    };

    const goBack = () =>
    {
        setBack(true);
    };

    const update = () =>
    {
        if (selectedPlan)
        {
            setIsSummary(true);
        } else
        {
            toast.error("Please select a plan.");
        }
    };

    if (isSummary)
    {
        return <SummaryComponent selectedKit={selectedKit} selectedPlan={selectedPlan} kitDetails={kitDetails} planDetails={planDetails} />;
    }

    if (isPlans)
    {
        return <PlansComponent handleSelectPlan={handleSelectPlan} isSelected={isSelected} setIsPlans={setIsPlans} update={update} />;
    }

    if (back)
    {
        return <QuizSection />;
    }

    return <KitsComponent selectKit={selectKit} selectedKit={selectedKit} hasSelected={hasSelected} goBack={goBack} next={next} />;
};

export default SelectKitsPlans;