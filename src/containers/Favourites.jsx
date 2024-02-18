import React from "react";
import "./Favourites.scss";

export default function Favourites() {
  return (
    <div className="backdrop ">
      <div className="burger">
        <div className="container">
          <ul id="likedJokesList">
            {/* <li className="card card--mini">
                                <span>icon</span>
                                <div className="card__body">
                                    <p>ID: <a href="#">XNaAxUduSw6zANDaIEab7A <span className="icon-link"></span></a></p>
                                    <p className="joke">No one truly knows who's Chuck Norris' real father.
                                        No one is biologically strong enough for this. He must've conceived himself.</p>
                                    <div className="card__info">
                                        <p>Last update: <span>1923 hours ago</span></p>
                                    </div>
                                </div>
                                <button className="likeIcon icon-heart"></button>
                            </li>  */}
          </ul>
        </div>
      </div>
    </div>
  );
}
