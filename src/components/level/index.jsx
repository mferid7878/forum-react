const Level = ({ handleLevel, labelName, value, name, optionNames = [] }) => {
  return (
    <div className="level">
      <label htmlFor={name}>{labelName}</label>
      <select onChange={handleLevel} name={name} value={value}>
        <option value="" disabled>
          Select {labelName}
        </option>
        {optionNames.map((optionName, index) => (
          <option key={index} value={optionName}>
            {optionName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Level;
