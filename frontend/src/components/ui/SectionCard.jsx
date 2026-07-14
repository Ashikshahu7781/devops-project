import Card from "./Card";

function SectionCard({
  title,
  description,
  children,
  className = "",
}) {
  return (

    <Card className={className}>

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (

          <p className="mt-2 text-slate-500">
            {description}
          </p>

        )}

      </div>

      {children}

    </Card>

  );
}

export default SectionCard;