import SearchInput from "../ui/SearchInput";
import Select from "../ui/Select";

function TournamentFilters() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 items-end">

      <SearchInput
        placeholder="Search tournaments..."
      />

      <Select
        label="Sport"
        options={[
          { value: "football", label: "Football" },
          { value: "cricket", label: "Cricket" },
          { value: "volleyball", label: "Volleyball" },
          { value: "basketball", label: "Basketball" },
        ]}
      />

      <Select
        label="Status"
        options={[
          { value: "active", label: "Active" },
          { value: "upcoming", label: "Upcoming" },
          { value: "completed", label: "Completed" },
        ]}
      />

    </div>
  );
}

export default TournamentFilters;