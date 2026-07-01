import { Search } from "lucide-react";

function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
}) {
  return (
    <div className="relative w-full md:max-w-sm">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
      />

    </div>
  );
}

export default SearchInput;