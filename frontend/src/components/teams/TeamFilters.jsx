import SearchInput from "../ui/SearchInput";

function TeamFilters({
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="mb-8">

      <SearchInput
        placeholder="Search teams..."
        value={searchTerm}
        onChange={onSearchChange}
      />

    </div>
  );
}

export default TeamFilters;