import React from "react";
import backPage1 from "../../assets/backPage1.png";
import profilePic from "../../assets/picPage1.png";
import rating from "../../assets/rating1.png";
import certifiedIcon from "../../assets/certifiedIcon.png";
import "./DocRep.css";

const DocRep = () => {
  return (
    <div className="doc-rep-wrapper">
      <div className="back-page1">
        <img src={backPage1} />
      </div>
      <div className="rep-wrapper">
        <div className="pic1-wrapper">
          <img src={profilePic} />
        </div>
        <div className="name-rating-wrapper">
          <div className="name-expertise-wrapper">
            <span>
              <p>Dr. Bruce Willis</p>
              <p>Gynecologist</p>
            </span>
            <span>
              <img src={certifiedIcon} />
            </span>
          </div>
          <div className="rating-wrapper1">
            <p>4.2</p>
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
          </div>
        </div>
        <div className="follow-wrapper">
          <span className="followers-wrapper">
            <p>Followers</p>
            <strong>850</strong>
          </span>
          <span className="following-wrapper">
            <p>Following</p>
            <strong>18K</strong>
          </span>
          <span className="posts-wrapper">
            <p>Posts</p>
            <strong>250</strong>
          </span>
        </div>
        <div className="book-appoint-wrapper">
          <button>Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DocRep;
