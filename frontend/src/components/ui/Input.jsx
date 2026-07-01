import Label from "./Label";

function Input({
  id,
  label,
  type = "text",
  placeholder = "",
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

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-xl px-4 py-3 outline-none transition border ${
          dark
            ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#84A83A] focus:ring-2 focus:ring-[#84A83A]/30"
            : "bg-white border-stone-300 text-slate-900 placeholder:text-slate-400 focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
        }`}
      />

    </div>
  );
}

export default Input;