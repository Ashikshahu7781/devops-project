import SearchInput from "../ui/SearchInput";
import Select from "../ui/Select";

function TournamentFilters({
  searchTerm,
  onSearchChange,
  sportFilter,
  onSportChange,
  statusFilter,
  onStatusChange,
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">

      <div className="flex-1">
        <SearchInput
          placeholder="Search tournaments..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <div className="md:w-52">
        <Select
          id="sportFilter"
          value={sportFilter}
          onChange={onSportChange}
          options={[
            { value: "all", label: "All Sports" },
            { value: "football", label: "Football" },
            { value: "cricket", label: "Cricket" },
            { value: "basketball", label: "Basketball" },
            { value: "volleyball", label: "Volleyball" },
            { value: "badminton", label: "Badminton" },
          ]}
        />
      </div>

      <div className="md:w-52">
        <Select
          id="statusFilter"
          value={statusFilter}
          onChange={onStatusChange}
          options={[
            { value: "all", label: "All Status" },
            { value: "upcoming", label: "Upcoming" },
            { value: "active", label: "Active" },
            { value: "completed", label: "Completed" },
          ]}
        />
      </div>

    </div>
  );
}

export default TournamentFilters;