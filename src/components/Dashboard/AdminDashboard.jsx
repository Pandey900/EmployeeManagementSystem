import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <div className="h-screen bg-[#1C1C1C] text-white p-8">
        {/* Header */}
        <Header />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
