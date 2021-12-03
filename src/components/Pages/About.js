import React, { Component } from "react";
import "../Pages/about.css";

import Image from "../Images/image1.jpg";
class About extends Component {
  render() {
    return (
      <div className="MainDiv">
        <div>
          <h1>About US</h1>
          <h2>
            ______________________________________________________________________________________________________
          </h2>
        </div>
        <div className="mainbanner">
          <p>
            The site is quite easy to navigate. You will find a useful
            navigation bar and options to browse news or various topics.
            Additionally, there is an option to go through the most popular
            searches on offer. There is an abundance of data on this site but it
            is well organized into bulleted lists, subtopics, and multimedia to
            engage the users. To ensure everything is as clear as possible,
            there are links in the text that lead to even more information.
            Engage With Other Doctors They have a discussion board where doctors
            and patients can freely interact. This can help a doctor to provide
            insight to patients and gain some by following various discussions.
            For doctors who wish to gain a summary of a new medical condition,
            you can quickly look it up on WebMD. Besides that, you can use their
            database of drugs to gain insight on any new drugs released into the
            market. Most of their articles usually contain links to
            peer-reviewed facts that you can use to make informed conclusions.
            From a design perspective, visual design can be a bit overwhelming
            at times. All the various elements appear to vie for the user’s
            attention. Thus, it is important to have a specific topic in mind to
            avoid losing focus when using the site. Despite this, you can expect
            to get high-quality information from this site. Articles are well
            referenced and all the information found here is written and
            reviewed by medical experts.
          </p>
          <img className="image1" src={Image} alt="not found" />
        </div>
      </div>
    );
  }
}

export default About;
