import React from "react";
import "./TaskInfo.css";
import { employeeData } from "../../data/EmployeeData";

export default function TaskInfo(props) {
  let taskDetails;
  if (props.selected) {
    taskDetails = (
      <div className="container task-details">
        <div>Description: {props.taskInfo.summary}</div>
        <div>Employees Assigned:</div>
        <div className="container row employee-assigned-list">
          {employeeData.map((employeeInfo) => {
            if (props.taskInfo.employee_assigned.includes(employeeInfo.id))
              return (
                <div className="col-4-lg col-6-md col-12-sm employee-assigned-name">
                  {employeeInfo.name}
                </div>
              );
            else return null;
          })}
        </div>
        <div>Start Date: {props.taskInfo.start_date}</div>
        <div>Deadline: {props.taskInfo.deadline}</div>
      </div>
    );
  }
  return (
    <div
      className="container p-0 task-list-item"
      onClick={() => props.changeSelection(props.taskInfo.id)}
    >
      <div className="container task-name-label">{props.taskInfo.title}</div>
      {taskDetails}
      <hr className="task-list-item-seperator" />
    </div>
  );
}
