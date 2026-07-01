function Checkbox({
  id,
  label,
  checked,
  onChange,
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 cursor-pointer"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300 accent-[#556B2F]"
      />

      <span className="text-sm text-white">
        {label}
      </span>
    </label>
  );
}

export default Checkbox;