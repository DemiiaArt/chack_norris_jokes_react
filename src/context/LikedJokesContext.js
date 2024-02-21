import React, { createContext, useContext, useState } from "react";
// import getFromLocalStorage, { addToLocalStorage, removeFromLocalStorage } from "../services/servisecLocalStorage.js";

const LikedJokesContext = createContext();

export function useLikedJokes() {
  return useContext(LikedJokesContext);
}

export function LikedJokesProvider({ children }) {
    const [likedJokes, setLikedJokes] = useState([]);

    const addLikedJoke = (joke) => {
      setLikedJokes((prevLikedJokes) => [joke, ...prevLikedJokes]);
    };

  const removeLikedJoke = (joke) => {
    setLikedJokes((prevLikedJokes) =>
      prevLikedJokes.filter((item) => item.id !== joke.id)
    );
  };

  // const getLikedJokes = () => {
  //   likedJokes
  // }

  return (
    <LikedJokesContext.Provider value={{ likedJokes, addLikedJoke, removeLikedJoke}}>
      {children}
    </LikedJokesContext.Provider>
  );
}