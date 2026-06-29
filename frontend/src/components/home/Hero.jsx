import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

function Hero() {
  return (
    <section className="bg-[#F8F7F4] py-24">
      <Container>
        <div className="max-w-4xl">

          <Badge>
            🏆 The Future of Tournament Management
          </Badge>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            From Registration
            <br />
            to{" "}
            <span className="text-[#556B2F]">
              Championship
            </span>
            <br />
            Manage Everything
            <br />
            in One Place.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
            Manage tournaments, schedule fixtures, monitor live standings,
            register teams, and organize every competition from a single,
            powerful platform built for modern sports management.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Button>
              Create Tournament
              <ArrowRight size={18} />
            </Button>

            <Button variant="secondary">
              View Live Demo
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;