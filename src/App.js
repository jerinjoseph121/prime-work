import { useState } from "react";
import Header from "./components/Header/Header";
import SidePanel from "./components/EmployeeComponents/SidePanel/SidePanel";
import Body from "./components/EmployeeComponents/Body/Body";
import TaskBody from "./components/TaskComponents/TaskBody";
import React from "react";

function App() {
  const [employeeId, setEmployeeId] = useState(0);
  const [panel, changePanel] = useState(1);

  const changeEmployeeId = (val) => {
    setEmployeeId(val);
  };
  const changeMainPanel = (val) => {
    changePanel(val);
  };

  return (
    <div className="App">
      <Header changePanel={changeMainPanel} panel={panel} />
      <div className="row no-gutters main-body">
        <div className="col-4">
          <SidePanel displayEmployee={changeEmployeeId} />
        </div>
        <div className="col-8">
          {panel ? <Body id={employeeId} /> : <TaskBody id={employeeId} />}
        </div>
      </div>
    </div>
  );
}

export default App;
