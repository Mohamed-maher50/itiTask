import React from "react";
import { Link } from "react-router-dom";
function Info(props) {
  const id = props.match.params.id;
  let UserData = props.data.filter((user) => {
    if (user.id === id) {
      return user;
    }
  });

  return (
    <div style={{ height: "100vh", backgroundColor: "#121212eb" }}>
      <div className="container">
        <div className="justify-content-center">
          {UserData.map((item, index) => {
            return (
              <div key={index} className="d-inline-block mt-5 col-md-4">
                <div class="card ">
                  <div className="card-body">
                    <h3 c="card-title">{item.name}</h3>

                    <h6>
                      website: <span>{item.website}</span>
                    </h6>
                    <h6>
                      phone: <span>{item.phone}</span>
                    </h6>
                    <h6>
                      email: <span>{item.email}</span>
                    </h6>
                    <Link to={`users/${item.id}`}>
                      <a href="#" className="btn btn-outline-dark">
                        call me
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Info;
