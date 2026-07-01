import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";
function TournamentForm({
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
        required
      />
      <TextArea
        id="description"
        label="Tournament Description"
        placeholder="Enter tournament description..."
        rows={4}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <Select
          id="sport"
          label="Sport"
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
          required
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <Input
          id="startDate"
          label="Start Date"
          type="date"
          required
        />

        <Input
          id="endDate"
          label="End Date"
          type="date"
          required
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <Input
          id="maxTeams"
          label="Maximum Teams"
          type="number"
          placeholder="16"
          required
        />

        <Select
          id="status"
          label="Status"
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