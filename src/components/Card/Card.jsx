import React from "react";
import "./Card.scss";
import IconHeartBtn from "../Buttons/IconHeartBtn.jsx";
import jokeIcon from "./jokeIcon.png";
import { useLikedJokes } from "../../context/LikedJokesContext.js";

export default function Card({ joke }, mini = false) {
  const { addLikedJoke, removeLikedJoke } = useLikedJokes();

  const handleLikeClick = (value) => {
    if (value) {
      joke.liked = true;
      addLikedJoke(joke);
    } else {
      joke.liked = false;
      removeLikedJoke(joke);
    }
  };

  let nowDate = new Date().getTime();
  let updateDate = Date.parse(joke.updated_at);
  let lastUpdate = Math.floor((nowDate - updateDate) / (1000 * 60 * 60));
  return (
    <li className={mini ? "card card--mini" : "card"}>
      <div className="jokeIcon">
        <img src={jokeIcon} alt="joke icon" width="20" height="18" />
      </div>
      <div className="card__body">
        <p>
          ID:
          <a href={"https://api.chucknorris.io/jokes/" + joke.id}>
            {joke.id}
            <span className="icon-link"></span>
          </a>
        </p>
        <p className="joke">{joke.value}</p>
        <div className="card__info">
          <p>
            Last update: <span>{lastUpdate}</span> hours ago
          </p>
          {(joke.categories || !mini) &&
            joke.categories.map((cat, index) => (
              <span key={index} className="tag">
                {cat}
              </span>
            ))}
        </div>
      </div>
      <IconHeartBtn
        jokeLiked={joke.liked}
        liftLike={(value) => handleLikeClick(value)}
      />
    </li>
  );
}
