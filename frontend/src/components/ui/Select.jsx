import Label from "./Label";

function Select({
  id,
  label,
  options = [],
  value,
  onChange,
  required = false,
  dark = false,
}) {
  return (
    <div className="space-y-2">

      {label && (
        <Label
          htmlFor={id}
          required={required}
          dark={dark}
        >
          {label}
        </Label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-xl px-4 py-3 outline-none transition border ${
          dark
            ? "bg-white/10 border-white/20 text-white focus:border-[#84A83A] focus:ring-2 focus:ring-[#84A83A]/30"
            : "bg-white border-stone-300 text-slate-900 focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
        }`}
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