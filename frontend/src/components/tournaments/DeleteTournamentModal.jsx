import Button from "../ui/Button";

function DeleteTournamentModal({
  isOpen,
  tournament,
  onClose,
  onConfirm,
}) {
  if (!isOpen || !tournament) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-slate-900">
          Delete Tournament
        </h2>

        <p className="mt-4 text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold text-slate-900">
            {" "}
            {tournament.name}
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-600">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-4">

          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Delete
          </Button>

        </div>

      </div>

    </div>
  );
}

export default DeleteTournamentModal;