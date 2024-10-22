import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Toggle from "../reusable/Toggle";

const Header = () => {
  return (
    <>
      <div className="h-[3.6rem] w-full bg-white shadow-sm border-y-2 rounded-[1px] border-[#cbc9c9] flex items-center overflow-x-auto">
        <div className="hidden text-black p-2 md:flex items-center w-full justify-between">
          <SlMenu size={25} />
          <div className="bg-[#C0C0F5] rounded-lg text-[#333547] text-sm">
            <div className="flex items-center gap-3 py-1.5 px-2">
              <p>Initiate Workflow</p>
              <FaAngleDown />
            </div>
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
            <button className="bg-[#C0C0F5] rounded-md py-1.5 px-2 font-semibold text-[#333547] text-sm">
              Upload File
            </button>

            <div className="flex items-center justify-center gap-2 text-sm">
              <p>User</p>
              <Toggle />
              <p>Admin</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <p>Damilola Odusola</p>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
