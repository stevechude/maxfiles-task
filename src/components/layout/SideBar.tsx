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
      <div className="hidden lg:block w-[200px] min-w-[200px] flex-shrink-0 h-screen bg-[#333547]">
        {/* <div className="text-white h-[7%] bg-white border-r border-[#cbc9c9]">
          <Logo />
        </div> */}
        <div className="flex flex-col gap-3">
          <Link
            to={"/"}
            className={location.pathname === "/" ? "focused" : "links"}
          >
            <FcHome />
            <p>Dashboard</p>
          </Link>
          <Link
            to={"/document"}
            className={
              location.pathname.includes("document") ? "focused" : "links"
            }
          >
            <FcOpenedFolder />
            <p>Document Collection</p>
          </Link>
          <Link
            to={"/favorite"}
            className={
              location.pathname.includes("favorite") ? "focused" : "links"
            }
          >
            <FcFolder />
            <p>Favorite Files</p>
          </Link>
          <Link
            to={"/assigned-to"}
            className={
              location.pathname.includes("assigned-to") ? "focused" : "links"
            }
          >
            <FaUsersCog />
            <p>Assigned To Me</p>
          </Link>
          <Link
            to={"/checked-out"}
            className={
              location.pathname.includes("checked-out") ? "focused" : "links"
            }
          >
            <BsBuildingCheck />
            <p>Checked Out</p>
          </Link>
          <Link
            to={"/unindex"}
            className={
              location.pathname.includes("unindex") ? "focused" : "links"
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
