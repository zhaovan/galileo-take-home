import React from "react";
import "./index.css";

export default function Header({ label }) {
  return (
    <div className="header">
      <h1 className="title">{label}</h1>
    </div>
  );
}
