import {
  Trophy,
  Users,
  CalendarDays,
  BarChart3,
} from "lucide-react";

import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Trophy,
    title: "Tournament Management",
    description:
      "Create, manage and organize tournaments of any size with an intuitive workflow.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Register teams, manage coaches and players, and keep all participant information organized.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description:
      "Generate fixtures, manage venues, and organize matches efficiently.",
  },
  {
    icon: BarChart3,
    title: "Live Standings",
    description:
      "Monitor points tables, rankings and tournament progress in real time.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-[#F8F7F4]">
      <Container>

        <SectionHeading
          badge="POWERFUL FEATURES"
          title="Everything You Need to Succeed"
          description="SportsTracker provides all the tools required to organize professional tournaments from registration to championship."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title}>

                <div className="w-16 h-16 rounded-2xl bg-[#556B2F]/10 flex items-center justify-center">

                  <Icon
                    size={32}
                    className="text-[#556B2F]"
                  />

                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default Features;