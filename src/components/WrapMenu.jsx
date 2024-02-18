import React from "react";
import "./WrapMenu.scss";

export default function WrapMenu() {
  return (
    <label className="burgerMenu">
      <input id="burgerIconCheck" type="checkbox" name="open-close" />
      <span className="burgerIcon"></span>
      <span>Favourite</span>
    </label>
  );
}
