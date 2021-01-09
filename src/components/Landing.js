import React, { Component } from "react";

class Landing extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200,
    };

    return (
      <div className="container text-center family-sans">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + "em",
              }}
            >
              Attendance Log
            </div>
            <p className="lead family-sans" style={biggerLead}>
              This simple app creates meetings, allows people to check in.{" "}
            </p>

            {user == null && (
              <span>
                <a href="/register" className="btn btn-outline-primary mr-2">
                  Register
                </a>
                <a href="/login" className="btn btn-outline-primary mr-2">
                  Log In
                </a>
              </span>
            )}
            {user && (
              <a href="/meetings" className="btn btn-primary">
                Meetings
              </a>
            )}
          </div>{" "}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Landing;
