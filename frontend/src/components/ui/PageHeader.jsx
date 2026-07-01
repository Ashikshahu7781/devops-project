function PageHeader({
  title,
  description,
  action,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-slate-600">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}

export default PageHeader;