import React from "react";
import { Link } from "react-router-dom";
const Card = ({ university }) => {
  const { name, url, description } = university;
  return (
    <Link
      to={`/university/${name}`}
      state={{
        university: university,
      }}
    >
      <div className="university__card">
        {url && <img src={url} alt={name} width={100} height={100} />}
        <h5>{name && name}</h5>
        <p>{description && description.substr(0, 120)} ...</p>
      </div>
    </Link>
  );
};

export default Card;
