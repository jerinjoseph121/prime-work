import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import EmployeeBody from "./components/EmployeeComponents/EmployeeBody";
import TaskBody from "./components/TaskComponents/TaskBody";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import AddTask from "./components/AddTask/AddTask";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [employeeId, setEmployeeId] = useState(null);
  const [panel, changePanel] = useState(-1);

  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(url + "/employees")
      .then((res) => {
        if (res.data.length > 0) changeEmployeeId(res.data[0]._id);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeEmployeeId = (val) => {
    setEmployeeId(val);
  };
  const changeMainPanel = (val) => {
    changePanel(val);
  };

  return (
    <Router>
      <div className="App">
        <Header changePanel={changeMainPanel} panel={panel} />
        <div className="row no-gutters main-body">
          <div className="col-4">
            <SidePanel displayEmployee={changeEmployeeId} />
          </div>
          <div className="col-8">
            <Route
              exact
              path="/tasks"
              render={(props) => <TaskBody {...props} id={employeeId} />}
            />
            <Route
              exact
              path={["/", "/employees"]}
              render={(props) => <EmployeeBody {...props} id={employeeId} />}
            />
            <Route
              path="/calendar"
              render={(props) => <Calendar {...props} />}
            />
            <Route
              exact
              path="/tasks/add"
              render={(props) => <AddTask {...props} />}
            />
            <Route
              exact
              path="/employees/add"
              render={(props) => <AddEmployee {...props} />}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
