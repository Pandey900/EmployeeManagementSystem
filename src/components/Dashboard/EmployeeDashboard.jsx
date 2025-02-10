import React from "react";
import Headers from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout, handleBack }) => {
  return (
    <div className="p-4 relative">
      <Headers data={data} handleLogout={handleLogout} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
      {handleBack && (
        <button
          onClick={handleBack}
          className="fixed bottom-4 left-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Admin
        </button>
      )}
    </div>
  );
};

export default EmployeeDashboard;
