import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../api/actions/usersActions";
import { Form, Input, Button } from "antd";
import "../App.css";
import ReposAPI from "./ReposAPI";

const FormAPI = () => {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [error, setError] = useState();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const fetchUsersAPI = async () => {
    const response = await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .catch((e) => {
        setError(e);
      });
    dispatch(fetchUsers(response.data));
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchUsersAPI();
    history.push(`/main?${username}`)
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <Form
            className="form"
            name="username"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onChange={(e) => setUsername(e.target.value)}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
              value={username}
            >
              <Input placeholder="Search..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <h2 className="repo-title">Repos: </h2>
          {users.users !== undefined && (
            <>
              <div className="results-container">
                {users.users.map((user) => {
                  return (
                    <>
                      <div className="row" key={user.id}>
                        <h2 className="repo-name">{user.name} </h2>
                      </div>
                      <ReposAPI details={user} />
                    </>
                  );
                })}
              </div>
            </>
          )}
          {error && <div>Error</div>}
        </div>
      </div>
    </div>
  );
};

export default FormAPI;
