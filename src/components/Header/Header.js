import React from "react";
import "./Header.css";
import brand_logo from "../../image/Prime_Work_Logo.png";
import task_icon from "../../image/task-icon.png";
import task_icon_clicked from "../../image/task-icon-clicked.png";
import employee_icon from "../../image/employee-icon.png";
import employee_icon_clicked from "../../image/employee-icon-clicked.png";
import calendar_icon from "../../image/calendar-icon.png";

export default function header(props) {
  let icon_size = 30;
  let logo_height = 75;

  let taskImg = task_icon;
  let employeeImg = employee_icon;

  if (props.panel === 0) {
    taskImg = task_icon_clicked;
    employeeImg = employee_icon;
  } else if (props.panel === 1) {
    taskImg = task_icon;
    employeeImg = employee_icon_clicked;
  }
  return (
    <div className="container-fluid header-body">
      <div className="row">
        <div className="col-4">
          <div className="container logo-section">
            <img
              src={brand_logo}
              width={logo_height * 4}
              height={logo_height}
              alt="Brand Logo"
              className="img-fluid brand-logo"
            ></img>
          </div>
        </div>
        <div className="col-4">
          <div className="container navigation-section">
            <div className="row">
              <div className="col" onClick={() => props.changePanel(0)}>
                <img
                  src={taskImg}
                  width={icon_size}
                  height={icon_size}
                  alt="Task Icon"
                  className="task-icon"
                ></img>
              </div>
              <div className="col" onClick={() => props.changePanel(1)}>
                <img
                  src={employeeImg}
                  width={icon_size}
                  height={icon_size}
                  alt="Employee Icon"
                  className="employee-icon"
                ></img>
              </div>
              <div className="col" onClick={() => props.changePanel(2)}>
                <img
                  src={calendar_icon}
                  width={icon_size}
                  height={icon_size}
                  alt="Calendar Icon"
                  className="calendar-icon"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
