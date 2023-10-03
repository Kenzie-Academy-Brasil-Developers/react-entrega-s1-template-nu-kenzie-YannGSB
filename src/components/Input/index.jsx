export const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  small,
  SmallText,
}) => {
  return (
    <div>
      <label className="body" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {small ? <small className="example">{SmallText}</small> : null}
    </div>
  );
};
