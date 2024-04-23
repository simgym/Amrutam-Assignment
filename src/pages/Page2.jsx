import { useState } from "react";
import SetFilter from "../components/findDoc/SetFilter";
import AppliedFilters from "../components/findDoc/AppliedFilters";
import DoctorInfo from "../components/findDoc/DoctorInfo";
import backgroundPage2 from "../assets/backgroundPage2.png";
import "./Page2.css";

const Page2 = () => {
  // const [expertise, setExpertise] = useState("");
  // const [gender, setGender] = useState("");
  // const [fee, setFee] = useState("");
  // const [language, setLanguage] = useState("");

  return (
    <div>
      <img className="background-page2" src={backgroundPage2} />
      <SetFilter />
      <AppliedFilters />
      <div className="all-cards-wrapper">
        <DoctorInfo />
        <DoctorInfo />
        <DoctorInfo />
      </div>
    </div>
  );
};

export default Page2;
