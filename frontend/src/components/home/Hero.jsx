import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { heroBanner } from "../../assets/images";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("access_token");

    navigate(token ? "/dashboard" : "/login");
  };

  const handleViewSource = () => {
    window.open(
      "https://github.com/Ashikshahu7781/devops-project.git",
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden py-20 bg-[#F8F7F4]">

      {/* Animated Gradient Mesh */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="mesh mesh-1"></div>

        <div className="mesh mesh-2"></div>

        <div className="mesh mesh-3"></div>

        <div className="mesh mesh-4"></div>

      </div>

      {/* Content */}

      <div className="relative z-10">

        <Container>

          <div className="max-w-5xl mx-auto text-center">

            <Badge>
               Professional Tournament Management Platform
            </Badge>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">

              One Platform.

              <br />

              <span className="text-[#556B2F]">
                Every Tournament.
              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-3xl mx-auto">

              Simplify tournament management with automated fixtures,
              live standings, team registration, and intuitive dashboards—
              everything you need to organize successful competitions.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button onClick={handleGetStarted}>

                Get Started

                <ArrowRight size={18} />

              </Button>

              <Button
                variant="secondary"
                onClick={handleViewSource}
              >

                View Source

              </Button>

            </div>

            <div className="mt-20">

              <img
                src={heroBanner}
                alt="SportsTracker Dashboard"
                className="
                  mx-auto
                  w-full
                  max-w-6xl
                  rounded-3xl
                  border
                  border-stone-200
                  shadow-2xl
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                "
              />

            </div>

          </div>

        </Container>

      </div>

    </section>
  );
}

export default Hero;