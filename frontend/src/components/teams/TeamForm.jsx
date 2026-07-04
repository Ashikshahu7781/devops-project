import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

function TeamForm({
  formData,
  tournaments,
  onChange,
  onSubmit,
  submitText = "Create Team",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <Select
        id="tournament_id"
        label="Tournament"
        value={formData.tournament_id}
        onChange={onChange}
        required
        options={[
          { value: "", label: "Select Tournament" },
          ...tournaments.map((tournament) => ({
            value: tournament.id,
            label: tournament.name,
          })),
        ]}
      />

      <Input
        id="name"
        label="Team Name"
        placeholder="Enter team name"
        value={formData.name}
        onChange={onChange}
        required
      />

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="coach"
          label="Coach"
          placeholder="Coach name"
          value={formData.coach}
          onChange={onChange}
          required
        />

        <Input
          id="captain"
          label="Captain"
          placeholder="Captain name"
          value={formData.captain}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="contact_email"
          type="email"
          label="Contact Email"
          placeholder="team@email.com"
          value={formData.contact_email}
          onChange={onChange}
          required
        />

        <Input
          id="contact_phone"
          label="Contact Phone"
          placeholder="9876543210"
          value={formData.contact_phone}
          onChange={onChange}
          required
        />
      </div>

      <Input
        id="logo"
        label="Logo URL (Optional)"
        placeholder="https://example.com/logo.png"
        value={formData.logo}
        onChange={onChange}
      />

      <div className="flex justify-end pt-4">
        <Button type="submit">
          {submitText}
        </Button>
      </div>
    </form>
  );
}

export default TeamForm;