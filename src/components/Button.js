import React, {PropTypes} from 'react';

const Button = ({onClick, active, label, type}) => {
  switch (type) {
    case 'START':
      var buttonClass = 'success';
      break;
    case 'STOP':
      var buttonClass = 'danger';
      break;
    default:
      var buttonClass = 'primary';
      break;
  }

  if(!active) {
    return (
      <button className={'btn btn-lg btn-' + buttonClass} disabled>{label}</button>
    )
  }

  return (
    <a href="#"
       className={'btn btn-lg btn-' + buttonClass}
       onClick={e => {
      e.preventDefault();
      onClick()
    }}>
      {label}
    </a>
  )
};

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;