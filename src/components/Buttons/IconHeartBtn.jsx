import React, { useState } from "react";
import "./IconHeartBtn.scss";

export default function IconHeartBtn({jokeLiked, liftLike }) {
  const [like, setLike] = useState(jokeLiked);

  const handleChengeLike = () => {
    const updatedLike = !like;
    setLike(updatedLike);
    liftLike(updatedLike);
  };
  return (
    <button
      onClick={handleChengeLike}
      className={like ? "icon-heart" : "icon-Vector"}
      id="likeIcon"
    ></button>
  );
}
