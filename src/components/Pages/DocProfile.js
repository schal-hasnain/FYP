import React, { useState, useEffect } from "react";
import "./docprofile.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Rating from "../Rating";
import Card from "../Card";
import { db, auth } from "../../config/Firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import MapImage from "../../images/Map.JPG";
import { async } from "@firebase/util";
import ratingAvatar from "../../images/profile.png";


function DocProfile() {
  const location = useLocation();
  let history = useHistory();
  const { data } = location.state;
  const [doctors, setDoctors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState([]);
  const [userreview, setUserreview] = useState([]);
  const searchWord = data.speciality;
  const doctId = data.docId;

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,userreview,data.docId)
    await addDoc(collection(db, "appreviews"), {
      name: name,
      review: userreview,
      docId: doctId,
    }).then(alert("Review Submitted ✅"));

    window.location.reload();
  };
  useEffect(() => {
    const doctorsCollectionRef = collection(db, "doctors");
    const getDoctors = async () => {
      const data = await getDocs(doctorsCollectionRef);
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDoctors();

    const reviewsCollectionRef = collection(db, "appreviews");
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReviews();
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
              <h2>Speciality: {data.speciality}</h2>
              <br />
              <br />
              <h2>Timings: {data.timings}</h2>
              <br />
              <br />
              <h2>Contact: {data.number}</h2>
              <br />
              <br />
              <a href={data.location} target="_blank" rel="noreferrer">
                <img className="map-image" src={MapImage} alt="error"></img>
              </a>
              <br />
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
              <h2>Speciality: {data.speciality}</h2>
              <br />
              <br />
              <h2>Timings: {data.timings}</h2>
              <br />
              <br />
              <h2>Contact: {data.number}</h2>
              <br />
              <br />
              <a href={data.location} target="_blank" rel="noreferrer">
                <img className="map-image" src={MapImage} alt="error"></img>
              </a>
              <br />
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
        <div className="Reviews">
          <h1>Reviews</h1>

          {reviews.map((review) => {
            if (review.docId === doctId)
              return (
                <div className="reviews-container">
                  <div className="review-name-avatar">
                    <img className="rating-avatar" src={ratingAvatar}></img>
                    <h5>Name: {review.name}</h5>
                  </div>
                  <h5>Comment: {review.review}</h5>
                  <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                </div>
              );
          })}
        </div>
        <div class="contactme" id="contact">
          <div class="contactOverlay">
            <div class="container">
              <div class="form">
                <form action="">
                  <div class="formWord">
                    <h2>Review</h2>
                    <span>Full Name</span>
                    <br />
                    <input
                      class="input100"
                      type="text"
                      name="fullName"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                    <br />
                    <span>Rating</span>
                    <br /> <br />
                    <Rating />
                  </div>
                  <div class="formWord">
                    <span>Review</span>
                    <br />
                    <textarea
                      onChange={(e) => {
                        setUserreview(e.target.value);
                      }}
                      name="message"
                      required
                    ></textarea>
                    <br />
                    <button onClick={handleSubmit}>SUBMIT</button>
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
