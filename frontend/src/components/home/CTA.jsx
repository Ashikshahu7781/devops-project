import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

function CTA() {
  return (
    <section className="py-24 bg-[#556B2F]">
      <Container>

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Organize Your
            Next Tournament?
          </h2>

          <p className="mt-6 text-lg text-green-100 leading-8">
            SportsTracker gives clubs, colleges and organizations
            everything needed to manage tournaments professionally.
          </p>

          <div className="mt-10">
            <Button
                variant="white"
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