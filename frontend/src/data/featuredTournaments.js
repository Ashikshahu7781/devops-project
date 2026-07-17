import football from "../assets/images/sports/football.png";
import cricket from "../assets/images/sports/cricket.png";
import basketball from "../assets/images/sports/basketball.png";
import volleyball from "../assets/images/sports/volleyball.png";
import badminton from "../assets/images/sports/badminton.png";

const featuredTournaments = [
  {
    id: 1,
    image: football,
    status: "Registration Open",
    name: "Kerala Premier League 2026",
    description:
      "Experience Kerala's premier football competition featuring the state's best clubs competing for the championship.",
    location: "Kochi, Kerala",
    teams: "16 Clubs",
    startDate: "15 Aug 2026",
    prize: "₹10 Lakhs",
  },
  {
    id: 2,
    image: cricket,
    status: "Upcoming",
    name: "Inter College Cricket Cup",
    description:
      "An exciting cricket championship bringing together top college teams from across Kerala.",
    location: "Trivandrum",
    teams: "12 Teams",
    startDate: "05 Sep 2026",
    prize: "₹5 Lakhs",
  },
  {
    id: 3,
    image: basketball,
    status: "Live",
    name: "Elite Basketball Championship",
    description:
      "Fast-paced basketball action featuring university and professional clubs battling for the title.",
    location: "Bengaluru",
    teams: "10 Teams",
    startDate: "18 Sep 2026",
    prize: "₹8 Lakhs",
  },
  {
    id: 4,
    image: volleyball,
    status: "Registration Open",
    name: "South Zone Volleyball League",
    description:
      "A regional volleyball tournament showcasing the strongest teams from South India.",
    location: "Chennai",
    teams: "14 Clubs",
    startDate: "12 Oct 2026",
    prize: "₹6 Lakhs",
  },
  {
    id: 5,
    image: badminton,
    status: "Coming Soon",
    name: "National Badminton Championship",
    description:
      "India's rising badminton stars compete in a prestigious national-level championship.",
    location: "Hyderabad",
    teams: "32 Players",
    startDate: "25 Oct 2026",
    prize: "₹3 Lakhs",
  },
];

export default featuredTournaments;