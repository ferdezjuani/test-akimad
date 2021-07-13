import React from "react";
import "../App.css";

const ReposAPI = ({ details }) => {
  return (
    <div className="repo-details-container">
      <div className="details-row">
        <label className="label">Name: </label>
        <span className="value">{details.name}</span>
      </div>
      <div className="details-row">
        <label className="label">URL: </label>
        <span className="value">{details.url}</span>
      </div>
      <div className="details-row">
        <label className="label">Created at: </label>
        <span className="value">{details.url}</span>
      </div>
    </div>
  );
};

export default ReposAPI;
