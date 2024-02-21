import React from "react";
import "./Favourites.scss";
import Card from "../components/Card/Card";
import { useLikedJokes } from "../context/LikedJokesContext.js";

export default function Favourites({ iOpen }) {
  const { likedJokes } = useLikedJokes();

  return (
    <div className={iOpen ? "backdrop isOpen" : "backdrop"}>
      <div className="burger">
        <div className="container">
          <span className="favouriteHeader">Favourite</span>
          <ul id="likedJokesList">
            {likedJokes.length > 0 &&
              likedJokes.map((joke) => (
                <Card key={joke.id} joke={joke} mini={true} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
