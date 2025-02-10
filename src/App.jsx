import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const {
    currentView,
    selectedEmployee,
    setCurrentView,
    setSelectedEmployee,
    employees,
  } = useContext(AuthContext);

  // Update logged-in user data whenever employees data changes
  useEffect(() => {
    if (user === "employee" && employees && loggedInUserData) {
      const updatedEmployeeData = employees.find(
        (emp) => emp.email === loggedInUserData.email
      );
      if (updatedEmployeeData) {
        setLoggedInUserData(updatedEmployeeData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: updatedEmployeeData })
        );
      }
    }
  }, [employees, user, loggedInUserData?.email]);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData.role);
      setLoggedInUserData(
        userData.role === "employee" ? userData.data : userData
      );
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    setCurrentView("admin");
    setSelectedEmployee(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = {
        role: "admin",
        name: "Admin",
        email: "admin@me.com",
      };
      setUser("admin");
      setLoggedInUserData(adminData);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (employees) {
      const employee = employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const renderDashboard = () => {
    if (!user) {
      return <Login handleLogin={handleLogin} />;
    }

    if (user === "admin") {
      if (currentView === "employee" && selectedEmployee) {
        return (
          <EmployeeDashboard
            data={selectedEmployee}
            handleLogout={handleLogout}
            handleBack={() => {
              setCurrentView("admin");
              setSelectedEmployee(null);
            }}
          />
        );
      }
      return (
        <AdminDashboard data={loggedInUserData} handleLogout={handleLogout} />
      );
    }

    return (
      <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
    );
  };

  return <>{renderDashboard()}</>;
};

export default App;
