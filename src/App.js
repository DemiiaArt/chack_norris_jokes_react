import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main.jsx";
import WrapMenu from "./components/WrapMenu.jsx";
import Favourites from "./containers/Favourites";
import { LikedJokesProvider } from "./context/LikedJokesContext.js";

import "./style/_normalise.scss";
import "./style/_base.scss";
import "./style/_icomon.scss";

function App() {
  const [openBurger, setOpenBurger] = useState(false)

 const  hadleOpenBurger = ()=> {
  setOpenBurger(prevState => !prevState)
  }
  return (
    <LikedJokesProvider>
      <div className="wrapper">
        <main>
          <Main />
          <WrapMenu wrapBurger={hadleOpenBurger}/>
          <Favourites iOpen = {openBurger}/>
        </main>
      </div>
    </LikedJokesProvider>
  );
}

export default App;
