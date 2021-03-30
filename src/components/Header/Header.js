import React from "react";
import "./Header.css";
import brand_logo from "../../image/Prime_Work_Logo.png";
import task_icon from "../../image/task-icon.png";
import employee_icon from "../../image/employee-icon.png";
import calendar_icon from "../../image/calendar-icon.png";

export default function header() {
  let icon_size = 30;
  let logo_height = 75;
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
              <div className="col">
                <img
                  src={task_icon}
                  width={icon_size}
                  height={icon_size}
                  alt="Task Icon"
                  className="task-icon"
                ></img>
              </div>
              <div className="col">
                <img
                  src={employee_icon}
                  width={icon_size}
                  height={icon_size}
                  alt="Employee Icon"
                  className="employee-icon"
                ></img>
              </div>
              <div className="col">
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
