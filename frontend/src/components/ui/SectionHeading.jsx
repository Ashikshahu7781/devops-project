function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">

      {badge && (
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#556B2F]">
          {badge}
        </p>
      )}

      <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;