import React from "react";

import "./styles.css";
import ProfileDetails from "@/containers/Profile/ProfileDetails";
// import EditProfileForm from "@/containers/Profile/EditProfileForm";
import ChangePasswordForm from "@/containers/Profile/ChangePasswordForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UITypography from "@/components/UITypography/UITypography";
import AddChildForm from "@/components/AddChildForm/AddChildForm";
import OrderHistory from "@/containers/Profile/OrderHistory";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 gap-6">
      <div className="profile-page w-[70%] p-6 rounded-lg ">
        <UITypography variant="h1" text="Profile Information" />
        <Tabs defaultValue="account" className="flex mt-5">
          <TabsList className="flex flex-col items-start justify-start h-[100%] p-4 mr-6 gap-4 bg-[#f3f2f2]">
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%]"
              value="account"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%]"
              value="password"
            >
              Change Password
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%]"
              value="orders"
            >
              Orders
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
          <TabsContent value="orders">
            {" "}
            <OrderHistory />
          </TabsContent>
        </Tabs>
      </div>

      {/* <AddChildForm /> */}
    </div>
  );
};

export default Profile;
