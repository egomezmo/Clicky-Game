import React, { Component } from "react"; // REACT ALWAYS

import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import emoji from "./cards.json";


import "./App.css";         // COMPONENT CSS

class App extends Component {
  state = {
    emoji,
    clickedEmojisIds: [],
    score: 0,
    goal: 15,
    status: ""
  };


  shuffleScoreCard = id => {
    let clickedEmojisIds = this.state.clickedEmojisIds;

    if (clickedEmojisIds.includes(id)) {
      this.setState({ clickedEmojisIds: [], score: 0, status: "Game Over! Click to play again!" });
      return;
    } else {
      clickedEmojisIds.push(id)

      if (clickedEmojisIds.length === 10) {
        this.setState({ score: 10, status: "You Won! Click to play again!", clickedEmojisIds: [] });
        console.log('You Win');
        return;
      }

      this.setState({ emoji, clickedEmojisIds, score: clickedEmojisIds.length, status: " " });

      for (let i = emoji.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [emoji[i], emoji[j]] = [emoji[j], emoji[i]];
      }
    }
  }


  render() {
    return (
      // 1. GENERAL 
      // 2. HEADER
      // 3. CARDS
      // 4. FOOTER


      <div class="container" id="general">

        <Header total={this.state.score} goal={10} status={this.state.status} />

        <Wrapper>

          <div class="container" id="allCards">
            {this.state.emoji.map(emoji => (<Card shuffleScoreCard={this.shuffleScoreCard} id={emoji.id} key={emoji.id} image={emoji.image} />))}
          </div><br></br>

        </Wrapper>

        <Footer />

      </div>
    );
  }
}


export default App;