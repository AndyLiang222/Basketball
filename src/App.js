import './App.css';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components'; 
import PlayersPage from './PlayersPage';
import LandingPage  from './LandingPage';
import PlayerProfile from './PlayerProfile';

function App() {
  return (
    <Router>
        <div className='App'>
            <Routes>
                 <Route exact path='/' element={<LandingPage/>}></Route>
                 <Route exact path='/players' element = {<PlayersPage></PlayersPage>}></Route>
                 <Route exact path='/player/:id' element={<PlayerProfile/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
