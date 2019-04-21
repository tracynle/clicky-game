import React, { Component } from 'react';
import './App.css';
import SculptureCard from "./components/Card";
import sculptures from "./cards.json";
import Wrapper from "./components/Wrapper";

// create function that will shuffle (optional)
// state to contain the data: paintings, score: 0, topScore: 0, 
// sculptureClicked: [], clickedWrong:0, clickedRight:0,
// in render() : put divs for clickedWrong and clickedRight
class App extends Component {
  state = { 
    sculptures,
    score: 0,
    topScore: 0,
    sculptureClicked: [],
    clickedWrong: 0,
    clickedRight: 0
  }
  
  render() {
    return (
      <div class="container">
        <nav class="navbar">
          <ul>
            <li class>You guessed correctly!</li>
            <li>{this.state.score} | </li>
            <li>{this.state.topScore}</li>
          </ul>
        </nav>
        <header>
          <h1>Clicky Game</h1>
          <h2>Click on an image to earn points, but don't click on any more than once! Good Luck!</h2>
        </header>
        <Wrapper>
          {this.state.sculptures.map(sculpture => (
            <SculptureCard 
              key = {sculpture.id}
              image = {sculpture.image}
              artist = {sculpture.artist}
              title =  {sculpture.title}        
              year = {sculpture.year}  
            />
          ))}
        </Wrapper>
      </div>
      
    );
  }
}


export default App;
