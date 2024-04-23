import React from "react";
import docPic from "../../assets/docPic.png";
import attachIcon from "../../assets/attachIcon.png";
import gradIcon from "../../assets/gradIcon.png";
import messageIcon from "../../assets/messageIcon.png";
import starIcon from "../../assets/starIcon.png";
import { Link } from "react-router-dom";
import "./DoctorInfo.css";

const DoctorInfo = () => {
  return (
    <div className="card-wrapper">
      <div className="car-details">
        <div className="img-rating-wrapper">
          <img src={docPic} />
          <div className="rating-wrapper">
            <p>4.5</p>
            <img src={starIcon} />
          </div>
        </div>

        <div className="doc-name-wrapper">
          <h1>Dr. Prerna Narang </h1>
        </div>
        <div className="doc-points-wrapper">
          <div className="expertise-wrapper">
            <img src={attachIcon} />
            <p>Male-Female infertility</p>
          </div>
          <div className="experience-wrapper">
            <img src={gradIcon} />
            <p>7 Years of Experience</p>
          </div>
          <div className="lang-wrapper">
            <img src={messageIcon} />
            <p>Speakes:English,Hindi,Marathi</p>
          </div>
        </div>

        <div className="contact-wrapper">
          <button>
            <p>Video Consultation</p>
            <p style={{ color: "#3A643B", fontWeight: 700 }}>₹800</p>
          </button>
          <button>
            <p>Chat Consultation</p>
            <p style={{ color: "#3A643B", fontWeight: 700 }}>Free</p>
          </button>
        </div>
        <div className="consult-wrapper">
          <Link style={{ color: "#3A643B", backgroundColor: "#FFFFFF" }}>
            View Profile
          </Link>
          <Link style={{ backgroundColor: "#3A643B", color: "#FFFFFF" }}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
