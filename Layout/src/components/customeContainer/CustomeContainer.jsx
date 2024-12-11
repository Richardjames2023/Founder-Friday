import React from 'react';
import PropTypes from 'prop-types';

const CustomContainer = ({ children, className }) => {
  return (
    <div className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

// PropTypes for type checking
CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Default props
CustomContainer.defaultProps = {
  className: '',
};

export default CustomContainer;


//How to use this component
{/* <CustomContainer className="bg-gray-100 py-6">
<h1 className="text-3xl font-bold text-center">Welcome to My App</h1>
<p className="mt-4 text-center">
  This is a responsive container that can be reused across components.
</p>
</CustomContainer> */}