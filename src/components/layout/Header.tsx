import React, { useState } from "react";
import { FaAngleDown, FaUsersCog } from "react-icons/fa";
import { FcHome, FcOpenedFolder, FcFolder } from "react-icons/fc";
import { BsBuildingCheck, BsFileSpreadsheet } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import Toggle from "../reusable/Toggle";
import { tableData } from "../../lib/mockdata";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = () => {
  const [initialDrop, setInitialDrop] = useState(false);
  const [bar, setBar] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="md:h-[7.2%] h-[18%] w-full bg-white shadow-sm border-y-2 rounded-[1px] border-[#cbc9c9] flex items-center overflow-x-auto">
        {/* mob */}
        <div className="flex lg:hidden flex-col gap-2 w-full py-1">
          <div className="flex items-center justify-between px-2">
            <SlMenu onClick={() => setBar(true)} size={25} />
            <div className="flex items-center gap-1 text-sm">
              <p>User</p>
              <Toggle />
              <p>Admin</p>
            </div>
          </div>
          {bar && (
            <div
              className={`block lg:hidden absolute left-0 top-0 z-[1000] w-4/5 md:w-1/3 h-screen bg-[#333547]/90 overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out ${
                bar ? "translate-x-0" : "-translate-x-64"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="bg-[#F8F8FA] rounded-md py-1 px-1.5 border w-96">
                    <input
                      type="text"
                      placeholder="Search for documents"
                      className="text-xs border-2 rounded-md py-0.5 pl-2 w-[90%]"
                    />
                  </div>
                  <button
                    onClick={() => setBar(false)}
                    className="self-end p-2"
                  >
                    <IoMdArrowRoundBack size={25} color="white" />
                  </button>
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
                      location.pathname.includes("contact")
                        ? "focused"
                        : "links"
                    }
                  >
                    <FcFolder />
                    <p>Favorite Files</p>
                  </Link>
                  <Link
                    to={"/contact"}
                    className={
                      location.pathname.includes("contact")
                        ? "focused"
                        : "links"
                    }
                  >
                    <FaUsersCog />
                    <p>Assigned To Me</p>
                  </Link>
                  <Link
                    to={"/contact"}
                    className={
                      location.pathname.includes("contact")
                        ? "focused"
                        : "links"
                    }
                  >
                    <BsBuildingCheck />
                    <p>Checked Out</p>
                  </Link>
                  <Link
                    to={"/contact"}
                    className={
                      location.pathname.includes("contact")
                        ? "focused"
                        : "links"
                    }
                  >
                    <BsFileSpreadsheet />
                    <p>Unindexed Files</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* desk */}
        <div className="hidden text-black px-2 lg:flex items-center w-full justify-between">
          <SlMenu size={25} />
          <div className="bg-[#C0C0F5] rounded-lg text-[#333547] text-sm w-fit hidden xl:block">
            <button
              onClick={() => setInitialDrop(!initialDrop)}
              className="flex items-center gap-3 py-1.5 px-2 w-full"
            >
              <p>Initiate Workflow</p>
              <FaAngleDown />
            </button>
            {initialDrop && (
              <div className="absolute rounded-b-md flex flex-col w-fit border-2 border-[#707070] z-50">
                <div className="py-1 pb-2 border-y border-gray-200 bg-[#E6E6FF]">
                  <input
                    type="text"
                    placeholder="search workflow"
                    className="text-xs pl-2 py-1 mx-0.5 border border-[#707070] rounded-xl"
                  />
                </div>
                {tableData?.slice(0, 6).map((data, i) => (
                  <div
                    key={data.sn}
                    className={`py-2 px-2 border-y border-[#707070] ${
                      i % 2 !== 0 ? "bg-[#E6E6FF]" : "bg-white"
                    }`}
                  >
                    {data.title}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F8F8FA] rounded-md py-1 px-1.5 border w-96">
              <input
                type="text"
                placeholder="Search for documents"
                className="text-xs border-2 rounded-md py-0.5 pl-2 w-[90%]"
              />
            </div>
            <button className="bg-[#C0C0F5] rounded-md py-1.5 px-2 font-semibold text-[#333547] text-sm">
              Search
            </button>
            <button className="bg-[#C0C0F5] rounded-md py-1.5 px-2 font-semibold text-[#333547] text-sm w-24">
              Upload File
            </button>

            <div className="flex items-center justify-center gap-1 text-sm">
              <p>User</p>
              <Toggle />
              <p>Admin</p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm w-full lg:w-[8.5rem]">
            <p>Damilola Odusola</p>
            <FaAngleDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
