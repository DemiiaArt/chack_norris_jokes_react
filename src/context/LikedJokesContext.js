import React, { createContext, useContext, useState } from "react";
import getFromLocalStorage, { addToLocalStorage, removeFromLocalStorage } from "../services/servisecLocalStorage.js";

const LikedJokesContext = createContext();

export function useLikedJokes() {
  return useContext(LikedJokesContext);
}

export function LikedJokesProvider({ children }) {
    // const [likedJokes, setLikedJokes] = useState([]);

  const addLikedJoke = (joke) => {
    addToLocalStorage(joke);
  };

  const removeLikedJoke = (joke)=> {
    removeFromLocalStorage(joke)
  }

  const getLikedJokes = () => {
    getFromLocalStorage("likedJokes")
  }

  return (
    <LikedJokesContext.Provider value={{ addLikedJoke, removeLikedJoke, getLikedJokes }}>
      {children}
    </LikedJokesContext.Provider>
  );
}