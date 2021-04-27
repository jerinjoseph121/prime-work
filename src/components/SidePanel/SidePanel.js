import React, { useState, useEffect } from "react";
import ScrollBar from "react-scrollbar";
import axios from "axios";
import "./SidePanel.css";
import EmployeeInfo from "./EmployeeInfo";
// import { employeeData } from "../../data/EmployeeData";

export default function SidePanel(props) {
  const [employees, setEmployees] = useState([]);

  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(url + "/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid p-0 side-panel-body">
      <ScrollBar
        style={{
          height: window.innerHeight - 78,
        }}
        speed={0.8}
        className="side-scroll-bar"
        contentClassName="side-panel-body"
      >
        {employees.map((employee_info) => {
          return (
            <EmployeeInfo
              key={employee_info._id}
              employeeInfo={employee_info}
              changeEmployee={props.displayEmployee}
            />
          );
        })}
      </ScrollBar>
    </div>
  );
}
