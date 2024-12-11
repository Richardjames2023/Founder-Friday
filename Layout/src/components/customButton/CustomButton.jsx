import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ width, color, borderRadius, borderRadiusColor, textColor, icon: Icon, children, onClick }) => {
  // Define Tailwind classes based on props
  const buttonClasses = `
    ${color} 
    ${borderRadius} 
    ${textColor}
    ${borderRadiusColor}
    ${width}
    border
    font-semibold 
    py-2 
    px-4 
    flex 
    items-center 
    justify-center 
    transition 
    duration-300 
    hover:opacity-80
  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
      {Icon && <Icon className="mr-2 ml-2" />} {/* Render icon if provided */}
    </button>
  );
};

// PropTypes for type checking
CustomButton.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  boderRadiusColor: PropTypes.string,
  icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

// Default props
CustomButton.defaultProps = {
  icon: null,
  onClick: () => {},
};

export default CustomButton;




//How to use it 

{/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
<CustomButton 
  color="bg-blue-500" 
  borderRadius="rounded-lg" 
  icon={FaBeer} 
  onClick={() => alert('Button Clicked!')}
>
  Click Me
</CustomButton>

<CustomButton 
  color="bg-green-500" 
  borderRadius="rounded-full" 
  icon={FaBeer} 
  onClick={() => alert('Another Button Clicked!')}
>
  Another Button
</CustomButton>
</div> */}