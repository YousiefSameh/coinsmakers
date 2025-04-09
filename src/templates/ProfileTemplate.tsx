import { Outlet } from "react-router-dom";
import SomeInformation from "@components/Profile/SomeInformation";
import Navbar from "@components/Profile/Navbar";

const ProfileTemplate = () => {
  return(
    <>
      <SomeInformation />
      <Navbar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default ProfileTemplate; 