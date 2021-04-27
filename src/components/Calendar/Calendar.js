import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ScrollBar from "react-scrollbar";
import buildCalendar from "./buildCalendar";
import dayStyles from "./styles";
import "./styles.css";

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [task, setTask] = useState([]);

  const url = "http://localhost:5000";

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  useEffect(() => {
    axios.get(url + "/tasks").then((res) => {
      console.log("Calendar:", res.data);
      setTask(res.data);
    });
  }, []);

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function addBadge(d) {
    return (
      <div className="container">
        {task.map((t) => {
          const Title = t.title;
          const date = new Date(t.deadline);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const taskDeadline =
            String(day) + "-" + String(month) + "-" + String(year);
          const calendarDate = d.format("D-M-YYYY");
          if (taskDeadline === calendarDate)
            return (
              <a
                href="/tasks"
                className="badge badge-pill badge-info badge-sm"
                data-toggle="tooltip"
                data-placement="top"
                title={Title}
              >
                T
              </a>
            );
          return null;
        })}
      </div>
    );
  }

  return (
    <div className="container-fluid calendar-panel">
      <ScrollBar
        style={{
          height: window.innerHeight - 138,
        }}
        speed={0.8}
        className="calendar-scroll-bar"
        contentClassName="calendar-panel"
        horizontal={false}
      >
        <div className="container calendar">
          <div className="container row header">
            <div
              className="col-4 arrow-left"
              onClick={() => setValue(prevMonth())}
            >
              {String.fromCharCode(171)}
            </div>
            <div className="col-4 month-label">
              {currMonthName()}
              {currYear()}
            </div>
            <div
              className="col-4 arrow-right"
              onClick={() => setValue(nextMonth())}
            >
              {String.fromCharCode(187)}
            </div>
          </div>
          <div className="calendar-body">
            <div className="row day-list">
              {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((d) => (
                <div className="col week">{d}</div>
              ))}
            </div>
            {calendar.map((week) => (
              <div className="row week">
                {week.map((day) => (
                  <div className="col day" onClick={() => setValue(day)}>
                    <div className={dayStyles(day, value)}>
                      {day.format("D")}
                      {addBadge(day)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ScrollBar>
    </div>
  );
}
