import { useEffect, useState } from "react";
import { X } from "lucide-react";

import TeamForm from "./TeamForm";
import { getTournaments } from "../../api/tournament";

const initialFormData = {
  id: "",
  tournament_id: "",
  name: "",
  coach: "",
  captain: "",
  contact_email: "",
  contact_phone: "",
  logo: "",
};

function EditTeamModal({
  isOpen,
  team,
  onClose,
  onUpdate,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchTournaments();
    }
  }, [isOpen]);

  useEffect(() => {
    if (team) {
      setFormData({
        id: team.id,
        tournament_id: team.tournament_id,
        name: team.name || "",
        coach: team.coach || "",
        captain: team.captain || "",
        contact_email: team.contact_email || "",
        contact_phone: team.contact_phone || "",
        logo: team.logo || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [team]);

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

    const updatedTeam = {
      tournament_id: formData.tournament_id,
      name: formData.name,
      coach: formData.coach,
      captain: formData.captain,
      contact_email: formData.contact_email,
      contact_phone: formData.contact_phone,
      logo: formData.logo,
    };

    await onUpdate(updatedTeam);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl my-8 max-h-[90vh] overflow-hidden">

        {/* Header */}

        <div className="sticky top-0 flex items-center justify-between border-b border-stone-200 bg-white px-8 py-6">

          <div>
            <h2 className="text-3xl font-bold">
              Edit Team
            </h2>

            <p className="mt-2 text-slate-600">
              Update team information.
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

        <div className="p-8 overflow-y-auto">

          <TeamForm
            formData={formData}
            tournaments={tournaments}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Save Changes"
          />

        </div>

      </div>

    </div>
  );
}

export default EditTeamModal;