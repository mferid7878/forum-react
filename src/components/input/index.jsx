const Input = ({ type, labelName, placeHolder, setState }) => {
  return (
    <>
      <label htmlFor="name">{labelName}</label>
      <input
        type={type}
        name="name"
        id=""
        placeholder={placeHolder}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default Input;
