function DashboardStatCard({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#556B2F]/10 flex items-center justify-center">

          <Icon
            size={28}
            className="text-[#556B2F]"
          />

        </div>

      </div>

    </div>
  );
}

export default DashboardStatCard;