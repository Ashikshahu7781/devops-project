import SearchInput from "../ui/SearchInput";

function TeamFilters({
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="w-full">
        <SearchInput
          placeholder="Search teams..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}

export default TeamFilters;