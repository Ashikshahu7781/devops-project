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
    <section className="py-24 bg-white">

      <Container>

        <SectionHeading
          badge="SPORTS"
          title="Supported Sports"
          description="SportsTracker supports multiple sports with dedicated tournament management tools."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {sports.map((sport) => (

            <Card key={sport.name}>

              <img
                src={sport.image}
                alt={sport.name}
                className="rounded-2xl h-48 w-full object-cover"
              />

              <h3 className="mt-5 text-xl font-bold">
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