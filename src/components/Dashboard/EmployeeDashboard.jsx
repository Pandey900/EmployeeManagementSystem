import React from "react";
import Headers from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = () => {
  return (
    <>
      <h1 className="text-center p-2 text-6xl font-medium">Employee Panel</h1>
      <div className="p-10 bg-[#1C1C1C] h-screen text-white">
        <Headers />
        <TaskListNumbers />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
