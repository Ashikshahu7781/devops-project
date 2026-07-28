const tabs = [
  "overview",
  "teams",
  "fixtures",
  "standings",
];

function TournamentTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="mt-6 sm:mt-8 overflow-x-auto border-b border-stone-200">
      <div className="flex min-w-max gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 capitalize font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-[#556B2F] text-[#556B2F]"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TournamentTabs;