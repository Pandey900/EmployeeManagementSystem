import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, updateEmployeeData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    assignTo: "",
    date: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formData,
      active: false,
      newTask: true,
      inProgress: false,
      completedTask: false,
      failedTask: false,
    };

    // Find the employee to assign the task to
    const updatedEmployees = employees.map((emp) => {
      if (emp.email === formData.assignTo) {
        const updatedTaskCount = {
          active: emp.taskCount?.active || 0,
          newTask: (emp.taskCount?.newTask || 0) + 1,
          inProgress: emp.taskCount?.inProgress || 0,
          completedTask: emp.taskCount?.completedTask || 0,
          failedTask: emp.taskCount?.failedTask || 0,
        };

        return {
          ...emp,
          taskCount: updatedTaskCount,
          tasks: [...(emp.tasks || []), newTask],
        };
      }
      return emp;
    });

    // Update context and localStorage
    updateEmployeeData(updatedEmployees);

    // Reset form
    setFormData({
      title: "",
      assignTo: "",
      date: "",
      category: "",
      description: "",
    });

    alert("Task created successfully!");
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold">Create New Task</h1>

      <div className="max-w-3xl mx-auto bg-[#2C2C2C] p-6 rounded-lg shadow-lg mt-8">
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
                placeholder="Make A UI Design"
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
              <label className="block text-sm font-medium mb-2">Date</label>
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
