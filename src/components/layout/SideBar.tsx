import React from "react";
import { FcHome, FcOpenedFolder, FcFolder } from "react-icons/fc";
import { FaUsersCog } from "react-icons/fa";
import { BsBuildingCheck, BsFileSpreadsheet } from "react-icons/bs";
import Logo from "../../assets/Logo";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation(); // Hook to get the current location

  return (
    <>
      <div className="hidden md:block w-[200px] h-screen bg-[#333547]">
        <div className="text-white h-14 bg-white border-r border-[#cbc9c9]">
          <Logo />
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={"/"}
            className={location.pathname === "/" ? "focused" : "links"}
          >
            <FcHome />
            <p>Dashboard</p>
          </Link>
          <Link
            to={"/about"}
            className={
              location.pathname.includes("about") ? "focused" : "links"
            }
          >
            <FcOpenedFolder />
            <p>Document Collection</p>
          </Link>
          <Link
            to={"/contact"}
            className={
              location.pathname.includes("contact") ? "focused" : "links"
            }
          >
            <FcFolder />
            <p>Favorite Files</p>
          </Link>
          <Link
            to={"/contact"}
            className={
              location.pathname.includes("contact") ? "focused" : "links"
            }
          >
            <FaUsersCog />
            <p>Assigned To Me</p>
          </Link>
          <Link
            to={"/contact"}
            className={
              location.pathname.includes("contact") ? "focused" : "links"
            }
          >
            <BsBuildingCheck />
            <p>Checked Out</p>
          </Link>
          <Link
            to={"/contact"}
            className={
              location.pathname.includes("contact") ? "focused" : "links"
            }
          >
            <BsFileSpreadsheet />
            <p>Unindexed Files</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
