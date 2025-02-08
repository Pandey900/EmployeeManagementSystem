import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-5 mt-10">
      <div className="w-full sm:w-[48%] md:w-[30%] bg-emerald-600 text-white p-6 md:p-10 rounded-xl shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">0</h2>
        <h3 className="text-xl md:text-2xl font-medium">New Task</h3>
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] bg-red-600 text-white p-6 md:p-10 rounded-xl shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">0</h2>
        <h3 className="text-xl md:text-2xl font-medium">In Progress</h3>
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] bg-rose-600 text-white p-6 md:p-10 rounded-xl shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">0</h2>
        <h3 className="text-xl md:text-2xl font-medium">Failed Tasks</h3>
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] bg-green-600 text-white p-6 md:p-10 rounded-xl shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">0</h2>
        <h3 className="text-xl md:text-2xl font-medium">Completed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
