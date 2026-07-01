import Button from "../ui/Button";

function DeleteTournamentModal({
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-slate-900">
          Delete Tournament
        </h2>

        <p className="mt-4 text-slate-600">
          Are you sure you want to delete this tournament?
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
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>

        </div>

      </div>

    </div>
  );
}

export default DeleteTournamentModal;