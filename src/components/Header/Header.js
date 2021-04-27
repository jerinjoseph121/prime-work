import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import brand_logo from "../../image/Prime_Work_Logo.png";
import task_icon from "../../image/task-icon.png";
import task_icon_clicked from "../../image/task-icon-clicked.png";
import employee_icon from "../../image/employee-icon.png";
import employee_icon_clicked from "../../image/employee-icon-clicked.png";
import calendar_icon from "../../image/calendar-icon.png";
import calendar_icon_clicked from "../../image/calendar-icon-clicked.png";

export default function header(props) {
  let icon_size = 30;
  let logo_height = 75;

  let taskImg = task_icon;
  let employeeImg = employee_icon;
  let calendarImg = calendar_icon;

  function selectButton(props) {
    if (props.panel === 0) {
      return (
        <Link to="/tasks/add">
          <button
            className="btn btn-lg btn-outline-success"
            onClick={() => props.changePanel(3)}
          >
            Add Task
          </button>
        </Link>
      );
    } else if (props.panel === 1) {
      return (
        <Link to="/employees/add">
          <button
            className="btn btn-lg btn-outline-success"
            onClick={() => props.changePanel(4)}
          >
            Add Employee
          </button>
        </Link>
      );
    }
    return;
  }

  if (props.panel === 0) {
    taskImg = task_icon_clicked;
    employeeImg = employee_icon;
    calendarImg = calendar_icon;
  } else if (props.panel === 1) {
    taskImg = task_icon;
    employeeImg = employee_icon_clicked;
    calendarImg = calendar_icon;
  } else if (props.panel === 2) {
    taskImg = task_icon;
    employeeImg = employee_icon;
    calendarImg = calendar_icon_clicked;
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
              <Link to="/tasks" className="col">
                <div onClick={() => props.changePanel(0)}>
                  <img
                    src={taskImg}
                    width={icon_size}
                    height={icon_size}
                    alt="Task Icon"
                    className="task-icon"
                  ></img>
                </div>
              </Link>
              <Link to="/employees" className="col">
                <div onClick={() => props.changePanel(1)}>
                  <img
                    src={employeeImg}
                    width={icon_size}
                    height={icon_size}
                    alt="Employee Icon"
                    className="employee-icon"
                  ></img>
                </div>
              </Link>
              <Link to="/calendar" className="col">
                <div onClick={() => props.changePanel(2)}>
                  <img
                    src={calendarImg}
                    width={icon_size}
                    height={icon_size}
                    alt="Calendar Icon"
                    className="calendar-icon"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 text-center p-3">{selectButton(props)}</div>
      </div>
    </div>
  );
}
