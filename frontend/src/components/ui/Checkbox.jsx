function Checkbox({
  id,
  label,
  checked,
  onChange,
  dark = false,
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 text-sm ${
        dark ? "text-white" : "text-slate-700"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-[#556B2F]"
      />

      {label}
    </label>
  );
}

export default Checkbox;