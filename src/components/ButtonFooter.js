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
    <a
      className={'card-footer-item ' + className}
      aria-label={label}
      role="button"
      tabIndex={0}
      onClick={onClick}
      data-index={dataIndex}
      data-id={dataId}
    >
      <i className={iconClasses} />
      <span>{label}</span>
    </a>
  );
};

export default ButtonFooter;
