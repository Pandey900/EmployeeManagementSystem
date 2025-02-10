import React from "react";

const CompleteTask = ({ task, isAdminView }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-slate-500 rounded-lg p-5 hover:bg-slate-600 shadow-lg transition duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <span className="px-2 py-1 bg-green-500 text-xs rounded-full">
              Completed
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

        <div className="mt-4 p-3 bg-green-600/20 rounded-lg">
          <p className="text-sm text-center text-green-300">
            {isAdminView
              ? "Task completed by employee"
              : "You have completed this task"}
          </p>
          <p className="text-xs text-center text-green-300/80 mt-1">
            Completed on: {new Date(task.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
