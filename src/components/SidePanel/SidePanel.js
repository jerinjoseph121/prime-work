import React from "react";
import ScrollBar from "react-scrollbar";
import "./SidePanel.css";
import EmployeeInfo from "./EmployeeInfo";
import { employeeData } from "../../data/EmployeeData";

export default function SidePanel() {
  return (
    <div className="container-fluid p-0 side-panel-body">
      <ScrollBar
        style={{
          height: window.innerHeight - 77,
        }}
        speed={0.8}
        className="side-scroll-bar"
        contentClassName="side-panel-body"
      >
        {employeeData.map((employee_info) => {
          return <EmployeeInfo employeeInfo={employee_info} />;
        })}
      </ScrollBar>
    </div>
  );
}
