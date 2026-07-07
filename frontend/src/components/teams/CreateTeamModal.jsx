import { useEffect, useState } from "react";
import { X } from "lucide-react";

import TeamForm from "./TeamForm";
import { getTournaments } from "../../api/tournament";

const initialFormData = {
  tournament_id: "",
  name: "",
  coach: "",
  captain: "",
  contact_email: "",
  contact_phone: "",
  logo: "",
};

function CreateTeamModal({
  isOpen,
  onClose,
  onCreate,
  hideTournament = false,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchTournaments();
    }
  }, [isOpen]);

  const fetchTournaments = async () => {
    try {
      const response = await getTournaments();
      setTournaments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]:
        id === "tournament_id"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onCreate(formData);

    setFormData(initialFormData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl my-8 max-h-[90vh] overflow-hidden">

        {/* Header */}

        <div className="sticky top-0 flex items-center justify-between border-b border-stone-200 bg-white px-8 py-6">

          <div>
            <h2 className="text-3xl font-bold">
              Create Team
            </h2>

            <p className="mt-2 text-slate-600">
              Add a new team to a tournament.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100"
          >
            <X size={24} />
          </button>

        </div>

        {/* Form */}

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">

        <TeamForm
            formData={formData}
            tournaments={tournaments}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Create Team"
            hideTournament={hideTournament}
        />

        </div>

      </div>

    </div>
  );
}

export default CreateTeamModal;