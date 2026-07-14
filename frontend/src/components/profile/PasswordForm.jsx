import { useState } from "react";

import { changePassword } from "../../api/account";
import useToast from "../../hooks/useToast";
import SectionCard from "../ui/SectionCard";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";

function PasswordForm() {

  const [formData, setFormData] = useState({

    current_password: "",

    new_password: "",

    confirm_password: "",

  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleChange = (e) => {

    const { id, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [id]: value,

    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      formData.new_password !==
      formData.confirm_password
    ) {

      toast.warning("Passwords do not match.");

      return;

    }

    try {

      setLoading(true);

      await changePassword({

        current_password:
          formData.current_password,

        new_password:
          formData.new_password,

      });

      toast.success("Password updated successfully.");
      setFormData({

        current_password: "",

        new_password: "",

        confirm_password: "",

      });

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to update password."
    );

    } finally {

      setLoading(false);

    }

  };

  return (

    <SectionCard
      title="Change Password"
      description="Keep your account secure by updating your password."
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <PasswordInput
          id="current_password"
          label="Current Password"
          value={formData.current_password}
          onChange={handleChange}
          required
        />

        <PasswordInput
          id="new_password"
          label="New Password"
          value={formData.new_password}
          onChange={handleChange}
          required
        />

        <PasswordInput
          id="confirm_password"
          label="Confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Updating..."
            : "Update Password"}

        </Button>

      </form>

    </SectionCard>

  );

}

export default PasswordForm;