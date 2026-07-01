import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Label from "./Label";

function PasswordInput({
  id,
  label,
  placeholder = "Enter password",
  value,
  onChange,
  required = false,
  dark = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="relative">

        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-xl px-4 py-3 pr-12 outline-none transition border ${
            dark
              ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#84A83A] focus:ring-2 focus:ring-[#84A83A]/30"
              : "bg-white border-stone-300 text-slate-900 placeholder:text-slate-400 focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/20"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition ${
            dark
              ? "text-white/70 hover:text-white"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

    </div>
  );
}

export default PasswordInput;