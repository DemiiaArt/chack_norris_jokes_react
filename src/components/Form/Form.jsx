import React, { useState} from "react";
import "./Form.scss";
import Categories from "./Categories.jsx";
import Search from "./Search.jsx";
import GetJoke from "../Buttons/GetJoke.jsx";
// import {submitHandler} from '../../services/servicesAPI.js'

export default function Form({onSearch}) {
  const [showFields, setShowFields] = useState("random");
  const [searchInput, setSearchInput] =  useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (showFields === "categories") onSearch('/random?category=' + searchInput)
    if (showFields === "random") onSearch('/random')
    if (showFields === "search") onSearch('/search?query=' + searchInput)
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
        <Categories liftCategory={(value) => setSearchInput( value)} />
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
      {showFields === "search" ? <Search liftSearch={(value) => setSearchInput( value)}/> : null}

      <GetJoke/>
    </form>
  );
}
