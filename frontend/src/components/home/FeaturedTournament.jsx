import { useEffect, useState } from "react";
import {
  Trophy,
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import featuredTournaments from "../../data/featuredTournaments";

import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

function FeaturedTournament() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);

  const tournament = featuredTournaments[currentIndex];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {

      setFade(false);

      setTimeout(() => {

        setCurrentIndex((prev) =>
          (prev + 1) % featuredTournaments.length
        );

        setFade(true);

      }, 300);

    }, 5000);

    return () => clearInterval(interval);

  }, [paused]);

  const handleViewTournament = () => {

    const token = localStorage.getItem("access_token");

    navigate(
      token
        ? "/tournaments"
        : "/login"
    );

  };

  return (

    <section className="py-24 bg-white">

      <Container>

        <SectionHeading
          badge="FEATURED TOURNAMENT"
          title="Discover Upcoming Championships"
          description="Explore exciting tournaments hosted on SportsTracker."
        />

        <div
          className={`mt-16 transition-all duration-500 ${
            fade
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Tournament Image */}

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src={tournament.image}
                alt={tournament.name}
                className="
                  w-full
                  h-[520px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

            </div>

            {/* Tournament Details */}

            <Card className="h-full flex flex-col justify-between">

              <div>

                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                  <span className="h-2 w-2 rounded-full bg-green-600"></span>

                  {tournament.status}

                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">

                  {tournament.name}

                </h3>

                <p className="mt-6 text-slate-600 leading-8">

                  {tournament.description}

                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">

                  <div className="flex items-center gap-3">

                    <MapPin className="text-[#556B2F]" />

                    <div>

                      <p className="text-sm text-slate-500">

                        Location

                      </p>

                      <p className="font-semibold">

                        {tournament.location}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <Users className="text-[#556B2F]" />

                    <div>

                      <p className="text-sm text-slate-500">

                        Teams

                      </p>

                      <p className="font-semibold">

                        {tournament.teams}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <CalendarDays className="text-[#556B2F]" />

                    <div>

                      <p className="text-sm text-slate-500">

                        Starts

                      </p>

                      <p className="font-semibold">

                        {tournament.startDate}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <Trophy className="text-[#556B2F]" />

                    <div>

                      <p className="text-sm text-slate-500">

                        Prize Pool

                      </p>

                      <p className="font-semibold">

                        {tournament.prize}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="mt-10">

                <Button onClick={handleViewTournament}>

                  Explore Tournament

                  <ArrowRight size={18} />

                </Button>

                {/* Indicators */}

                <div className="flex justify-center gap-2 mt-8">

                  {featuredTournaments.map((_, index) => (

                    <span
                      key={index}
                      className={`rounded-full transition-all duration-500 ${
                        currentIndex === index
                          ? "bg-[#556B2F] w-8 h-2"
                          : "bg-stone-300 w-2 h-2"
                      }`}
                    />

                  ))}

                </div>

              </div>

            </Card>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default FeaturedTournament;