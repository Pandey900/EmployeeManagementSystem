import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ data, handleLogout }) => {
  return (
    <>
      <div className="h-screen bg-[#1C1C1C] text-white p-8">
        {/* Header */}
        <Header data={data} handleLogout={handleLogout} />
        <CreateTask data={data} />
        <AllTask data={data} />
      </div>
    </>
  );
};

export default AdminDashboard;
