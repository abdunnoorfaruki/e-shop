/* eslint-disable react/prop-types */

const Select = ({
  options,
  name,
  value,
  onChange,
  fullWidth,
  label,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-[#d0d2d6]  ">
            {" "}
            {label}{" "}
          </label>
        )}
        <select
          className={`px-4 py-2  bg-trnasparent outline-none border rounded-sm text-slate-600 cursor-pointer ${
            fullWidth && "w-full"
          }`}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;