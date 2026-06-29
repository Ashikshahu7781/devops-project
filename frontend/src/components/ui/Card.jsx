function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border
        border-stone-200
        p-8
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;