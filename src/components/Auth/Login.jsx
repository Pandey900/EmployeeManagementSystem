import React, { useState } from "react";

const Login = () => {
  // Now We Do 2 Way Binding Here So That We Can Store The Data In The State For This We Use useState Hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // As Of Now When We Click Submit The Form Gets Submitted So To Prevent That We Use e.preventDefault() For Handling The Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#2C2C2C]">
      <div className="bg-emerald-950 p-20 rounded-lg shadow-2xl  text-center">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col justify-center items-center space-y-8"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-gray-900 text-3xl p-5 rounded-full w-full placeholder:text-gray-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:bg-gray-300"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-gray-900 text-3xl p-5 rounded-full w-full placeholder:text-gray-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:bg-gray-300"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="bg-emerald-500 text-white p-6 font-semibold rounded-full w-full hover:bg-emerald-600 text-4xl transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
