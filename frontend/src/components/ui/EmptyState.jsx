function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}) {
  return (
    <div className="bg-white rounded-3xl shadow p-16 text-center">

      {Icon && (
        <Icon
          size={70}
          className="mx-auto text-[#556B2F]"
        />
      )}

      <h2 className="mt-6 text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}

export default EmptyState;