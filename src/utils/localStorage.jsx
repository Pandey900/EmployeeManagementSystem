// localStorage.clear();
const employees = [
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
        assignTo: "employee1@example.com",
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
        assignTo: "employee1@example.com",
        active: false,
        newTask: false,
        inProgress: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },
  {
    id: 2,
    name: "Rajesh Verma",
    email: "employee2@example.com",
    password: "123",
    profession: "Data Scientist",
    role: "Analyst",
    taskCount: {
      active: 1,
      newTask: 0,
      inProgress: 1,
      completedTask: 0,
      failedTask: 1,
    },
    tasks: [
      {
        title: "Data Cleaning Script",
        description: "Write a script to clean raw dataset for analysis.",
        date: "2025-02-07",
        category: "Data Processing",
        assignTo: "employee2@example.com",
        active: true,
        newTask: false,
        inProgress: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Train ML Model",
        description: "Train a classification model using TensorFlow.",
        date: "2025-02-05",
        category: "Machine Learning",
        assignTo: "employee2@example.com",
        active: false,
        newTask: false,
        inProgress: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Anil Kumar",
    email: "admin@example.com",
    password: "123",
    profession: "System Administrator",
    role: "Admin",
    taskCount: {
      active: 1,
      newTask: 1,
      inProgress: 0,
      completedTask: 1,
      failedTask: 0,
    },
    tasks: [
      {
        title: "User Access Audit",
        description: "Review system access logs for security compliance.",
        date: "2025-02-08",
        category: "Security",
        assignTo: "admin@example.com",
        active: true,
        newTask: true,
        inProgress: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Update Server Patches",
        description: "Apply latest security patches to all production servers.",
        date: "2025-02-06",
        category: "Infrastructure",
        assignTo: "admin@example.com",
        active: false,
        newTask: false,
        inProgress: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
