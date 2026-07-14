import { useEffect, useState } from "react";

import { getProfile } from "../../api/account";

import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";

import ProfileCard from "../../components/profile/ProfileCard";
import ProfileForm from "../../components/profile/ProfileForm";
import PasswordForm from "../../components/profile/PasswordForm";

function Account() {

  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {

    try {

      const response = await getProfile();

      setProfile(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    fetchProfile();

  }, []);

  if (!profile) {

    return (

      <Container className="py-16">

        Loading...

      </Container>

    );

  }

  return (

    <Container className="py-16">

      <PageHeader
        title="My Account"
        description="Manage your profile and security."
      />

      <div className="grid gap-8">

        <ProfileCard profile={profile} />

        <ProfileForm
          profile={profile}
          onUpdated={fetchProfile}
        />

        <PasswordForm />

      </div>

    </Container>

  );

}

export default Account;