
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Engineer from './pages/Engineer';
import Hardware from './pages/Engineer/Hardware';
import Software from './pages/Engineer/Software';
import Founder from './pages/Founder';
import DOKO from './pages/Founder/DOKO';
import ELOS from './pages/Founder/ELOS';
import Artist from './pages/Artist';
import FineArt from './pages/Artist/FineArt';
import Film from './pages/Artist/Film';
import Zanura from './pages/Artist/Films/Zanura';
import ULove from './pages/Artist/Films/ULove';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Components.css';


import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
      {/* <Border/> */}
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/founder" exact component={Founder} />
        <Route path="/founder/doko" exact component={DOKO} />
        <Route path="/founder/elos" exact component={ELOS} />
        <Route path="/engineer" exact component={Engineer} />
        <Route path="/engineer/hardware" exact component={Hardware} />
        <Route path="/engineer/software" exact component={Software} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/artist/fine-art" exact component={FineArt} />
        <Route path="/artist/film" exact component={Film} />
        <Route path="/artist/film/unconditional-love" exact component={ULove} />
        <Route path="/artist/film/zanura" exact component={Zanura} />

       
      </Switch>
      {/* <Border/> */}
      <Footer/>
    </div>
  </Router>
  );
}



export default App;
