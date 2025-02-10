import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentView, setCurrentView] = useState("admin");

  // Initialize localStorage and context
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    if (data.employees && data.admin) {
      setUserData(data);
    }
  }, []);

  // Sync localStorage with context whenever userData changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem("employees", JSON.stringify(userData.employees));
      localStorage.setItem("admin", JSON.stringify(userData.admin));
    }
  }, [userData]);

  const updateEmployeeData = (updatedEmployees) => {
    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
  };

  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    setUserData((prev) => {
      const updatedEmployees = prev.employees.map((emp) => {
        if (emp.id === employeeId) {
          const updatedTasks = [...emp.tasks];
          const task = updatedTasks[taskIndex];
          const oldStatus = Object.keys(task).find(
            (key) =>
              [
                "active",
                "newTask",
                "inProgress",
                "completedTask",
                "failedTask",
              ].includes(key) && task[key]
          );

          // Update task status
          updatedTasks[taskIndex] = {
            ...task,
            active: false,
            newTask: false,
            inProgress: false,
            completedTask: false,
            failedTask: false,
            [newStatus]: true,
          };

          // Update task counts
          const updatedTaskCount = {
            ...emp.taskCount,
            [oldStatus]: Math.max(0, emp.taskCount[oldStatus] - 1),
            [newStatus]: (emp.taskCount[newStatus] || 0) + 1,
          };

          return {
            ...emp,
            tasks: updatedTasks,
            taskCount: updatedTaskCount,
          };
        }
        return emp;
      });

      return {
        ...prev,
        employees: updatedEmployees,
      };
    });
  };

  const contextValue = {
    ...userData,
    selectedEmployee,
    setSelectedEmployee,
    currentView,
    setCurrentView,
    updateEmployeeData,
    updateTaskStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
