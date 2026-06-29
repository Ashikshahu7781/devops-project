import {
  Trophy,
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";

import { featuredFootball } from "../../assets/images";

import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

function FeaturedTournament() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="FEATURED TOURNAMENT"
          title="Experience the Next Championship"
          description="Explore one of the most exciting tournaments currently hosted on SportsTracker."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Tournament Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={featuredFootball}
              alt="Kerala Premier League"
              className="w-full h-[520px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Tournament Details */}
          <Card className="h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Registration Open
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                Kerala Premier League 2026
              </h3>

              <p className="mt-6 text-slate-600 leading-8">
                Kerala Premier League brings together the state's top football
                clubs in an exciting season of competition. SportsTracker
                simplifies tournament organization with registrations, fixtures,
                standings, and live match management—all from one platform.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#556B2F]" />
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-semibold">Kochi, Kerala</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-[#556B2F]" />
                  <div>
                    <p className="text-sm text-slate-500">Teams</p>
                    <p className="font-semibold">16 Clubs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-[#556B2F]" />
                  <div>
                    <p className="text-sm text-slate-500">Starts</p>
                    <p className="font-semibold">15 August 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Trophy className="text-[#556B2F]" />
                  <div>
                    <p className="text-sm text-slate-500">Prize Pool</p>
                    <p className="font-semibold">₹10 Lakhs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button>
                View Tournament
                <ArrowRight size={18} />
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedTournament;