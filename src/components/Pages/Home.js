import React, { useState, useEffect } from "react";
import "./home.css";
import { Button } from "../Buttons";
import SearchBar from "../SearchBar";
// import DoctorData from "../DoctorData.json";
import TopDoctors from "./TopDoctors"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase-config";




function Home() {
  
  const [doctors, setDoctors] = useState([]);
  

  useEffect(() => {
    const doctorsCollectionRef = collection(db, "doctors");
    const getDoctors = async () => {
      const data = await getDocs(doctorsCollectionRef);
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getDoctors();
  }, []);

  return (
    <>
      <div className="searchbar">
        <h1>Find yourself a Doctor</h1>
        <SearchBar placeholder="Enter Here..." data={doctors} />
      </div>
      <div className="top-search">
        <div className="text-mostSearchDoctors">
          <h1>TOP SEARCHED DOCTORS</h1>
          <h1>
            ______________________________________________________________________
          </h1>
        </div>
      </div>
     <TopDoctors/>
      <div className="mainDiv">
        {/* First Part  */}
        <div className="mainbanner">
          <img
            className="Docimage1"
            src="https://firebasestorage.googleapis.com/v0/b/medicnet-schal123.appspot.com/o/Doc%201.jpg?alt=media&token=6d04ac9e-c0cc-49b1-b306-7b922292272a"
            alt="not found"
          />
          <p>
            I remember the feeling of joy, almost to tears, the day I discharged
            my first patient from the hospital and the tears that I can never
            hold back during the miracle of birth. That feeling is reward for
            our hard work here [in medical school] and in years that follow... I
            can't imagine being a doctor without it... I ask you to recall the
            vigor and happiness of our youths and then, imagine the beauty of
            that energy channeled into the care of another human being
          </p>
        </div>
        {/* Second Part */}
        <div className="mainbanner">
          <p>
            The site is quite easy to navigate. You will find a useful
            navigation bar and options to browse news or various topics.
            Additionally, there is an option to go through the most popular
            searches on offer. There is an abundance of data on this site but it
            is well organized into bulleted lists, subtopics, and multimedia to
            engage the users. To ensure everything is as clear as possible,
            there are links in the text that lead to even more information.
          </p>
          <img
            className="Docimage2"
            src="https://firebasestorage.googleapis.com/v0/b/medicnet-schal123.appspot.com/o/Doc%202.jpg?alt=media&token=f6880f40-91a5-4165-9797-8e4ec93d0f9b"
            alt="not found"
          />
        </div>
        {/* Third Part */}
        <div className="mainbanner">
          <iframe
            width="800"
            height="350"
            radius="2rem"
            src="https://www.youtube.com/embed/PSnSo9kYlH4?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="text-div1">
            <h1>CORONA VIRUS</h1>
            <h2>For more Detail Click Below</h2>
            <a href="https://covid.gov.pk/">
              <Button>Covid-19</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
