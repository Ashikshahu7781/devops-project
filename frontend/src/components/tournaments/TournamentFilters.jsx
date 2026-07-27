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
    <div className="mb-6 sm:mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
      <div className="w-full lg:flex-1">
        <SearchInput
          placeholder="Search tournaments..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <div className="w-full sm:w-64 lg:w-52">
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

      <div className="w-full sm:w-64 lg:w-52">
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