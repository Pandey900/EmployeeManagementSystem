import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen ">
      <div className="w-[30%] bg-emerald-600 text-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="w-[30%] bg-red-600 text-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="w-[30%] bg-rose-600 text-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="w-[30%] bg-green-600 text-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
