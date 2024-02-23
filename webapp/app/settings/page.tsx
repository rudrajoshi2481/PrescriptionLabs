import ProfileSettings from "@/components/Settings/ProfileSettings";
import SocialSettings from "@/components/Settings/SocialSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function page() {
  return (
    <div className="m-9 w-[80vw]">
      <Tabs defaultValue="profile" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
          <TabsTrigger value="social">Social Settings</TabsTrigger>
          
        </TabsList>
        <TabsContent className="w-full" value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="social">
          <SocialSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
