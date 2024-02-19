import React from "react";
import "./Card.scss";
import IconHeartBtn from '../Buttons/IconHeartBtn.jsx'

export default function Card() {
  return (
    <li className="card">
      <div className="jokeIcon">
        <img src="./img/jokeIcon.png" alt="joke icon" width="20" height="18" />
      </div>
      <div className="card__body">
        <p>
          ID:
          <a href="/">
            XNaAxUduSw6zANDaIEab7A <span className="icon-link"></span>
          </a>
        </p>
        <p className="joke">
          No one truly knows who's Chuck Norris' real father. No one is
          biologically strong enough for this. He must've conceived himself.
        </p>
        <div className="card__info">
          <p>
            Last update: <span>1923 hours ago</span>
          </p>
          <span className="tag">celebrity</span>
        </div>
      </div>
      <IconHeartBtn />
    </li>
  );
}
