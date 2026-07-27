import { Search } from "lucide-react";

function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
}) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <Search
        size={18}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-stone-300
          bg-white
          py-2.5
          sm:py-3
          pl-10
          sm:pl-11
          pr-4
          text-sm
          sm:text-base
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition
          focus:border-[#556B2F]
          focus:ring-2
          focus:ring-[#556B2F]/20
        "
      />
    </div>
  );
}

export default SearchInput;