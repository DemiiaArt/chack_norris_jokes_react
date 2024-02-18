import './App.css';
import Main from './containers/Main.jsx'
import WrapMenu from './components/WrapMenu.jsx'
import Favourites from './containers/Favourites';

import './style/_normalise.scss'
import './style/_base.scss'
import './style/_icomon.scss'

function App() {
  return (
    <div className="wrapper">
      <main>
        <Main /> 
        <WrapMenu />
        <Favourites />
      </main>
    </div>
  );
}

export default App;
