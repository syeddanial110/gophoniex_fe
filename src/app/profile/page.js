import React from "react";

import "./styles.css";
import ProfileDetails from "@/containers/Profile/ProfileDetails";
// import EditProfileForm from "@/containers/Profile/EditProfileForm";
import ChangePasswordForm from "@/containers/Profile/ChangePasswordForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UITypography from "@/components/UITypography/UITypography";
import OrderHistory from "@/containers/Profile/OrderHistory";
import ChildrenData from "@/containers/Child/ChildrenData";

const Profile = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 gap-6 py-8">
      <div className="profile-page w-full sm:w-[90%] lg:w-[70%] px-4 sm:px-0 p-4 sm:p-6 rounded-lg">
        <UITypography variant="h1" text="Profile Information" />
        <Tabs defaultValue="children" className="flex flex-col lg:flex-row mt-5">
          <TabsList className="flex flex-col items-start justify-start w-full lg:w-[35%] h-auto lg:h-[100%] p-4 mr-0 lg:mr-6 mb-4 lg:mb-0 gap-4 bg-[#f3f2f2]">
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%] justify-start"
              value="account"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%] justify-start"
              value="password"
            >
              Change Password
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%] justify-start"
              value="orders"
            >
              Orders
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-main data-[state=active]:text-white bg-gray-300 w-[100%] justify-start"
              value="children"
            >
              Children
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
          <TabsContent value="children">
            {" "}
            <ChildrenData />
          </TabsContent>
        </Tabs>
      </div>

      {/* <AddChildForm /> */}
    </div>
  );
};

export default Profile;
