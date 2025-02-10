import React from "react";

const NewTask = ({ task, onUpdateStatus }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-lg p-5 hover:bg-blue-500 shadow-lg transition duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2">{task.title}</h2>
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

        <div className="mt-4 space-y-2">
          <button
            onClick={() => onUpdateStatus("active")}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          >
            Accept Task
          </button>
          <button
            onClick={() => onUpdateStatus("failedTask")}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Decline Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
