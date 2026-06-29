import { ArrowRight } from "lucide-react";

import {
  heroBanner,
} from "../../assets/images";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

function Hero() {
  return (
    <section className="bg-[#F8F7F4] py-20">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <Badge>
              🏆 The Future of Tournament Management
            </Badge>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              From Registration
              <br />

              to

              <span className="text-[#556B2F]">
                {" "}
                Championship
              </span>

              <br />

              Manage Everything

              <br />

              in One Place.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-8">
              Manage tournaments, schedule fixtures,
              register teams, monitor live standings,
              and organize every competition from a
              single modern platform.
            </p>

            <div className="mt-12 flex gap-5">

              <Button>
                Create Tournament
                <ArrowRight size={18} />
              </Button>

              <Button variant="secondary">
                View Live Demo
              </Button>

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src={heroBanner}
              alt="SportsTracker Hero"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;