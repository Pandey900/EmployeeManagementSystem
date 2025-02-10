import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, createTask } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    assignTo: "",
    date: "",
    category: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const success = createTask(formData);

      if (success) {
        setSuccess("Task created successfully!");
        setFormData({
          title: "",
          assignTo: "",
          date: "",
          category: "",
          description: "",
        });
      } else {
        setError("Failed to create task. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while creating the task.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold">Create New Task</h1>

      <div className="max-w-3xl mx-auto bg-[#2C2C2C] p-6 rounded-lg shadow-lg mt-8">
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
            {success}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Assign To
              </label>
              <select
                name="assignTo"
                value={formData.assignTo}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Employee</option>
                {employees?.map((emp) => (
                  <option key={emp.id} value={emp.email}>
                    {emp.name} ({emp.email})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Due Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#3C3C3C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Documentation">Documentation</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description..."
              rows="6"
              className="w-full p-4 rounded-md bg-[#3C3C3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

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
