import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <SideBar />
      <div className="h-screen md:w-full flex flex-col overflow-y-auto bg-[#F5F5F5]">
        <Header />
        <div className="flex-grow p-2 md:p-4 bg-[#ECECF1]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
