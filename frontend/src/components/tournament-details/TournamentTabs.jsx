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
    <div className="flex gap-4 mt-8 border-b border-stone-200">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-4 capitalize font-medium transition ${
            activeTab === tab
              ? "border-b-2 border-[#556B2F] text-[#556B2F]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}

export default TournamentTabs;