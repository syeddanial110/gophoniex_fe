"use client";
import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm";

const ProfileDetails = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="min-h-[80vh] p-4">
      {isEdit ? (
        <div className="profile-details">
          <EditProfileForm />
        </div>
      ) : (
        <div className="profile-details">
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
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
