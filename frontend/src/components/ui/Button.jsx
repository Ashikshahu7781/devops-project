function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#556B2F] text-white hover:bg-[#445624] shadow-md",

    secondary:
      "border-2 border-[#556B2F] text-[#556B2F] bg-white hover:bg-[#556B2F] hover:text-white",

    ghost:
      "text-[#556B2F] hover:bg-[#556B2F]/10",
  };

  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;