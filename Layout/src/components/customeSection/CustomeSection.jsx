
import React from 'react';
import PropTypes from 'prop-types';

const CustomSection = ({ children, className, id, backgroundImage, backgroundSize, height }) => {
  return (
    <section
      id={id}
      className={`py-8 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
        backgroundSize: backgroundSize || 'cover', // Default to 'cover' if no backgroundSize provided
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: height || 'auto', // Apply height if provided, otherwise default to 'auto'
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {children}
      </div>
    </section>
  );
};

// PropTypes for type checking
CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  backgroundImage: PropTypes.string, // New prop for background image
  backgroundSize: PropTypes.string, // New prop for background image
  height: PropTypes.string, // New prop for height
};

// Default props
CustomSection.defaultProps = {
  className: '',
  id: '',
  backgroundImage: '', // Default to no background image
  height: '', // Default to auto height if not provided
};

export default CustomSection;

