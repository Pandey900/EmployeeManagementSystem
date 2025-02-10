import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-emerald-800 rounded-lg p-5 hover:bg-emerald-700 shadow-lg transition duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <span className="px-2 py-1 bg-red-500 text-xs rounded-full">
              Failed
            </span>
          </div>
          <p className="text-sm mb-4">{task.description}</p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-semibold">Category:</span> {task.category}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Due Date:</span> {task.date}
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-red-600/20 rounded-lg">
          <p className="text-sm text-center text-red-300">
            Task marked as failed ✗
          </p>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
