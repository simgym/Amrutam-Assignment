import React from "react";
import "./SetFilter.css";

const SetFilter = () => {
  const filterItems = [
    {
      title: "Expertise",
      options: [
        "Cardiologists",
        "Dermatologists",
        "Hematologists",
        "Hair care",
      ],
    },
    {
      title: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      title: "Fees",
      options: ["0-₹500", "₹500-₹1000", "₹1000+"],
    },
    {
      title: "Languages",
      options: ["Hindi", "English"],
    },
    {
      title: "All filters",
      options: ["Reset all filters"],
    },
  ];

  return (
    <div className="setFilter-wrapper">
      {filterItems.map((item) => (
        <select key={item.title} data-key={item.title}>
          <option>{item.title}</option>
          {item.options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default SetFilter;
