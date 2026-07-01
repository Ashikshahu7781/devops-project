function Label({
  htmlFor,
  children,
  required = false,
  dark = false,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-semibold ${
        dark ? "text-white" : "text-slate-700"
      }`}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
}

export default Label;