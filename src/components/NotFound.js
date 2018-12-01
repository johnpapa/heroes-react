import React from 'react';

const NotFound = () => (
  <div className="content-container">
    <div className="content-title-group not-found">
      <i className="fas fa-exclamation-triangle" aria-hidden="true" />
      &nbsp;
      <span className="title">{`These aren't the bits you're looking for`}</span>
    </div>
  </div>
);

export default NotFound;
