import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollBar from "react-scrollbar";
import TaskInfo from "./TaskInfo";
// import { employeeData } from "../../data/EmployeeData";
// import { taskData } from "../../data/TaskData";
import "./TaskBody.css";

export default function TaskBody(props) {
  let defaultTask = -1;

  const [selectedTask, setSelectedTask] = useState(defaultTask);

  const [employeeName, setEmployeeName] = useState("");
  const [task, setTask] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);

  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(url + "/employees/" + String(props.id))
      .then((res) => {
        setEmployeeName(res.data.name);
      })
      .catch((err) => console.log(err));
    axios
      .get(url + "/tasks")
      .then((res) => {
        console.log(res.data);
        setTask(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(url + "/employees")
      .then((res) => {
        setEmployeeList(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const handleSelection = (val) => {
    setSelectedTask(val);
  };

  function taskAssign() {
    const TasksAssigned = task.map((task_info) => {
      let isSelected;
      if (task_info.employeesAssigned.includes(props.id)) {
        if (task_info._id === selectedTask) {
          isSelected = true;
        } else isSelected = false;
        return (
          <TaskInfo
            key={task_info._id}
            taskInfo={task_info}
            employeeList={employeeList}
            selected={isSelected}
            changeSelection={handleSelection}
          />
        );
      }
      return null;
    });

    if (!TasksAssigned.every((element) => element === null)) {
      return TasksAssigned;
    } else {
      return <div className="text-center no-task-label">No Tasks Assigned</div>;
    }
  }

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
        <div className="employee-name-label">{employeeName}</div>
        <hr className="task-details-seperator" />
        <div className="container p-5 task-list">{taskAssign()}</div>
      </ScrollBar>
    </div>
  );
}
