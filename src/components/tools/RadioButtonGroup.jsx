import React, { useState } from "react";
import Styles from '../../styles/Tools.module.css';

function RadioButtonGroup({ options, name, onChange, value }) {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={Styles.radioButtonGroup}>
      {options.map((option) => (
        <label key={option.value} className={Styles.radioButtonLabel}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleOptionChange}
            className={Styles.radioButtonInput}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioButtonGroup;