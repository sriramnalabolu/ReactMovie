import React from "react";
import ReactDOM from "react-dom";

function Movie(props) {
  return (
    <div className="movie">
      <a href={props.link} target="_blank">
        <img src={props.image} />
      </a>
      <h4>{props.movie}</h4>
    </div>
  );
}

export default Movie;
