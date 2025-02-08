import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // This Will Set The Local Storage And The useEffect Will Get Called Whenever The Page Gets Refreshed In The Background And The Local Storage Will Get Set And The Data Will Get Stored In The Local Storage

  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // });

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggdInUserData] = useState([]);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggdInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Cridentials");
    }
  };

  // This Will Get The Data From The Login.jsx File And Then We Will Check The Data And Then We Will Show The Respective Dashboard As Per The Data Give Like Adim Or User

  // We Have  To Pass This In The Login.jsx File So That The Data Will Get Passed To The App.jsx File
  // handleLogin("admin@me.com", "123");
  return (
    <>
      {/* We Will Pass This To Login.jsx File As A Child And This Becomes The Parent */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={loggedInUserData} />
      )}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
