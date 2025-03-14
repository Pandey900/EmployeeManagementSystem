import React from "react";

const InProgress = ({ task, onUpdateStatus, isAdminView }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-neutral-500 rounded-lg p-5 hover:bg-neutral-600 shadow-lg transition duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <span className="px-2 py-1 bg-yellow-500 text-xs rounded-full">
              In Progress
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
            <p className="text-sm">
              <span className="font-semibold">Assigned To:</span>{" "}
              {task.assignTo}
            </p>
          </div>
        </div>

        {!isAdminView && (
          <div className="mt-4 space-y-2">
            <button
              onClick={() => onUpdateStatus("completedTask")}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
            >
              Mark as Complete
            </button>
            <button
              onClick={() => onUpdateStatus("failedTask")}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Mark as Failed
            </button>
          </div>
        )}
        {isAdminView && (
          <div className="mt-4 p-3 bg-yellow-600/20 rounded-lg">
            <p className="text-sm text-center text-yellow-300">
              Employee is working on this task
            </p>
            <p className="text-xs text-center text-yellow-300/80 mt-1">
              Started: {new Date(task.date).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InProgress;
