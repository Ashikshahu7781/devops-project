import Container from "../ui/Container";
import StatCard from "../ui/StatCard";

const stats = [
  {
    value: "500+",
    label: "Tournaments",
  },
  {
    value: "10K+",
    label: "Teams",
  },
  {
    value: "25K+",
    label: "Matches",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

function Statistics() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;