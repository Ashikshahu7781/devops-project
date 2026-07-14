import { User, Mail, Shield, Calendar } from "lucide-react";

import SectionCard from "../ui/SectionCard";

function ProfileCard({ profile }) {

  return (

    <SectionCard
      title="Profile Information"
      description="Your account details."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#556B2F]/10">

            <User
              size={22}
              className="text-[#556B2F]"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Full Name
            </p>

            <p className="font-semibold text-slate-900">
              {profile.full_name}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#556B2F]/10">

            <Mail
              size={22}
              className="text-[#556B2F]"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-semibold text-slate-900">
              {profile.email}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#556B2F]/10">

            <Shield
              size={22}
              className="text-[#556B2F]"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Role
            </p>

            <p className="font-semibold capitalize text-slate-900">
              {profile.role}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#556B2F]/10">

            <Calendar
              size={22}
              className="text-[#556B2F]"
            />

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Member Since
            </p>

            <p className="font-semibold text-slate-900">
              {new Date(profile.created_at).toLocaleDateString()}
            </p>

          </div>

        </div>

      </div>

    </SectionCard>

  );

}

export default ProfileCard;