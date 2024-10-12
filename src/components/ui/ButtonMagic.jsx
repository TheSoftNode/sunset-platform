

// import React from "react";

// const ButtonMagic = ({ title, icon, position, handleClick, otherClasses, animated = true }) =>
// {
//     return (
//         <button
//             className={`
//         relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-full
//         shadow-lg transition-all duration-300 ease-in-out
//         focus:outline-none focus:ring-2 focus:ring-offset-2
//         ${animated ? 'focus:ring-blue-500' : 'focus:ring-orange-500'}
//         ${otherClasses}
//       `}
//             onClick={handleClick}
//         >
//             {animated && (
//                 <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600" />
//             )}
//             {animated && (
//                 <span className="absolute inset-0 w-full h-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-500" />
//             )}
//             <span className={`
//         relative flex items-center justify-center w-full h-full
//         text-sm font-semibold tracking-wider uppercase
//         ${animated ? 'text-white' : ''}
//       `}>
//                 {position === "left" && icon}
//                 {title}
//                 {position === "right" && icon}
//             </span>
//         </button>
//     );
// };

// export default ButtonMagic;

import React from "react";

const ButtonMagic = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    animated = true,
    gradientFrom,
    gradientTo,
    gradientHoverFrom,
    gradientHoverTo
}) =>
{
    const gradientClasses = animated
        ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} ${gradientHoverFrom} ${gradientHoverTo}`
        : '';

    return (
        <button
            className={`
        relative inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-3 overflow-hidden rounded-full
        shadow-lg transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${animated ? 'focus:ring-blue-500' : 'focus:ring-orange-500'}
        ${gradientClasses}
        ${otherClasses}
      `}
            onClick={handleClick}
        >
            {animated && (
                <span className="absolute inset-0 w-full h-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            )}
            <span className={`
        relative flex items-center justify-center w-full h-full text-xs
        md:text-sm prose text-white font-semibold tracking-wider uppercase 
      `}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default ButtonMagic;