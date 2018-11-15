import React from 'react';

const ButtonFooter = ({
  label,
  className,
  iconClasses,
  onClick,
  dataIndex,
  dataId
}) => {
  return (
    <button
      className={'link card-footer-item ' + className}
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      data-index={dataIndex}
      data-id={dataId}
    >
      <i className={iconClasses} />
      <span>{label}</span>
    </button>
  );
};

export default ButtonFooter;
