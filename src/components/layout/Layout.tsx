import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-[100vw]">
      <Header />
      <div className="h-screen w-full flex bg-[#F5F5F5]">
        <SideBar />
        <div className="p-2 lg:p-4 bg-[#ECECF1] overflow-x-auto overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
