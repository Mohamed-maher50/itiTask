import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./User.css";
class Users extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div className="Users">
          <div className="container">
            <div className="row d-felx justify-content-start">
              {this.props.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-inline-block justify-content-start mb-3 col-md-4"
                  >
                    <div className="card ">
                      <div className="card-body">
                        <h3 className="card-title">{item.name}</h3>

                        <h6>
                          website: <span>{item.website}</span>
                        </h6>
                        <h6>
                          phone: <span>{item.phone}</span>
                        </h6>
                        <h6>
                          email: <span>{item.email}</span>
                        </h6>
                        <Link
                          className="btn btn-outline-dark"
                          to={`users/${item.id}`}
                        >
                          call me
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
