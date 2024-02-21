import React, { useState } from "react";
import "./Main.scss";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";
import { handleJokesFrom } from "../services/servicesAPI.js";

export default function Main() {
  const [renderJoke, setRenderJoke] = useState([]);

  const handleSearch = async (searchItem) => {
    try {
      const data = await handleJokesFrom(searchItem);
      if (Array.isArray(data)) {
        setRenderJoke((prevState) => [...data, ...prevState]);
      } else {
        setRenderJoke((prevState) => [data, ...prevState]);
      }
    } catch (error) {
      console.error("Error fetching jokes:", error);
      alert("no joke =(");
    }
  };

  return (
    <section>
      <div className="container">
        <p className="headerText">MSI 2020</p>
        <h1>Hey!</h1>
        <Form onSearch={handleSearch} />
        <ul id="jokesList">
          {renderJoke.length > 0 &&
            renderJoke.map((joke) => <Card key={joke.id} joke={joke} />)}
        </ul>
      </div>
    </section>
  );
}
