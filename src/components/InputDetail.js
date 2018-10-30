import React from 'react';

const InputDetail = ({ name, value, placeholder, onChange, readOnly }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {name}
    </label>
    <input
      name={name}
      className="input"
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      readOnly={!!readOnly}
      onChange={onChange}
    />
  </div>
);

export default InputDetail;
