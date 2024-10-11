import susnetHub from "../../assets/images/susnet_hub.png"
import susnetKit from "../../assets/images/susnet_kit2.png"
import susnetImage from "../../assets/images/susnet_image.png"

const KitsComponent = ({ selectKit, selectedKit, goBack, next }) =>
{
    const handleKitSelection = (kitIndex) =>
    {
        selectKit(selectedKit === kitIndex ? null : kitIndex);
    };

    const renderKit = (kitIndex, title, description, contents, price) => (
        <div
            onClick={() => handleKitSelection(kitIndex)}
            className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${selectedKit === kitIndex ? "bg-blue-700 scale-105 text-white" : "bg-white text-gray-900"
                } hover:scale-105`}
        >
            <h4
                className={`font-bold text-center text-xl prose ${selectedKit === kitIndex ? "text-green-600" : "text-cyan-700 hover:text-orange-500"
                    }`}
            >
                {title}
            </h4>
            <p className={`text-sm font-bold text-center mt-2 prose ${selectedKit === kitIndex ? "text-white" : "text-gray-800"
                }`}>
                {description}
            </p>

            <ul className={`text-sm mt-4 space-y-3 ${selectedKit === kitIndex ? "text-orange-500" : "text-gray-600"
                }`}>
                {contents.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {/* <div className="w-7 h-7 mr-3 rounded-full bg-cyan-500 flex items-center justify-center"> */}
                        <img
                            src={item.image}
                            alt={`Icon for ${item.text}`}
                            className="w-8 h-8 mr-3 object-cover"
                        />
                        {/* </div> */}
                        <span className={`font-semibold prose text-[0.8rem] leading-4  ${selectedKit === kitIndex ? "text-orange-500" : "text-gray-600"} `}>{item.text}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-3">
                <span className={`font-bold text-sm prose  block text-center ${selectedKit === kitIndex ? "text-white" : "text-red-600"
                    }`}>
                    Price: {price}
                </span>
            </p>
            <button
                className={`${selectedKit === kitIndex ? "hover:bg-cyan-800" : ""
                    } bg-cyan-600 hover:bg-blue-600 mt-4 w-full font-bold rounded-full px-2 py-1 prose text-sm text-white transition duration-200`}
                onClick={(e) =>
                {
                    e.stopPropagation(); // Prevent the div's onClick from firing
                    handleKitSelection(kitIndex);
                }}
            >
                {selectedKit === kitIndex ? "Deselect" : "Select"}
            </button>
        </div>
    );

    return (
        <div className="w-full bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 py-12 px-6 flex gap-y-8 lg:gap-y-6 flex-col">
            <h2 className="font-bold font-serif text-[1.7rem] leading-[2.2rem] prose text-center text-white">
                Please Select Kits
            </h2>

            <div className="flex flex-wrap justify-center lg:gap-0 gap-y-6 lg:-mx-5">
                {renderKit(1, "Kit 1", "Ideal for Homes", [
                    { text: "1 x Hub", image: susnetHub },
                    { text: "1 x Global Thermostat", image: susnetImage }
                ], "€330")}
                {renderKit(2, "Kit 2", "Homes and Small Businesses", [
                    { text: "1 x Hub", image: susnetHub },
                    { text: "4 x TRVs", image: susnetKit },
                    { text: "1 x Global Thermostat", image: susnetImage }
                ], "€750")}
                {renderKit(3, "Kit 3", "Custom for Large Companies", [
                    { text: "Customized # of Hub", image: susnetHub },
                    { text: "Customized # of TRVs", image: susnetKit },
                    { text: "Customized # of Global Thermostat", image: susnetImage }
                ], "€900")}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between lg:px-40  mt-1">
                <button
                    onClick={goBack}
                    className="bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 hover:from-green-600 hover:via-orange-600 hover:to-blue-600 text-white font-bold rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Back
                </button>
                <button
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-teal-600 hover:via-cyan-500 hover:to-purple-600 text-white font-bold rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={next}
                >
                    Next
                </button>
            </div>


        </div>
    );
};

export default KitsComponent;