import "./major.css";
const Major = ({ labelName, name, majorNames = [] }) => {
  return (
    <div className="major">
      <label htmlFor={name}>{labelName}</label>
      {majorNames.map((majorName) => (
        <div key={majorName}>
          <label htmlFor={`${name}-${majorName}`}>{majorName}</label>
          <input
            type="radio"
            id={`${name}-${majorName}`}
            name={name}
            value={majorName}
          />
        </div>
      ))}
    </div>
  );
};

export default Major;
