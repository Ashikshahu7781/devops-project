import { X } from "lucide-react";
import TournamentForm from "./TournamentForm";

function EditTournamentModal({
  isOpen,
  onClose,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-stone-200 px-8 py-6">

          <div>
            <h2 className="text-3xl font-bold">
              Edit Tournament
            </h2>

            <p className="mt-2 text-slate-600">
              Update tournament information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100"
          >
            <X size={24} />
          </button>

        </div>

        <div className="p-8">

          <TournamentForm
            onSubmit={onSubmit}
            submitText="Save Changes"
          />

        </div>

      </div>

    </div>
  );
}

export default EditTournamentModal;