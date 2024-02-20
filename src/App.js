// import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main.jsx";
import WrapMenu from "./components/WrapMenu.jsx";
import Favourites from "./containers/Favourites";
import { LikedJokesProvider } from "./context/LikedJokesContext.js";

import "./style/_normalise.scss";
import "./style/_base.scss";
import "./style/_icomon.scss";

function App() {
  return (
    <LikedJokesProvider>
      <div className="wrapper">
        <main>
          <Main />
          <WrapMenu />
          <Favourites />
        </main>
      </div>
    </LikedJokesProvider>
  );
}

export default App;
