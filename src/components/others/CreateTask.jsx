import React from "react";

const CreateTask = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold ">Admin Dashboard</h1>

      {/* Task Creation Form */}
      <div className="max-w-3xl mx-auto bg-[#2C2C2C] p-6 rounded-lg shadow-lg mt-8">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make A UI Design"
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Enter The Employee Name"
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                placeholder="Design, Development, etc.."
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter task description..."
              rows="6"
              className="w-full p-4 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
