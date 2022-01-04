import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const University = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const university = location.state.university;
  const { name, url, description } = university;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h5>{name}</h5>
      <img src={url} alt={name} />
      <p>{description.substr(0, 120)} ...</p>
    </div>
  );
};

export default University;
