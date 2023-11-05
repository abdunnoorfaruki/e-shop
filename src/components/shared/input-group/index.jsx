/* eslint-disable react/prop-types */

const InputGroup = ({
    lable,
    name,
    type,
    placeholder,
    onChange,
    onClick,
    onBlur,
    value,
    inputRef,
    isActive,
    hidden,
    error,
    hFull,
    bdNone
  }) => {
    return (
      <>
        <div className={`flex flex-col w-full ${hFull && "h-full"} `}>
          {lable && (
            <label htmlFor={name} className="text-[#d0d2d6]">
              {lable}
            </label>
          )}
          <input
            ref={isActive ? inputRef : null}
            className={`px-3 py-2 outline-none border bg-transparent rounded-md text-[#d0d2d6]  overflow-hidden ${
              hidden && "hidden"
            } ${hFull && "h-full"} ${bdNone ? "border-none":"border-slate-700 focus:border-indigo-500"} `}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
            onBlur={onBlur}
            value={value}
            min={0}
            id={name}
          />
        {error && <p className="text-xs text-[#CA0F0F] font-semibold ">{error}</p>}
        </div>
      </>
    );
  };
  
  export default InputGroup;