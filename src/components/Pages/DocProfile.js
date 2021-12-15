import React from "react";
import "./docprofile.css";
import { useLocation } from "react-router-dom";
import { Button } from "../Buttons";
import Rating from "../Rating";

function DocProfile() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="mainContainer">
      <div className="details">
        <img className="doc-avatar" src={data.image} alt="error"></img>
        <div className="text-view">
          <h1>{data.name}</h1>
          <br />
          <h2>{data.speciality}</h2>
          <br />
          <br />
          <h2>Contact: {data.number}</h2>
          <br />
          <a href={data.location} target="_blank" rel="noreferrer">
            <Button>Address</Button>
          </a>
          <div className="rating">
            <Rating />
          </div>
        </div>
        <div className="recommendedDoctors">
          <h1>Doctors Description</h1>

          <h3>{data.description}</h3>
        </div>
      </div>
    </div>
  );
}
export default DocProfile;
