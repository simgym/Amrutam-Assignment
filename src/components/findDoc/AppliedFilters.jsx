import React from "react";
import "./AppliedFilters.css";
import crossIcon from "../../assets/cross.png";

const AppliedFilters = () => {
  const appliedItems = ["Hair care", "Female", "Rs.0-Rs.500", "Hindi"];

  return (
    <div className="applied-filters-wrapper">
      {appliedItems.map((item, index) => (
        <span key={index} className="applied-filter-item">
          <p>{item}</p>
          <img src={crossIcon} />
        </span>
      ))}
    </div>
  );
};

export default AppliedFilters;
