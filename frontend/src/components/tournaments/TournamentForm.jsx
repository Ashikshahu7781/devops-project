import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

function TournamentForm({
  formData,
  onChange,
  onSubmit,
  submitText = "Create Tournament",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <Input
        id="name"
        label="Tournament Name"
        placeholder="Enter tournament name"
        value={formData.name}
        onChange={onChange}
        required
      />

      <TextArea
        id="description"
        label="Tournament Description"
        placeholder="Describe your tournament..."
        rows={4}
        value={formData.description}
        onChange={onChange}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          id="sport"
          label="Sport"
          value={formData.sport}
          onChange={onChange}
          required
          options={[
            { value: "football", label: "Football" },
            { value: "cricket", label: "Cricket" },
            { value: "volleyball", label: "Volleyball" },
            { value: "basketball", label: "Basketball" },
            { value: "badminton", label: "Badminton" },
          ]}
        />

        <Input
          id="venue"
          label="Venue"
          placeholder="Enter venue"
          value={formData.venue}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="startDate"
          type="date"
          label="Start Date"
          value={formData.startDate}
          onChange={onChange}
          required
        />

        <Input
          id="endDate"
          type="date"
          label="End Date"
          value={formData.endDate}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="maxTeams"
          type="number"
          label="Maximum Teams"
          placeholder="16"
          value={formData.maxTeams}
          onChange={onChange}
          required
        />

        <Select
          id="status"
          label="Status"
          value={formData.status}
          onChange={onChange}
          required
          options={[
            { value: "upcoming", label: "Upcoming" },
            { value: "active", label: "Active" },
            { value: "completed", label: "Completed" },
          ]}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit">
          {submitText}
        </Button>
      </div>
    </form>
  );
}

export default TournamentForm;