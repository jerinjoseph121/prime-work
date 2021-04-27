import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ScrollBar from "react-scrollbar";
import "./EmployeeBody.css";

export default function Body(props) {
  const [employeeName, setEmployeeName] = useState("");
  const [employeePost, setEmployeePost] = useState("");
  const [employeeTotalTask, setEmployeeTotalTask] = useState(0);
  const [employeeAssignedTask, setEmployeeAssignedTask] = useState(0);
  const [employeeCompletedTask, setEmployeeCompletedTask] = useState(0);
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");

  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(url + "/employees/" + String(props.id))
      .then((res) => {
        setEmployeeName(res.data.name);
        setEmployeePost(res.data.post);
        setEmployeeTotalTask(res.data.tasks.totalTask);
        setEmployeeAssignedTask(res.data.tasks.assignedTask);
        setEmployeeCompletedTask(res.data.tasks.completedTask);
        setEmployeeSalary(res.data.salary);
        setEmployeeAddress(res.data.address);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  function editTask(task) {
    const assignedEmp = task.employeesAssigned;
    const filteredAssignedEmp = assignedEmp.filter(
      (empId) => empId !== props.id
    );
    console.log("Filtered:", filteredAssignedEmp);
    if (filteredAssignedEmp.length === 0) {
      axios
        .delete(url + "/tasks/" + task._id)
        .then((res) => console.log(res.data));
    } else {
      const newTask = {
        title: task.title,
        summary: task.summary,
        employeesAssigned: filteredAssignedEmp,
        startDate: task.startDate,
        deadline: task.deadline,
      };
      axios
        .post(url + "/tasks/update/" + task._id, newTask)
        .then((res) => console.log(res.data));
    }
  }

  function deleteEmployee() {
    axios
      .get(url + "/tasks/")
      .then((res) => {
        console.log("Danger");
        const taskData = res.data;
        const filteredTaskData = taskData.filter((task) =>
          task.employeesAssigned.includes(props.id)
        );
        filteredTaskData.map((task) => editTask(task));

        return axios.delete(url + "/employees/" + props.id);
      })
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  return (
    <div className="container-fluid p-0 body-panel">
      <ScrollBar
        style={{
          height: window.innerHeight - 78,
        }}
        speed={0.8}
        className="body-scroll-bar"
        contentClassName="body-panel"
      >
        <div className="container employee-card">
          <div className="container employee-info-section">
            <div className="container employee-name-label">{employeeName}</div>
            <hr className="employee-details-seperator" />
            <div className="container employee-details">
              <div>Full Name: {employeeName}</div>
              <div>Post: {employeePost}</div>
              <div>Salary: {employeeSalary}</div>
              <div>Address: {employeeAddress}</div>
            </div>
          </div>
          <hr className="employee-section-seperator" />
          <div className="container employee-task-section">
            <div className="container task-label">Tasks</div>
            {/* <hr className="employee-details-seperator" /> */}
            <div className="container employee-task-details">
              <div>Assigned: {employeeAssignedTask}</div>
              <div>Completed: {employeeCompletedTask}</div>
              <div>Total: {employeeTotalTask}</div>
            </div>
          </div>
          <hr className="employee-details-seperator" />
          <div className="employee-btn-section row">
            <div className="col-6 delete-btn">
              <button
                className="btn btn-lg btn-outline-danger"
                onClick={() => deleteEmployee()}
              >
                Delete
              </button>
            </div>
            <div className="col-6 update-btn">
              <Link to={"/employees/update/" + props.id}>
                <button className="btn btn-lg btn-outline-warning">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollBar>
    </div>
  );
}
