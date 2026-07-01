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
      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
        styles[status] || styles.upcoming
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;