import { useState } from "react";
import { X } from "lucide-react";
import TournamentForm from "./TournamentForm";

const initialFormData = {
  name: "",
  description: "",
  sport: "",
  venue: "",
  startDate: "",
  endDate: "",
  maxTeams: "",
  status: "upcoming",
};

function CreateTournamentModal({
  isOpen,
  onClose,
  onCreate,
}) {
  const [formData, setFormData] = useState(initialFormData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTournament = {
      id: Date.now(),
      ...formData,
      teams: Number(formData.maxTeams),
      date: formData.startDate,
      location: formData.venue,
    };

    onCreate(newTournament);

    setFormData(initialFormData);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl my-8 max-h-[90vh] overflow-hidden">

        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-8 py-6">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Create Tournament
            </h2>

            <p className="mt-2 text-slate-600">
              Fill in the tournament details.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">

          <TournamentForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Create Tournament"
          />

        </div>

      </div>

    </div>
  );
}

export default CreateTournamentModal;