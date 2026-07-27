import {
  football,
  cricket,
  basketball,
  volleyball,
  badminton,
} from "../../assets/images";

import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const sports = [
  {
    name: "Football",
    image: football,
  },
  {
    name: "Cricket",
    image: cricket,
  },
  {
    name: "Basketball",
    image: basketball,
  },
  {
    name: "Volleyball",
    image: volleyball,
  },
  {
    name: "Badminton",
    image: badminton,
  },
];

function Sports() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="SPORTS"
          title="Supported Sports"
          description="SportsTracker supports multiple sports with dedicated tournament management tools."
        />

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
          {sports.map((sport) => (
            <Card key={sport.name}>
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-52 sm:h-56 lg:h-48 rounded-2xl object-cover"
              />

              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-center lg:text-left">
                {sport.name}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Sports;