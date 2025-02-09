import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-slate-500 rounded-lg p-5 hover:bg-slate-600 shadow-lg  transition duration-200">
      <div className="flex items-center justify-between">
        <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
          {task.category}
        </h2>
        <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
          {task.date}
        </h4>
      </div>
      <h2 className="text-2xl mt-4 font-semibold">{task.title}</h2>
      <p className="text-sm mt-2">{task.description}</p>
      <div className="flex mt-4 justify-center">
        <button className="w-full bg-green-950 rounded-lg p-3 text-sm font-semibold  hover:bg-green-700 transition duration-200">
          Mark As Completed Task
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
