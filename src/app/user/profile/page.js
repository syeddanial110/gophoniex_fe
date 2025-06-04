import React from "react";

import "./styles.css";
import ProfileDetails from "@/containers/Profile/ProfileDetails";
// import EditProfileForm from "@/containers/Profile/EditProfileForm";
import ChangePasswordForm from "@/containers/Profile/ChangePasswordForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UITypography from "@/components/UITypography/UITypography";
import AddChildForm from "@/components/AddChildForm/AddChildForm";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 ">
      <div className="profile-page w-[40%] shadow-2xl p-6 rounded-lg">
        <UITypography variant="h1" text="User Profile" />
        <Tabs defaultValue="account" className="max-w-full">
          <TabsList className="bg-gray-300 px-4 py-2 w-full">
            <TabsTrigger
              className="data-[state=active]:bg-main bg-gray-300"
              value="account"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main bg-gray-300"
              value="password"
            >
              Change Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ProfileDetails
              user={{
                name: "Doe",
                email: "tes",
                phone: "1212121",
                address: "Abc",
              }}
            />
          </TabsContent>
          <TabsContent value="password">
            {" "}
            <ChangePasswordForm />
          </TabsContent>
        </Tabs>
      </div>

      <AddChildForm />
    </div>
  );
};

export default Profile;
