import React, {useState, useEffect} from "react";
import "./Favourites.scss";
import getFromLocalStorage from "../services/servisecLocalStorage.js";
import Card from "../components/Card/Card";
// import { useLikedJokes } from '../context/LikedJokesContext.js'

export default function Favourites() {
  const [storageItems, setStorageItems] = useState(
    getFromLocalStorage("likedJokes")
  );

  useEffect(()=> {
    setStorageItems( getFromLocalStorage("likedJokes"))
  }, [])
  
  return (
    <div className="backdrop ">
      <div className="burger">
        <div className="container">
          <ul id="likedJokesList">
            {storageItems.map((joke) => (
              <Card key={joke.id} joke={joke} mini={true} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
