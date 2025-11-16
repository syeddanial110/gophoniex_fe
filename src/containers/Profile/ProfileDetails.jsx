"use client";
import React, { useEffect, useState } from "react";
import EditProfileForm from "./EditProfileForm";
import UITypography from "@/components/UITypography/UITypography";
import UIButton from "@/components/UIButton/UIButton";
import { apiGet } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import UISpinner from "@/components/UISpinner/UISpinner";

const ProfileDetails = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = () => {
    apiGet(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.getUserByToken}`,
      (res) => {
        console.log("res", res);
        if (res?.success) {
          setUserData(res.data[0]); // Access first item since it's an array
        }
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching user profile:", err);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-[80vh] p-4">
      {isEdit ? (
        <div className="profile-details">
          <EditProfileForm
            userData={userData}
            setIsEdit={setIsEdit}
            fetchUserProfile={fetchUserProfile}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4 profile-details">
          <UITypography variant="h3" text="Personal Information" />
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <UISpinner />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <p className="flex items-center border-b pb-3">
                <span className="font-semibold w-32">Full Name:</span>
                <span>{`${userData?.firstName || ""} ${
                  userData?.lastName || ""
                }`}</span>
              </p>
              <p className="flex items-center border-b pb-3">
                <span className="font-semibold w-32">Email:</span>
                <span>{userData?.email}</span>
              </p>
              <p className="flex items-center border-b pb-3">
                <span className="font-semibold w-32">Created:</span>
                <span>
                  {userData?.createdAt &&
                    new Date(userData.createdAt).toLocaleDateString()}
                </span>
              </p>
              <p className="flex items-center pb-3">
                <span className="font-semibold w-32">Account Type:</span>
                <span>{userData?.isAdmin ? "Administrator" : "User"}</span>
              </p>
            </div>
          )}

          <div className="mt-4">
            <UIButton
              type="contained"
              icon={false}
              title="Edit Profile"
              btnOnclick={() => setIsEdit(true)}
              className="bg-main hover:bg-main/90"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
