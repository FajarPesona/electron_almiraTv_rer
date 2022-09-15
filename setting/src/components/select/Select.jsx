import React from "react";

const Select = ({ options, className, onChange, name, id, value }) => {
  //   console.log(value);
  return (
    <div className={className}>
      <select id={id} name={name} onChange={onChange} value={value}>
        {options.map((option, i) => (
          <option key={i} value={option.val}>
            {option.lbl}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
