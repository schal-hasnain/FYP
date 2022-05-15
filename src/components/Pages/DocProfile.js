import React, { useState, useEffect } from "react";
import "./docprofile.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "../Buttons";
// import Rating from "../Rating";
import Card from "../Card";
import { db, auth } from "../../config/Firebase-config";
import { collection, getDocs } from "firebase/firestore";

function DocProfile() {
  const location = useLocation();
  let history = useHistory();
  const { data } = location.state;
  const [doctors, setDoctors] = useState([]);
  const searchWord = data.speciality;

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  const handleSubmit = event => {
    event.preventDefault();

    alert('Review Submitted ✅');
  };
  useEffect(() => {
    const doctorsCollectionRef = collection(db, "doctors");
    const getDoctors = async () => {
      const data = await getDocs(doctorsCollectionRef);
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDoctors();
  }, []);

  if (isUserSignedIn === false) {
    return (
      <>
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
              {/* <div className="rating">
                <Rating />
              </div> */}
            </div>
            <div className="recommendedDoctors">
              <h1>Doctors Description</h1>

              <h3>{data.description}</h3>
            </div>
          </div>
        </div>
        <div className="Reviews">
          <h1>Recommended Doctors For You</h1>
        </div>
        <div className="cards">
          {doctors.map((doctor) => {
            if (doctor.speciality === searchWord && doctor.name !== data.name) {
              return (
                <div
                  onClick={() => {
                    history.push("/docprofile", { data: doctor });
                  }}
                >
                  <Card
                    bordred={false}
                    style={{ width: "300px" }}
                    cover={<img src={doctor.image} alt="error" />}
                    title={
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <h4>
                          {" "}
                          {doctor.name}
                          {<br />}
                          {<br />}
                          {/* {doctor.description.split("of certifications")[0]} */}
                          {<br />}
                          {<br />}
                          Contact: {doctor.number}
                          {<br />}
                        </h4>
                      </div>
                    }
                  ></Card>
                </div>
              );
            }
            return "";
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
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
            </div>
            <div className="recommendedDoctors">
              <h1>Doctors Description</h1>

              <h3>{data.description}</h3>
            </div>
          </div>
        </div>
        <div className="Reviews">
          <h1>Recommended Doctors For You</h1>
        </div>
        <div className="cards">
          {doctors.map((doctor) => {
            if (doctor.speciality === searchWord && doctor.name !== data.name) {
              return (
                <div
                  onClick={() => {
                    history.push("/docprofile", { data: doctor });
                  }}
                >
                  <Card
                    bordred={false}
                    style={{ width: "300px" }}
                    cover={<img src={doctor.image} alt="error" />}
                    title={
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <h4>
                          {" "}
                          {doctor.name}
                          {<br />}
                          {<br />}
                          {/* {doctor.description.split("of certifications")[0]} */}
                          {<br />}
                          {<br />}
                          Contact: {doctor.number}
                          {<br />}
                        </h4>
                      </div>
                    }
                  ></Card>

                  <br />
                  <br />
                  <br />
                </div>
              );
            }
            return "";
          })}
        </div>
        <div class="contactme" id="contact">
          <div class="contactOverlay">
            <div class="container">
              <div class="form">
                <form action="" onSubmit={handleSubmit}>
                  <div class="formWord">
                    <h2>Review</h2>
                    <span>Full Name</span>
                    <br />
                    <input
                      class="input100"
                      type="text"
                      name="fullName"
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input class="input100" type="text" name="phone" required />
                   
                  </div>
                  <div class="formWord">
                    <span>Review</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button>SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default DocProfile;
