import React, { Component } from "react";
import axios from "axios";
import ScrollBar from "react-scrollbar";
import "./AddEmployee.css";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.PanelTitle = "Employee Registration";
    this.PanelButton = "Register Employee";

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onChangeTasks = this.onChangeTasks.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      post: "",
      tasks: {
        totalTask: "",
        assignedTask: "",
        completedTask: "",
      },
      salary: 0,
      address: "",
    };

    this.url = "http://localhost:5000";
  }

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.PanelTitle = "Edit Employee";
      this.PanelButton = "Edit Employee";

      axios
        .get(this.url + "/employees/" + this.props.match.params.id)
        .then((res) => {
          this.setState({
            name: res.data.name,
            post: res.data.post,
            tasks: res.data.tasks,
            salary: res.data.salary,
            address: res.data.address,
          });
        });
    }
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangePost(e) {
    this.setState({ post: e.target.value });
  }

  onChangeTasks(e) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const property = e.target.name;
      const value = Number(e.target.value);
      if (property === "totalTask") tasks.totalTask = value;
      else if (property === "assignedTask") tasks.assignedTask = value;
      else if (property === "completedTask") tasks.completedTask = value;
      return { tasks };
    });
  }

  onChangeSalary(e) {
    this.setState({ salary: Number(e.target.value) });
  }

  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      name: this.state.name,
      post: this.state.post,
      tasks: {
        totalTask: this.state.tasks.totalTask,
        assignedTask: this.state.tasks.assignedTask,
        completedTask: this.state.tasks.completedTask,
      },
      salary: this.state.salary,
      address: this.state.address,
    };

    console.log(employee);

    if (this.props.match.params.id !== undefined) {
      axios
        .post(
          this.url + "/employees/update/" + this.props.match.params.id,
          employee
        )
        .then((res) => console.log(res.data));
    } else {
      axios
        .post(this.url + "/employees/add", employee)
        .then((res) => console.log(res.data));
    }
    window.location = "/";
  }

  render() {
    return (
      <div className="container-fluid p-3 add-employee-body-panel">
        <ScrollBar
          style={{
            height: window.innerHeight - 110,
          }}
          speed={0.8}
          className="body-scroll-bar"
          contentClassName="body-panel"
        >
          <div className="container employee-add-form">
            <h3 className="text-center p-2 add-employee-title">
              {this.PanelTitle}
            </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-employee-label">
                    Name:
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-employee-label">
                    Post:
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.post}
                  onChange={this.onChangePost}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-employee-label">
                    Task Details:
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="totalTask"
                  placeholder="Total Tasks"
                  value={this.state.tasks.totalTask}
                  onChange={this.onChangeTasks}
                />
                <input
                  type="text"
                  className="form-control"
                  name="assignedTask"
                  placeholder="Assigned Tasks"
                  value={this.state.tasks.assignedTask}
                  onChange={this.onChangeTasks}
                />
                <input
                  type="text"
                  className="form-control"
                  name="completedTask"
                  placeholder="Completed Tasks"
                  value={this.state.tasks.completedTask}
                  onChange={this.onChangeTasks}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-employee-label">
                    Salary:
                  </span>
                  <span className="input-group-text add-employee-label">₹</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.salary}
                  onChange={this.onChangeSalary}
                />
              </div>
              <div className="form-group input-group input-group-lg p-2">
                <div className="input-group-prepend">
                  <span className="input-group-text add-employee-label">
                    Address:
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group text-center">
                <input
                  type="submit"
                  value={this.PanelButton}
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
