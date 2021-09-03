import React, { Component } from "react";
import "./Register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: {
        id: 10,

        name: "",
        username: "",
        email: "",

        phone: "",
        website: "",
      },
    };
  }

  updata = (ele) => {
    if (ele.target.name === "name") {
      this.setState({
        res: {
          ...this.state.res,
          name: ele.target.value,
        },
      });
    }
    if (ele.target.name === "phone") {
      this.setState({
        res: {
          ...this.state.res,
          phone: ele.target.value,
        },
      });
    }
    if (ele.target.name === "website") {
      this.setState({
        res: {
          ...this.state.res,
          website: ele.target.value,
        },
      });
    }
    if (ele.target.name === "email") {
      this.setState({
        res: {
          ...this.state.res,
          email: ele.target.value,
        },
      });
    }
  };
  handel = () => {
    let state = this.state.res;
    if (state.name.trim() === "") {
      alert("enter the name");
    }
    if (state.email.trim() === "") {
      alert("enter the email");
    }
    if (state.website.trim() === "") {
      alert("enter the website");
    }
    if (state.phone.trim() === "") {
      alert("enter the phone");
    }
    if (
      state.name.trim() === "" ||
      state.email.trim() === "" ||
      state.website.trim() === "" ||
      state.phone.trim() === ""
    ) {
    } else {
      this.setState({
        res: {
          ...this.state.res,
          id: this.state.res.id + 1,
        },
      });
      alert("Done");
      return this.state.res;
    }
  };
  render() {
    return (
      <div className="Register fs-3 text-white">
        <div className="container ">
          <div className="m-auto w-75 pt-5">
            <div className="mb-3 col-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={this.updata}
                className="form-control"
                id="formGroupExampleInput"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Email
              </label>
              <input
                onChange={this.updata}
                type="email"
                className="form-control"
                name="email"
                id="formGroupExampleInput2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="formGroupExampleInput3" className="form-label">
                Website
              </label>
              <input
                type="text"
                onChange={this.updata}
                name="website"
                className="form-control"
                id="formGroupExampleInput3"
                placeholder="Enter your website"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="formGroupExampleInput4" className="form-label">
                Phone
              </label>
              <input
                type="text"
                onChange={this.updata}
                className="form-control"
                name="phone"
                id="formGroupExampleInput4"
                placeholder="Enter your phone"
              />
            </div>
            <button
              className="btn btn-lg text-white btn-outline-primary"
              onClick={() => this.props.add(this.handel())}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
