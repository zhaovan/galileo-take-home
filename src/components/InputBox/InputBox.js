import React from "react";
import "./index.css";
import calIcon from "../../assets/cal.svg";

export default function InputBox({ label, placeholder, size, icon }) {
  return (
    <div className="input-container">
      <h3 className="input-label">{label}</h3>
      {size === "large" ? (
        <textarea className="input-box large" placeholder={placeholder} />
      ) : (
        <div className="input-box-container">
          <input
            type="text"
            className={`input-box`}
            placeholder={placeholder}
          />
          {icon === "cal" && <img src={calIcon} alt="cal" className="icon" />}
        </div>
      )}
    </div>
  );
}
