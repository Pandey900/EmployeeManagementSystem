import React, { createContext, useEffect, useState } from "react";
import {
  initializeLocalStorage,
  getLocalStorage,
  updateEmployeeData,
  updateSingleEmployee,
} from "../utils/localStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentView, setCurrentView] = useState("admin");

  // Initialize localStorage and context
  useEffect(() => {
    initializeLocalStorage();
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  const updateEmployeeState = (updatedEmployees) => {
    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
    updateEmployeeData(updatedEmployees);
  };

  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    const employee = userData.employees.find((emp) => emp.id === employeeId);
    if (!employee) return;

    const updatedEmployee = { ...employee };
    const task = updatedEmployee.tasks[taskIndex];
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
    updatedEmployee.tasks[taskIndex] = {
      ...task,
      active: false,
      newTask: false,
      inProgress: false,
      completedTask: false,
      failedTask: false,
      [newStatus]: true,
    };

    // Update task counts
    updatedEmployee.taskCount = {
      ...updatedEmployee.taskCount,
      [oldStatus]: Math.max(0, updatedEmployee.taskCount[oldStatus] - 1),
      [newStatus]: (updatedEmployee.taskCount[newStatus] || 0) + 1,
    };

    // Update employee in state and localStorage
    const updatedEmployees = userData.employees.map((emp) =>
      emp.id === employeeId ? updatedEmployee : emp
    );

    updateEmployeeState(updatedEmployees);

    // If this is the selected employee, update that too
    if (selectedEmployee?.id === employeeId) {
      setSelectedEmployee(updatedEmployee);
    }
  };

  const createTask = (taskData) => {
    const employeeToUpdate = userData.employees.find(
      (emp) => emp.email === taskData.assignTo
    );
    if (!employeeToUpdate) return false;

    const updatedEmployee = {
      ...employeeToUpdate,
      taskCount: {
        ...employeeToUpdate.taskCount,
        newTask: (employeeToUpdate.taskCount?.newTask || 0) + 1,
        active: (employeeToUpdate.taskCount?.active || 0) + 1,
      },
      tasks: [
        ...(employeeToUpdate.tasks || []),
        {
          ...taskData,
          active: false,
          newTask: true,
          inProgress: false,
          completedTask: false,
          failedTask: false,
        },
      ],
    };

    const updatedEmployees = userData.employees.map((emp) =>
      emp.id === employeeToUpdate.id ? updatedEmployee : emp
    );

    updateEmployeeState(updatedEmployees);
    return true;
  };

  const contextValue = {
    ...userData,
    selectedEmployee,
    setSelectedEmployee,
    currentView,
    setCurrentView,
    updateTaskStatus,
    createTask,
    updateEmployeeState,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
