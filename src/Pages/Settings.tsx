import React, { useState } from "react";
import ProfileSet from "../Components/ProfileSet";
import Security from "../Components/Security";
import Support from "../Components/Support";

import SideBar from "../Components/SideBar";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("help");

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderSettingsContent = () => {
    switch (activeTab) {
      case "help":
        return <HelpAndSupport />;
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      default:
        return null;
    }
  };

  return (
    <>
      <SideBar />
        <div className="w-full container mx-auto flex flex-col justify-center">
          {/* px-12 */}
          <div className="my-4 ml-24 px-16 text-white flex flex-row justify-between">
            <button
              className={`px-4 py-2 rounded-lg mx-2 text-center hover:text-brandColor focus:text-brandColor underline ${activeTab === "help" && "active text-brandColor text-lg"}`}
              onClick={() => handleTabChange("help")}
            >
              Help & Support
            </button>
            <button
              className={`px-4 py-2 rounded-lg mx-2 text-center hover:text-brandColor focus:text-brandColor underline ${activeTab === "profile" && "active text-brandColor text-lg"}`}
              onClick={() => handleTabChange("profile")}
            >
              Profile Settings
            </button>
            <button
              className={`px-4 py-2 rounded-lg mx-2 text-center hover:text-brandColor focus:text-brandColor underline ${activeTab === "security" && "active text-brandColor text-lg"}`}
              onClick={() => handleTabChange("security")}
            >
              Security
            </button>
          </div>
          <div className="settings-content">{renderSettingsContent()}</div>
        </div>
    </>
  );
};

const HelpAndSupport = () => {
  return (
    <div className="text-white">
      <Support />
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div className="text-white">
      <ProfileSet />
    </div>
  );
};

const SecuritySettings = () => {
  return (
    <div className="text-white">
      <Security />
    </div>
  );
};

export default Settings;
