import React from "react";
import "./EmployeeInfo.css";

export default function EmployeeInfo(props) {
  return (
    <div
      className="container p-0 employee-info-body"
      onClick={() => {
        props.changeEmployee(String(props.employeeInfo._id));
      }}
    >
      <div id="employee-name-label">{props.employeeInfo.name}</div>
      <div id="employee-post-label">{props.employeeInfo.post}</div>
      <hr className="employee-info-seperator" />
    </div>
  );
}
