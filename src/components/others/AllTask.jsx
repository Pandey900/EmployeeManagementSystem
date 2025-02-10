import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees, setSelectedEmployee, setCurrentView } =
    useContext(AuthContext);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setCurrentView("employee");
  };

  return (
    <div className="h-96 mx-auto bg-[#2C2C2C] rounded-lg mt-8 flex flex-col">
      <div className="sticky top-0 z-10 bg-[#2C2C2C] p-10 pb-4">
        <h1 className="flex justify-center text-2xl text-white font-bold mb-4">
          All Tasks
        </h1>
        <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg">
          <div className="w-[20%] px-2">
            <h1 className="text-white text-xl font-bold bg-gray-700 rounded-md py-3 text-center">
              Employee Name
            </h1>
          </div>
          <div className="w-[20%] px-2">
            <h2 className="text-white text-lg font-bold bg-gray-700 rounded-md py-3 text-center">
              New Task
            </h2>
          </div>
          <div className="w-[20%] px-2">
            <h2 className="text-white text-lg font-bold bg-gray-700 rounded-md py-3 text-center">
              Active Task
            </h2>
          </div>
          <div className="w-[20%] px-2">
            <h2 className="text-white text-lg font-bold bg-gray-700 rounded-md py-3 text-center">
              In Progress
            </h2>
          </div>
          <div className="w-[20%] px-2">
            <h2 className="text-white text-lg font-bold bg-gray-700 rounded-md py-3 text-center">
              Completed Task
            </h2>
          </div>
          <div className="w-[20%] px-2">
            <h2 className="text-white text-lg font-bold bg-gray-700 rounded-md py-3 text-center">
              Failed Tasks
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-10 pb-4 scrollbar-hide">
        {employees?.map((employee) => (
          <div
            key={employee.id}
            onClick={() => handleEmployeeClick(employee)}
            className="flex justify-between items-center bg-[#4A5568] p-6 rounded-lg mb-4 hover:bg-[#3A4556] transition-colors cursor-pointer"
          >
            <div className="w-[20%] px-2">
              <h1 className="text-white text-lg font-bold text-center">
                {employee.name}
              </h1>
            </div>
            <div className="w-[20%] px-2">
              <h2 className="text-white text-md font-semibold text-center bg-gray-600 rounded-md py-2">
                {employee.taskCount?.newTask || 0}
              </h2>
            </div>
            <div className="w-[20%] px-2">
              <h2 className="text-white text-md font-semibold text-center bg-gray-600 rounded-md py-2">
                {employee.taskCount?.active || 0}
              </h2>
            </div>
            <div className="w-[20%] px-2">
              <h2 className="text-white text-md font-semibold text-center bg-gray-600 rounded-md py-2">
                {employee.taskCount?.inProgress || 0}
              </h2>
            </div>
            <div className="w-[20%] px-2">
              <h2 className="text-white text-md font-semibold text-center bg-gray-600 rounded-md py-2">
                {employee.taskCount?.completedTask || 0}
              </h2>
            </div>
            <div className="w-[20%] px-2">
              <h2 className="text-white text-md font-semibold text-center bg-gray-600 rounded-md py-2">
                {employee.taskCount?.failedTask || 0}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
