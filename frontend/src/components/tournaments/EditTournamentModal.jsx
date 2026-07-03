import { useState, useEffect } from "react";
import { X } from "lucide-react";
import TournamentForm from "./TournamentForm";

const initialFormData = {
  id: "",
  name: "",
  description: "",
  sport: "",
  venue: "",
  startDate: "",
  endDate: "",
  maxTeams: "",
  status: "upcoming",
};

function EditTournamentModal({
  isOpen,
  tournament,
  onClose,
  onUpdate,
}) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (tournament) {
      setFormData({
        id: tournament.id,
        name: tournament.name || "",
        description: tournament.description || "",
        sport: tournament.sport || "",
        venue: tournament.venue || "",
        startDate: tournament.start_date || "",
        endDate: tournament.end_date || "",
        maxTeams: tournament.max_teams || "",
        status: tournament.status || "upcoming",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [tournament]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTournament = {
      name: formData.name,
      description: formData.description,
      sport: formData.sport,
      venue: formData.venue,
      start_date: formData.startDate,
      end_date: formData.endDate,
      max_teams: Number(formData.maxTeams),
      status: formData.status,
    };

    await onUpdate(updatedTournament);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl my-8 max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-8 py-6">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Edit Tournament
            </h2>

            <p className="mt-2 text-slate-600">
              Update tournament information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Form */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">

          <TournamentForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Save Changes"
          />

        </div>

      </div>

    </div>
  );
}

export default EditTournamentModal;