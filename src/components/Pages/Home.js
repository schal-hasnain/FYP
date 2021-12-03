import React, { Component } from "react";
import "./home.css";
import DocImage1 from "../Images/Doc 1.jpg";
import DocImage2 from "../Images/Doc 2.jpg";
import { Button } from "../Buttons";

class Home extends Component {
  render() {
    return (
      <div className="mainDiv">
        {/* First Part  */}
        <div className="mainbanner">
          <img className="Docimage1" src={DocImage1} alt="not found" />
          <div className="text-div1">
            <h1>GET STARTED</h1>
            <h2>Find yourself a Doctor</h2>
            <a href="/signin">
              <Button>Sign In</Button>
            </a>
          </div>
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
          <img className="Docimage2" src={DocImage2} alt="not found" />
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
    );
  }
}

export default Home;
