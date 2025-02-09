import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggdInUserData] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData.role);
      setLoggdInUserData(
        userData.role === "employee" ? userData.data : userData
      );
    }
  }, []);
  const authData = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    setLoggdInUserData(null);
    localStorage.removeItem("loggedInUser");
    window.location.reload(); // Force a clean reload of the app
  };

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      const adminData = {
        role: "admin",
        name: "Admin",
        email: "admin@me.com",
      };
      setUser("admin");
      setLoggdInUserData(adminData);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggdInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Cridentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUserData} handleLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard
          data={loggedInUserData}
          handleLogout={handleLogout}
        />
      ) : null}
    </>
  );
};

export default App;
