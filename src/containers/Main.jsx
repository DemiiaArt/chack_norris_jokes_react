import React from "react";
import "./Main.scss";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";

export default function Main() {
  return (
    <section>
      <div className="container">
        <p className="headerText">MSI 2020</p>
        <h1>Hey!</h1>
        <Form />
        <ul id="jokesList">
            <Card />
        </ul>
      </div>
    </section>
  );
}
