import Label from "./Label";

function TextArea({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
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

      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-stone-300
          bg-white
          px-4
          py-3
          outline-none
          resize-none
          transition
          focus:border-[#556B2F]
          focus:ring-2
          focus:ring-[#556B2F]/20
        "
      />

    </div>
  );
}

export default TextArea;