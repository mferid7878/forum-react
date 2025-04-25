const Input = ({ value, type, labelName, placeHolder, handleInput }) => {
  return (
    <>
      <label htmlFor="name">{labelName}</label>
      <input
        value={value}
        type={type}
        name={labelName}
        placeholder={placeHolder}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;
