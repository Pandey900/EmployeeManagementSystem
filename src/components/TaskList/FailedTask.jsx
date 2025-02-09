import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-emerald-800 rounded-lg p-5 hover:bg-emerald-700 shadow-lg  transition duration-200">
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
        <button className="w-full bg-red-950 rounded-lg text-sm font-semibold p-3 hover:bg-red-700 transition duration-200">
          Mark As Failed Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
