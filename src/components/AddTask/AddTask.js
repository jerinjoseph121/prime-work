import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScrollBar from "react-scrollbar";
import "./AddTask.css";

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onChangeEmployeesAssigned = this.onChangeEmployeesAssigned.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      summary: "",
      employeesAssigned: [],
      startDate: new Date(),
      deadline: new Date(),
    };
  }

  //   componentDidMount() {
  //     axios.get("http://localhost:5000/users/").then((res) => {
  //       if (res.data.length > 0) {
  //         this.setState({
  //           users: res.data.map((user) => user.username),
  //           username: res.data[0].username,
  //         });
  //       }
  //     });
  //   }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeSummary(e) {
    this.setState({ summary: e.target.value });
  }

  onChangeEmployeesAssigned(e) {
    console.log(e);
    // this.setState({ employeesAssigned: e.target.value });
  }

  onChangeStartDate(date) {
    this.setState({ startDate: date });
  }
  onChangeDeadline(date) {
    this.setState({ deadline: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      title: this.state.title,
      summary: this.state.summary,
      employeesAssigned: this.state.employeesAssigned,
      startDate: this.state.startDate,
      deadline: this.state.deadline,
    };

    console.log(task);

    const url = "http://localhost:5000";

    axios.post(url + "/tasks/add", task).then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    const arr = ["hello", "wassap", "how are you"];
    return (
      <div className="container-fluid p-3 add-task-body-panel">
        <ScrollBar
          style={{
            height: window.innerHeight - 110,
          }}
          speed={0.8}
          className="body-scroll-bar"
          contentClassName="body-panel"
        >
          <div className="container add-task-form">
            <h3 className="text-center p-2 add-task-title">Task</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-task-label">
                    Title:
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-task-label">
                    Summary:
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.summary}
                  onChange={this.onChangeSummary}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-task-label">
                    Employees to be Assigned:
                  </span>
                  <Select
                    className="add-task-list"
                    isMulti
                    options={arr.map((employee) => {
                      return { value: employee, label: employee };
                    })}
                    onChange={this.onChangeEmployeesAssigned}
                  />
                </div>
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-task-label">
                    Start Date:
                  </span>
                  <div>
                    <DatePicker
                      className="add-task-date-input"
                      selected={this.state.startDate}
                      onChange={this.onChangeStartDate}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-task-label">
                    Deadline:
                  </span>
                  <div>
                    <DatePicker
                      className="add-task-date-input"
                      selected={this.state.deadline}
                      onChange={this.onChangeDeadline}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <input
                  type="submit"
                  value="Add Task"
                  className="btn btn-primary btn-large"
                />
              </div>
            </form>
          </div>
        </ScrollBar>
      </div>
    );
  }
}
