const Hobbies = ({ value, labelName, name, hobbieNames = [] }) => {
  return (
    <div className="hobbies">
      <label htmlFor={name}>{labelName}</label>
      {hobbieNames.map((hobbieName) => (
        <div key={hobbieName}>
          <label htmlFor={`${name}-${hobbieName}`}>{hobbieName}</label>
          <input
            type="checkbox"
            id={`${name}-${hobbieName}`}
            name={`${name}`}
            value={value}
          />
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
