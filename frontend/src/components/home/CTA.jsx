import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

function CTA() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("access_token");

    navigate(token ? "/dashboard" : "/login");
  };

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#556B2F]">
      <Container>
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Organize Your
            <br className="hidden sm:block" />
            Next Tournament?
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-green-100 leading-7 sm:leading-8 max-w-3xl mx-auto">
            SportsTracker gives clubs, colleges and organizations
            everything needed to manage tournaments professionally.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <Button
              variant="white"
              onClick={handleGetStarted}
              className="w-full sm:w-auto"
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;