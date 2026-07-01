import Label from "./Label";

function Select({
  id,
  label,
  options = [],
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="space-y-2">

      {label && (
        <Label
          htmlFor={id}
          required={required}
        >
          {label}
        </Label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
      >

        <option value="">
          Select...
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

      </select>

    </div>
  );
}

export default Select;