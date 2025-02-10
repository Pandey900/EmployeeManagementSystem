import React from "react";

const AcceptTask = ({ task, onUpdateStatus, isAdminView }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-slate-400 rounded-lg p-5 hover:bg-slate-500 shadow-lg transition duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <span className="px-2 py-1 bg-green-500 text-xs rounded-full">
              Accepted
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
              onClick={() => onUpdateStatus("inProgress")}
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition duration-200"
            >
              Start Working
            </button>
            <button
              onClick={() => onUpdateStatus("failedTask")}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Unable to Complete
            </button>
          </div>
        )}
        {isAdminView && (
          <div className="mt-4 p-3 bg-green-600/20 rounded-lg">
            <p className="text-sm text-center text-green-300">
              Task accepted by employee
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptTask;
