import { Plus } from "lucide-react";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/ui/PageHeader";

import TournamentFilters from "../../components/tournaments/TournamentFilters";
import TournamentList from "../../components/tournaments/TournamentList";

function Tournaments() {
  return (
    <Container className="py-16">

      <PageHeader
        title="Tournaments"
        description="Manage and organize all your sports tournaments."
        action={
          <Button>
            <Plus size={18} />
            Create Tournament
          </Button>
        }
      />

      <TournamentFilters />

      <TournamentList />

    </Container>
  );
}

export default Tournaments;