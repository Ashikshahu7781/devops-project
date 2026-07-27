function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}) {
  return (
    <div className="rounded-3xl bg-white shadow p-8 sm:p-12 lg:p-16 text-center">
      {Icon && (
        <Icon
          size={56}
          className="mx-auto text-[#556B2F] sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]"
        />
      )}

      <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl font-bold break-words">
        {title}
      </h2>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 break-words max-w-2xl mx-auto">
        {description}
      </p>

      {action && (
        <div className="mt-6 sm:mt-8">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;