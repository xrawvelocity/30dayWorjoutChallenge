import React, { Component, Fragment } from "react";

const basicEasy = require('./challenges/basicEasy');

const basicNormal = require('./challenges/basicNormal');

const basicHard = require('./challenges/basicHard');


let curYear = new Date().getFullYear();

export default class App extends Component {

  state = {
    difficulty: basicHard
  }

  renderWorkouts = () => {
    console.log(basicHard);
    return this.state.difficulty.map(eachDay => {
      if (!eachDay.rest) {
        
          return (
            <div onClick={() => {
              console.log(eachDay);
            }} className="day">
              <h2>Day {eachDay.day}:</h2>
              <p>Pushups: {eachDay.pushups}</p>
              <p>Pullups: {eachDay.pullups}</p>
              <p>Leg Raises: {eachDay.legraises}</p>
              <p>Squats: {eachDay.squats}</p>
            </div>
          );
        
      } else {
        return (
          <div className="day">
            <h2>Day {eachDay.day}:</h2>
            <p>REST DAY</p>
            <p>You've earned it!</p>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav">
            <div>
            <h1 className="title"><span className="title-green">30 Day</span> <span>Workout Challenge</span></h1>
            </div>
            <ul>
            <li onClick={()=>this.setState({difficulty: basicEasy})} className={this.state.difficulty === basicEasy ? "selected" : "link"}>Easy</li>
            <li onClick={()=>this.setState({difficulty: basicNormal})} className={this.state.difficulty === basicNormal ? "selected" : "link"}>Normal</li>
            <li onClick={()=>this.setState({difficulty: basicHard})} className={this.state.difficulty === basicHard ? "selected" : "link"}>Hard</li>
            </ul>
          </div>
        </nav>
        <main>{this.renderWorkouts()}</main>
        <footer>
          
        </footer>
      </Fragment>
    );
  }
}
