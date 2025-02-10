import React, { createContext, useEffect, useState } from "react";
import {
  initializeLocalStorage,
  getLocalStorage,
  updateEmployeeData,
} from "../utils/localStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentView, setCurrentView] = useState("admin");
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Initialize localStorage and context
  useEffect(() => {
    initializeLocalStorage();
    const data = getLocalStorage();
    setUserData(data);

    // Restore logged-in user from localStorage
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setLoggedInUser(parsedUser);
      if (parsedUser.role === "employee") {
        setCurrentView("employee");
      }
    }
  }, []);

  const updateEmployeeState = (updatedEmployees) => {
    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
    updateEmployeeData(updatedEmployees);

    // Update logged-in user data if it's an employee
    if (loggedInUser?.role === "employee") {
      const updatedUserData = updatedEmployees.find(
        (emp) => emp.email === (loggedInUser.email || loggedInUser.data?.email)
      );
      if (updatedUserData) {
        const updatedLoggedInUser = {
          ...loggedInUser,
          data: updatedUserData,
        };
        setLoggedInUser(updatedLoggedInUser);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(updatedLoggedInUser)
        );
      }
    }
  };

  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    // Don't allow admin to update task status
    if (loggedInUser?.role === "admin") {
      return;
    }

    const employee = userData.employees.find((emp) => emp.id === employeeId);
    if (!employee) return;

    // Verify task ownership
    const userEmail = loggedInUser?.email || loggedInUser?.data?.email;
    if (employee.email !== userEmail) {
      return;
    }

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
      lastUpdated: new Date().toISOString(),
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
  };

  const createTask = (taskData) => {
    // Only admin can create tasks
    if (loggedInUser?.role !== "admin") {
      return false;
    }

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
          createdAt: new Date().toISOString(),
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
    loggedInUser,
    setLoggedInUser,
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
