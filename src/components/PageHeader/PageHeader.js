import React from "react";
import "./index.css";
export default function PageHeader({ title, description }) {
  return (
    <div className="page-header">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}
