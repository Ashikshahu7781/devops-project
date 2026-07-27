function StatusBadge({ status }) {
  const styles = {
    active:
      "bg-green-100 text-green-700",

    upcoming:
      "bg-blue-100 text-blue-700",

    completed:
      "bg-gray-200 text-gray-700",

    cancelled:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold ${
        styles[status] || styles.upcoming
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;