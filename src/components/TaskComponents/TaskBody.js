import React, { useState } from "react";
import ScrollBar from "react-scrollbar";
import TaskInfo from "./TaskInfo";
import { employeeData } from "../../data/EmployeeData";
import { taskData } from "../../data/TaskData";
import "./TaskBody.css";

export default function TaskBody(props) {
  let defaultTask = -1;

  const [selectedTask, setSelectedTask] = useState(defaultTask);

  const handleSelection = (val) => {
    setSelectedTask(val);
  };

  return (
    <div className="container-fluid p-0 task-body-panel">
      <ScrollBar
        style={{
          height: window.innerHeight - 78,
        }}
        speed={0.8}
        className="task-body-scroll-bar"
        contentClassName="task-body-panel"
      >
        <div className="employee-name-label">{employeeData[props.id].name}</div>
        <hr className="task-details-seperator" />
        <div className="container p-0 task-list">
          {taskData.map((task_info) => {
            let isSelected;
            if (task_info.employee_assigned.includes(props.id)) {
              if (task_info.id === selectedTask) {
                isSelected = true;
              } else isSelected = false;
              return (
                <TaskInfo
                  key={task_info.id}
                  taskInfo={task_info}
                  selected={isSelected}
                  changeSelection={handleSelection}
                />
              );
            }
            return null;
          })}
        </div>
      </ScrollBar>
    </div>
  );
}
