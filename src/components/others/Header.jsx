import React from "react";

const Header = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium">
          Hello <br /> <span className="text-4xl font-bold">{data.name}🙋</span>
        </h1>
        <button className="bg-gray-600 font-semibold rounded-full p-4 text-xl hover:bg-gray-800 transition duration-200">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
