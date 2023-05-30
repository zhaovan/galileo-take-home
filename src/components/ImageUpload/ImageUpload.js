import React from "react";
import "./index.css";
import AddButton from "../../assets/add.svg";

export default function ImageUpload() {
  return (
    <div className="image-upload-container">
      <p className="text">Upload Image</p>
      <img src={AddButton} alt="add button" />
    </div>
  );
}
