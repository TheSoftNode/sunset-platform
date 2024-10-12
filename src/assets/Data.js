import susnetHub from "./images/susnet_hub.png"
import susnetKit from "./images/susnet_kit2.png"
import susnetImage from "./images/susnet_image.png"


export const Data = [
    {
        question: "What is the size of your home or office space that requires energy management?",
        option1: "A) Small household (1-2 rooms)",
        option2: "B) Medium-sized home or office (3-5 rooms)",
        option3: "C) Large home or office (6+ rooms)",
        option4: "D) Multiple buildings or zones",

    },
    {
        question: "How many heating zones or rooms do you want to control individually?",
        option1: "A) 1-2 zones",
        option2: "B) 3-5 zones",
        option3: "C) 6-10 zones",
        option4: "D) More than 10 zones",
    },
    {
        question: "How important is real-time access to energy usage data and control for you?",
        option1: "A) Not important ",
        option2: "B) Somewhat important ",
        option3: "C) Very important ",
        option4: "D) Not applicable",

    },

    {
        question: "Would you like 24/7 customer support to assist with your energy system management?",
        option1: "A) No, I don’t need customer support",
        option2: "B) Yes, 24/7 customer support ",
        option3: "",
        option4: "",

    },
    {
        question: "How much optimization do you need for your energy system local, global, or both?",
        option1: "A) No optimization ",
        option2: "B) Local optimization ",
        option3: "C) Both local and global optimization ",
        option4: "D) None above",
    },
];


export const planDetails = {
    Basic: {
        name: 'Basic',
        description: 'Entry Level Features',
        price: '€10/Month',
        yearlyPrice: '€100/Year (Save €20)',
        features: ['Connect to 1 Global Thermostat + up to 5 TRVs'],
        extras: ['No Dashboard', 'No 24/7 Customer Service']
    },
    Standard: {
        name: 'Standard',
        description: 'Essential Features',
        price: '€20/Month',
        yearlyPrice: '€200/Year (Save €40)',
        features: ['Connect to 1 Global Thermostat + up to 10 TRVs', 'Hardware integration with local AI optimization', 'Dashboard', '24/7 Customer Service'],
        // extras: [''],
    },
    Premium: {
        name: 'Premium',
        description: 'Premium Features',
        price: '€30/Month',
        yearlyPrice: '€300/Year (Save €60)',
        features: ['Connect to 1 Global Thermostat + up to 20 TRVs', 'Full Optimization (Local/Global)', 'Dashboard', '24/7 Customer Service'],
        // extras: [''],
    }
};

// Define kit details
export const kitDetails = {
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