import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      this.props.history.push(`users/register`);
    });
  }

  render() {
    return (
      <form className="mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mt-5 mx-auto">
              <div className="card bg-light">
                <div className="card-body">
                  <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    <div className="form-group">
                      <label htmlFor="name">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="Enter your first name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Enter your lastname name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block"
                    >
                      Register!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;