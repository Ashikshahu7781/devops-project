function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-4xl font-extrabold text-[#556B2F]">
        {value}
      </h2>

      <p className="mt-3 text-slate-600 font-medium">
        {label}
      </p>
    </div>
  );
}

export default StatCard;