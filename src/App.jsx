import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";

import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div>
      <div className="flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Dashboard" ? <Dashboard /> : <Home />}
      </div>
    </div>
  );
};

export default App;
