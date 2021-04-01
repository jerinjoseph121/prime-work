import React from "react";
import ScrollBar from "react-scrollbar";
import "./Body.css";
import { employeeData } from "../../../data/EmployeeData";

export default function Body(props) {
  let id = props.id;
  return (
    <div className="container-fluid p-0 body-panel">
      <ScrollBar
        style={{
          height: window.innerHeight - 78,
        }}
        speed={0.8}
        className="body-scroll-bar"
        contentClassName="body-panel"
      >
        <div className="container employee-info-section">
          <div className="container employee-name-label">
            {employeeData[id].name}
          </div>
          <hr className="employee-details-seperator" />
          <div className="container employee-details">
            <div>Full Name: {employeeData[id].name}</div>
            <div>Post: {employeeData[id].post}</div>
            <div>Salary: {employeeData[id].salary}</div>
            <div>Address: {employeeData[id].address}</div>
          </div>
        </div>
        <hr className="employee-section-seperator" />
        <div className="container employee-task-section">
          <div className="container task-label">Tasks</div>
          <hr className="employee-details-seperator" />
          <div className="container employee-task-details">
            <div>Assigned: {employeeData[id].tasks.assigned}</div>
            <div>Completed: {employeeData[id].tasks.completed}</div>
            <div>Total: {employeeData[id].tasks.total}</div>
          </div>
        </div>
      </ScrollBar>
    </div>
  );
}
