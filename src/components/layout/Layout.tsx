import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-[100vw]">
      <SideBar />
      <div className="h-screen w-full flex flex-col bg-[#F5F5F5]">
        <Header />
        <div className="flex-grow p-2 lg:p-4 bg-[#ECECF1] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
