export const Select = ({ name, text, id, value, options, onChange }) => {
  return (
    <div>
      <label className="body" htmlFor={id}>
        {text}
      </label>
      <select
        name={name}
        id={id}
        className="input"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
