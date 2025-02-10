// Initial data for employees and admin
const initialEmployees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "e@e.com",
    password: "123",
    profession: "Software Engineer",
    role: "Developer",
    taskCount: {
      active: 1,
      newTask: 1,
      inProgress: 0,
      completedTask: 1,
      failedTask: 0,
    },
    tasks: [
      {
        title: "Develop Authentication Module",
        description: "Implement JWT-based authentication system.",
        date: "2025-02-08",
        category: "Development",
        assignTo: "e@e.com",
        active: true,
        newTask: true,
        inProgress: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Fix UI Bugs",
        description: "Resolve alignment issues in the navbar.",
        date: "2025-02-06",
        category: "UI Fix",
        assignTo: "e@e.com",
        active: false,
        newTask: false,
        inProgress: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },
  // ... rest of the employees data
];

const initialAdmin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@me.com",
    password: "123",
    profession: "System Administrator",
    role: "Admin",
  },
];

// Initialize localStorage with default data if empty
export const initializeLocalStorage = () => {
  const storedEmployees = localStorage.getItem("employees");
  const storedAdmin = localStorage.getItem("admin");

  if (!storedEmployees) {
    localStorage.setItem("employees", JSON.stringify(initialEmployees));
  }
  if (!storedAdmin) {
    localStorage.setItem("admin", JSON.stringify(initialAdmin));
  }
};

// Get data from localStorage with fallback to initial data
export const getLocalStorage = () => {
  try {
    const employees =
      JSON.parse(localStorage.getItem("employees")) || initialEmployees;
    const admin = JSON.parse(localStorage.getItem("admin")) || initialAdmin;
    return { employees, admin };
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return { employees: initialEmployees, admin: initialAdmin };
  }
};

// Update employee data in localStorage
export const updateEmployeeData = (updatedEmployees) => {
  try {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    return true;
  } catch (error) {
    console.error("Error updating localStorage:", error);
    return false;
  }
};

// Update single employee's data
export const updateSingleEmployee = (employeeId, updatedData) => {
  try {
    const employees = getLocalStorage().employees;
    const updatedEmployees = employees.map((emp) =>
      emp.id === employeeId ? { ...emp, ...updatedData } : emp
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    return true;
  } catch (error) {
    console.error("Error updating employee data:", error);
    return false;
  }
};

// Clear all data from localStorage
export const clearLocalStorage = () => {
  try {
    localStorage.removeItem("employees");
    localStorage.removeItem("admin");
    return true;
  } catch (error) {
    console.error("Error clearing localStorage:", error);
    return false;
  }
};

// Reset localStorage to initial data
export const resetLocalStorage = () => {
  try {
    localStorage.setItem("employees", JSON.stringify(initialEmployees));
    localStorage.setItem("admin", JSON.stringify(initialAdmin));
    return true;
  } catch (error) {
    console.error("Error resetting localStorage:", error);
    return false;
  }
};
