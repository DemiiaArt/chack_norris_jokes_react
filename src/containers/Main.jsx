import React, {useState, useEffect} from "react";
import "./Main.scss";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";
import {handleJokesFrom} from '../services/servicesAPI.js'

export default function Main() {
  const [renderJoke, setRenderJoke] = useState([])
  const [searchItem, setSearchItem] = useState()
  
  useEffect(() => {
    const fetchSearchingItem = async () => {
      try {
        const data = await handleJokesFrom(searchItem);
        setRenderJoke(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSearchingItem();
  }, [searchItem]);

  return (
    <section>
      <div className="container">
        <p className="headerText">MSI 2020</p>
        <h1>Hey!</h1>
        <Form liftSearchingItem={(value) => setSearchItem(value)} />
        {/* <Form liftSearchingItem={(value) => setRenderJoke((prevJokes) => [...prevJokes, value])} /> */}
        <ul id="jokesList">
          {renderJoke.length > 0 && (renderJoke.map(joke => <Card render ={joke}/>))}
            {/* <Card /> */}
        </ul>
      </div>
    </section>
  );
}
