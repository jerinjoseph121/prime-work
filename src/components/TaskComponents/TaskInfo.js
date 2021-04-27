import React from "react";
import "./TaskInfo.css";
// import { employeeData } from "../../data/EmployeeData";

export default function TaskInfo(props) {
  let taskDetails;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function dateConvert(d, month) {
    const Date = d.getDate();
    const Month = month[d.getMonth()];
    const Year = d.getFullYear();
    return Date + " " + Month + ", " + Year;
  }

  if (props.selected) {
    taskDetails = (
      <div className="container task-details">
        <hr className="task-list-item-seperator" />
        <div>Description: {props.taskInfo.summary}</div>
        <div>Employees Assigned:</div>
        <div className="container row employee-assigned-list">
          {props.employeeList.map((employeeInfo) => {
            if (props.taskInfo.employeesAssigned.includes(employeeInfo._id))
              return (
                <div className="col-4-lg col-6-md col-12-sm employee-assigned-name">
                  {employeeInfo.name}
                </div>
              );
            else return null;
          })}
        </div>
        <div>
          Start Date: {dateConvert(new Date(props.taskInfo.startDate), months)}
        </div>
        <div>
          Deadline: {dateConvert(new Date(props.taskInfo.deadline), months)}
        </div>
        <div className="task-btn-section row p-2">
          <div className="col-6 delete-btn">
            <button className="btn btn-lg btn-outline-danger">Delete</button>
          </div>
          <div className="col-6 update-btn">
            <button className="btn btn-lg btn-outline-warning">Update</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container p-2">
      <div
        className="container p-0 task-list-item"
        onClick={() => {
          if (props.selected) props.changeSelection(-1);
          else props.changeSelection(props.taskInfo._id);
        }}
      >
        <div className="container task-name-label">{props.taskInfo.title}</div>
        {taskDetails}
      </div>
    </div>
  );
}
