"use client";
import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import UITypography from "@/components/UITypography/UITypography";
import UIButton from "@/components/UIButton/UIButton";

const ProfileDetails = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="min-h-[80vh] p-4">
      {isEdit ? (
        <div className="profile-details">
          <EditProfileForm />
        </div>
      ) : (
        <div className="flex flex-col gap-2 profile-details">
          <UITypography variant="h3" text="Personal Information" />
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Address:</strong> {user?.address}
          </p>
          <div>
            <UIButton
              type="contained"
              icon={false}
              title="Edit Profile"
              btnOnclick={() => setIsEdit(true)}
            />
          </div>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
