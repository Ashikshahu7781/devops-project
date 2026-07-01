import Label from "./Label";

function Input({
  id,
  label,
  type = "text",
  placeholder,
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

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none transition focus:border-[#84A83A] focus:ring-2 focus:ring-[#84A83A]/30"
      />
    </div>
  );
}

export default Input;