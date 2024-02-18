import React from "react";
import "./Form.scss";
import Categories from './Categories.jsx'
import Search from './Search.jsx.jsx'
import GetJoke from "../Buttons/GetJoke.jsx";

export default function Form() {
  return (
    <form>
      <h2>Let’s try to find a joke for you:</h2>
      <label>
        <input type="radio" name="jokeFinder" id="random" value="random" />
        <span></span>
        <span>Random</span>
      </label>
      <label>
        <input
          type="radio"
          name="jokeFinder"
          id="categories"
          value="categories"
        />
        <span></span>
        <span>From categories</span>
      </label>
      <Categories />
      <label>
        <input type="radio" name="jokeFinder" id="search" value="search" />
        <span></span>
        <span>Search</span>
      </label>
      <Search />
      <GetJoke />
    </form>
  );
}
