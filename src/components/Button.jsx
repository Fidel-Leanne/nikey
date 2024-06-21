import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor , fullWidth}) => {
  const buttonStyles = `${backgroundColor} ${textColor} ${borderColor}`;
  return (
    <button
      className={`flex justify-center items-center rounded-full ${fullWidth &&'w-full'} px-7 py-4 gap-2 h-12 text-lg font-montserrat border leading-none ${buttonStyles}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Button.defaultProps = {
  iconURL: null,
  backgroundColor: 'bg-red-900',
  textColor: 'text-white',
  borderColor: '',
};

export default Button;
