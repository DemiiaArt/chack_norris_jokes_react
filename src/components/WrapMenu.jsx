import React from "react";
import "./WrapMenu.scss";

export default function WrapMenu({ wrapBurger }) {
  const handleWrapMenu = () => {
    wrapBurger();
  };

  return (
    <label className="burgerMenu">
      <input
        id="burgerIconCheck"
        type="checkbox"
        name="open-close"
        onClick={handleWrapMenu}
      />
      <span className="burgerIcon"></span>
      <span>Favourite</span>
    </label>
  );
}
