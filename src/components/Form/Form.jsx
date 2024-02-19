import React, { useState, useEffect } from "react";
import "./Form.scss";
import Categories from "./Categories.jsx";
import Search from "./Search.jsx";
import GetJoke from "../Buttons/GetJoke.jsx";
// import {submitHandler} from '../../services/servicesAPI.js'

export default function Form({liftSearchingItem}) {
  const [showFields, setShowFields] = useState("random");
  const [currentSerching, setCurrentSerching] =  useState();
  // const [search, setSearch] =  useState();
  const [searchingItem, setSearchingItem] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchingItem(currentSerching)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Let’s try to find a joke for you:</h2>
      <label>
        <input
          type="radio"
          name="jokeFinder"
          id="random"
          value="random"
          checked={showFields === "random"}
          onChange={() => setShowFields("random")}
        />
        <span></span>
        <span>Random</span>
      </label>
      <label>
        <input
          type="radio"
          name="jokeFinder"
          id="categories"
          value="categories"
          onChange={() => setShowFields("categories")}
        />
        <span></span>
        <span>From categories</span>
      </label>
      {showFields === "categories" ? (
        <Categories liftCategory={(value) => setCurrentSerching("/random?category=" + value)} />
      ) : (
        null
      )}
      <label>
        <input
          type="radio"
          name="jokeFinder"
          id="search"
          value="search"
          onChange={() => setShowFields("search")}
        />
        <span></span>
        <span>Search</span>
      </label>
      {showFields === "search" ? <Search liftSearch={(value) => setCurrentSerching("/search?query=" +  value)}/> : null}

      <GetJoke />
    </form>
  );
}
