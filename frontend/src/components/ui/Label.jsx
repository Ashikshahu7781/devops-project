function Label({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-semibold text-white"
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1">*</span>
      )}
    </label>
  );
}

export default Label;