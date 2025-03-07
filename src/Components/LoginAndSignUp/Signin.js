﻿import React, { Component } from "react";
import "../Forms/Form.css";
var styles = {
  color: "red",
  fontSize: 15,
  fontWeight: "lighter",
  marginLeft: "3%",
};
export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      roll_no: null,
      errormessage: "",
      errormessage1: "",
    };
  }
  handleClick() {
    alert("Click happened");
  }
  myChangeHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";


    if (nam === "username") {
      if (val == "") {
        err = <strong>⚠Name Should not be blank</strong>;
      }
    }
    this.setState({ errormessage: err });

    this.setState({ [nam]: val });
  };
  myPasswordHandler = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    let err1 = "";

    if (nam === "password") {
      if (val == "") {
        err = <strong>⚠Password Should not be blank</strong>;
      }
    }
    this.setState({ errormessage1: err });

    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div className="container s1">
        <center>
          <form  onSubmit={this.handleClick}>
            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label className="label_text" htmlFor="username">
                  <b>Username</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                 
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Enter your username"
                  onChange={this.myChangeHandler}
                />
              </div>
              <div style={styles}>{this.state.errormessage}</div>
            </div>

            <div className="row form_submit">
              <div className="col-lg-3 simple">
                <label className="label_text" htmlFor="password">
                  <b>Password</b>
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  onChange={this. myPasswordHandler}
                />
              </div>
               <div style={styles}>{this.state.errormessage1}</div>
            </div>
            <button type="submit" className="button button1">
              Submit
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default Signin;
