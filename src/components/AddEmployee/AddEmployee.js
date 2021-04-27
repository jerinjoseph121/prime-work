import React, { Component } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import ScrollBar from "react-scrollbar";
import "./AddEmployee.css";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onChangeTotalTask = this.onChangeTotalTask.bind(this);
    this.onChangeAssignedTask = this.onChangeAssignedTask.bind(this);
    this.onChangeCompletedTask = this.onChangeCompletedTask.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      post: "",
      tasks: {
        totalTask: 0,
        assignedTask: 0,
        completedTask: 0,
      },
      salary: 0,
      address: "",
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

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangePost(e) {
    this.setState({ post: e.target.value });
  }

  onChangeTotalTask(e) {
    this.setState({ tasks: { totalTask: e.target.value } });
  }
  onChangeAssignedTask(e) {
    this.setState({ tasks: { assignedTask: e.target.value } });
  }
  onChangeCompletedTask(e) {
    this.setState({ tasks: { completedTask: e.target.value } });
  }

  onChangeSalary(e) {
    this.setState({ salary: e.target.value });
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
        assignedTask: this.state.assignedTask,
        completedTask: this.state.completedTask,
      },
      salary: this.state.salary,
      address: this.state.address,
    };

    console.log(employee);

    const url = "http://localhost:5000";

    axios
      .post(url + "/employees/add", employee)
      .then((res) => console.log(res.data));

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
              Employee Registration
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
                  placeholder="Total Tasks"
                  onChange={this.onChangeTotalTask}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Assigned Tasks"
                  onChange={this.onChangeAssignedTask}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Completed Tasks"
                  onChange={this.onChangeCompletedTask}
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
                  value="Register Employee"
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
