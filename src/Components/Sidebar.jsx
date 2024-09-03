import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div className=" h-screen w-80 bg-slate-100 border-x-4 shadow-2xl">
      <div className="text-3xl px-6 py-4">
        AMBIT <span className="text-red-500">Finvest</span>
      </div>
      <div className="mt-5 font-bold text-xl">
        <ul className="my-12 mx-2 ">
          <li
            onClick={() => {
              handleOnClick("Home");
            }}
            className={`mb-2 py-3 hover:shadow  ${
              selectedTab === "Home" && "bg-blue-500"
            } rounded-md `}
          >
            <a href="" className="px-3">
              Home
            </a>
          </li>
          <li
            onClick={() => {
              handleOnClick("Dashboard");
            }}
            className={`mb-2 py-3 hover:shadow  ${
              selectedTab === "Dashboard" && "bg-blue-500"
            } rounded-md `}
          >
            <a href="" className="px-3">
              Data
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
