import React from "react";
import "./Body.css";
import { employeeData } from "../../data/EmployeeData";

export default function Body() {
  let id = 0;
  return (
    <div className="container-fluid body-panel">
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
  );
}
