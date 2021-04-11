import React from "react";
import ScrollBar from "react-scrollbar";
import "./SidePanel.css";
import EmployeeInfo from "./EmployeeInfo";
import { employeeData } from "../../data/EmployeeData";

export default function SidePanel(props) {
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
        {employeeData.map((employee_info) => {
          return (
            <EmployeeInfo
              key={employee_info.id}
              employeeInfo={employee_info}
              changeEmployee={props.displayEmployee}
            />
          );
        })}
      </ScrollBar>
    </div>
  );
}
