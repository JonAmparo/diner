import React from 'react';

const Button = ({
  type = 'button',
  btnStyle = 'default',
  className,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : null}
      className={['btn', `btn-${btnStyle}`, className].join(' ')}
    >
      {children ? children : `Empty Button`}
    </button>
  );
};

export default Button;
