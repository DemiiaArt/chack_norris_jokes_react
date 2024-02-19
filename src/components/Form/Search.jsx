import React from "react";
import "./Search.scss";

export default function Search({liftSearch}) {
  return (
    <input
      id="searchindField"
      type="search"
      className="searchindField"
      placeholder="Free text search..."
      onBlur ={(e) => liftSearch(e.target.value)}
    />
  );
}
