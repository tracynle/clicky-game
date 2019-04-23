import React, { Component } from 'react';
import './App.css';
import images from "./cards.json";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import GameMessage from "./components/GameMessage";
import Wrapper from "./components/Wrapper";

// create function that will shuffle (optional)
// state to contain the data: sculpture, score: 0, topScore: 0, 
// imageClicked: [], clickedWrong:0, clickedRight:0,
// in render() : put divs for clickedWrong and clickedRight
// Random shuffle

// This function will shuffle thleImages
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = { 
    images,
    score: 0,
    topScore: 0,
    imageClicked: [],
    gameMessage: ""
  };

  imageClickedFunction = (event, image) => {
    let imageClicked = this.state.imageClicked;
    // setState changes values of the state of clickedRight
    this.setState({ 
      clickedRight: 0 
    });

    // conditional to check if the clickedImages have an event from theImages.json file
    // if image from the map is not found
    if (imageClicked.indexOf(image) === -1) {
      this.setState({
        gameMessage: "You guessed it right!"
      })
      imageClicked.push(image);
      console.log("This card was clicked: ", image.name );
      // execute score function
      this.incrementScore();
      // reshufflleImages function called
      this.startshuffleImages();
    } 
    // if player clicked correctly
    // checks current score 
    // if the player scores 14, game is reset to 0
    else if (this.state.score === 14) {
      this.setState({
        score: 0,
        imageClicked: [],
        gameMessage: "You won! Start Over!"
      }, () => {
        console.log("This is the gameMessage:", this.state.gameMessage);
      });
    }
    // if player clicked incorrectly, game resets
    else {
      this.setState({
        score: 0,
        imageClicked: [],
        gameMessage: "Wrong guess. Try again!"
        
      }, () => {
        console.log("This is the gameMessage:", this.state.gameMessage);
      });
    }
  }
  
  // Function increments the score if it is guessed correctly
  incrementScore = () => {
    // Changes the score by one 
    this.setState({ score: this.state.score +1 }, () => { 
      // Keeps the topScore and compares to the current score on scoreboard
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score });
      };
    });
  };

  // Function shuffles the images 
  startshuffleImages = () => {
    this.setState({ images: shuffle(images)});
  }
  // ==================JSX===================== //
  render() { 
    return (
      <Wrapper>
     
      <Nav score = {this.state.score} topScore = {this.state.topScore}  
      brand = {'Clicky Game'} navText =  {this.state.gameMessage}/>
      <Jumbotron title = {'Studio Ghibli Game'} 
        subLine = {`Click on an image to earn points, but don't click on any more than once!`} />
        
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <Card
                key = {image.id}
                event = {image.id}
                url = {image.url}
                imageClicked = {this.imageClickedFunction}
                image = {image}
              />
              ))}
          </div>
        </div>
        <Footer/>
        
      </Wrapper>

        
    
      
    );
  }

}

export default App;
