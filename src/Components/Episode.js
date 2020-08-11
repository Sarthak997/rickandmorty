import React from "react";

const Episode = ({ data }) => {
  return (
    <div
      className="card"
      style={{ width: "20%", display: "inline-block", margin: "2.5%" }}
    >
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
          {data.episode}
          <br />
          {data.air_date}
        </p>
        <a href={data.url} className="btn btn-primary">
          Open
        </a>
      </div>
    </div>
  );
};

export default Episode;
