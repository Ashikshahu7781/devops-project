function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#556B2F]/10 px-4 py-2 text-sm font-medium text-[#556B2F]">
      {children}
    </span>
  );
}

export default Badge;