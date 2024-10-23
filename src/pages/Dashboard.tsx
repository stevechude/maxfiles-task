import React from "react";
import WorkflowCard from "../components/dashboard/WorkflowCard";
import { tableData } from "../lib/mockdata";

const Dashboard = () => {
  return (
    <>
      {/* <div className="overflow-auto"> */}
      <div className="flex flex-wrap justify-evenly py-5 lg:py-8 gap-10">
        <WorkflowCard
          top="Recently Created"
          headers={["Name", "Uploaded at", "Action"]}
          data={tableData}
        />
        <WorkflowCard
          top="Recently viewed"
          headers={["Name", "Uploaded at", "Action"]}
          data={tableData}
        />
        <WorkflowCard
          top="Recently checked out"
          headers={["Name", "Uploaded at", "Action"]}
          data={tableData}
        />
        <WorkflowCard
          top="Recently uploaded"
          headers={["Name", "Uploaded at", "Action"]}
          data={tableData}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
