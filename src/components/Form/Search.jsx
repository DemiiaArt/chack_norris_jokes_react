import React from "react";
import "./Search.scss";

export default function Search({ liftSearch }) {
  return (
    <input
      id="searchindField"
      type="search"
      className="searchindField"
      placeholder="Free text search..."
      onBlur={(e) =>
        e.target.value.length > 3 || e.target.value.length < 120
          ? liftSearch(encodeURIComponent(e.target.value))
          : alert("searching may be from 3 to 120 letters")
      }
    />
  );
}
