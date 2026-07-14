import { useEffect, useState } from "react";
import useToast from "../../hooks/useToast";
import {
  getProfile,
  updateProfile,
} from "../../api/account";

import SectionCard from "../ui/SectionCard";
import Input from "../ui/Input";
import Button from "../ui/Button";

function ProfileForm({
  profile,
  onUpdated,
}) {

  const [formData, setFormData] = useState({

    full_name: "",

    email: "",

  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  useEffect(() => {

    if (profile) {

      setFormData({

        full_name: profile.full_name,

        email: profile.email,

      });

    }

  }, [profile]);

  const handleChange = (e) => {

    const { id, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [id]: value,

    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

    setLoading(true);

    const response = await updateProfile(formData);

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    await onUpdated();

    toast.success("Profile updated successfully.");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to update profile."
    );

  } finally {

    setLoading(false);

  }
    

  };

  return (

    <SectionCard
      title="Update Profile"
      description="Edit your personal information."
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <Input
          id="full_name"
          label="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <Input
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Saving..."
            : "Save Changes"}

        </Button>

      </form>

    </SectionCard>

  );

}

export default ProfileForm;