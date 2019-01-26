import React from "react";      // REACT ALWAYS
import "./Header.css";          // COMPONENT CSS


const Header = props => (


  <div class="navbar navbar-dark bg-primary">
    <div class="row">

      <div id="left">
        <h1 class="display-4">Clicky Game</h1>
      </div>

      <div id="center">
        <h2>Click One Image to Begin</h2>
        <h3>Do not click a Image Twice</h3>
        <h4>Guess: Just {props.goal} times to win!</h4>
      </div>

      <div id="right">
        <h1 class="display-4">Score: {props.total}</h1>
        <h2 >{props.status}</h2>
      </div>

    </div>
  </div>



);

export default Header;
