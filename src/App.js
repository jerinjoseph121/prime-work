import { useState } from "react";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Body from "./components/EmployeeComponents/Body/Body";
import TaskBody from "./components/TaskComponents/TaskBody";
import Calendar from "./components/Calendar/Calendar";
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

  function selectPanel(val) {
    if (val === 0) return <TaskBody id={employeeId} />;
    else if (val === 1) return <Body id={employeeId} />;
    else return <Calendar />;
  }

  return (
    <div className="App">
      <Header changePanel={changeMainPanel} panel={panel} />
      <div className="row no-gutters main-body">
        <div className="col-4">
          <SidePanel displayEmployee={changeEmployeeId} />
        </div>
        <div className="col-8">{selectPanel(panel)}</div>
      </div>
    </div>
  );
}

export default App;
