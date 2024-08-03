import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

function View() {
  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };


  return(
    <div>
        <h2>View Page</h2>
        <div className="row">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h2>Name</h2>
                    <p className="text-info text-3xl">{inputs.name}</p>
                    <h2>Email</h2>
                    <p className="text-success">
                        {inputs.email}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )


}
export default View;
