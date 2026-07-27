import {
  Trophy,
  Users,
  CalendarDays,
  BarChart3,
  Medal,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const steps = [
  {
    icon: Trophy,
    title: "Create Tournament",
    description:
      "Set up tournaments with custom formats, rules and registration details.",
  },
  {
    icon: Users,
    title: "Register Teams",
    description:
      "Invite teams, manage players and coaches from one dashboard.",
  },
  {
    icon: CalendarDays,
    title: "Generate Fixtures",
    description:
      "Automatically create fixtures and schedule matches effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Track Standings",
    description:
      "View points tables, match results and tournament progress live.",
  },
  {
    icon: Medal,
    title: "Crown Champions",
    description:
      "Celebrate winners with complete statistics and tournament history.",
  },
];

function HowItWorks() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#F8F7F4]">
      <Container>
        <SectionHeading
          badge="HOW IT WORKS"
          title="Manage Your Tournament in Five Simple Steps"
          description="Everything from registration to the championship happens inside SportsTracker."
        />

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.title}
                className="relative text-center h-full"
              >
                <div className="absolute -top-3 right-4 bg-[#556B2F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#556B2F]/10 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#556B2F] sm:w-8 sm:h-8"
                  />
                </div>

                <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;