import React, { Component, Fragment } from "react";

const basicEasy = require("./challenges/basicEasy");

const basicNormal = require("./challenges/basicNormal");

const basicHard = require("./challenges/basicHard");

let curYear = new Date().getFullYear();

let ids = JSON.parse(localStorage.getItem("ids"));

if (!ids) ids = [0];


export default class App extends Component {
  state = {
    difficulty: basicHard,
    start: true,
    ids: [...ids]
  };

  componentDidMount() {
    if (!ids) ids = [0];
    else {
      ids = JSON.parse(localStorage.getItem("ids"));
    }
  }
  renderWorkouts = () => {
    console.log(basicHard);
    return this.state.difficulty.map(eachDay => {
      if (!eachDay.rest) {
        return (
          <div className="day">
            <div
              className={
                this.state.ids.includes(eachDay.id)
                  ? "day-checked"
                  : "day-unchecked"
              }
            >
              &#10004;
            </div>
            <h2>Day {eachDay.day}:</h2>
            <p>Pushups: {eachDay.pushups}</p>
            <p>Pullups: {eachDay.pullups}</p>
            <p>Leg Raises: {eachDay.legraises}</p>
            <p>Squats: {eachDay.squats}</p>
            {this.state.start ? (
              <div
                className={
                  this.state.ids.includes(eachDay.id)
                    ? "day-btn__hidden"
                    : "day-btn"
                }
                onClick={() => this.addToDone(eachDay)}
              >
                Done
              </div>
            ) : null}
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

  addToDone = async eachDay => {
    let copyArray = [...this.state.ids];
    await copyArray.push(eachDay.id);
    let filteredArray = copyArray.filter(function(item, pos) {
      return copyArray.indexOf(item) === pos;
    });
    console.log(filteredArray);
    await localStorage.setItem("ids", JSON.stringify(filteredArray));

    await this.setState({ ids: filteredArray });
    console.log(this.state.ids);
  };

  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav">
            <div>
              <h1 className="title">
                <span className="title-green">30 Day</span>{" "}
                <span>Workout Challenge</span>
              </h1>
            </div>
            <ul>
              <li
                onClick={() => this.setState({ difficulty: basicEasy })}
                className={
                  this.state.difficulty === basicEasy ? "selected" : "link"
                }
              >
                Easy
              </li>
              <li
                onClick={() => this.setState({ difficulty: basicNormal })}
                className={
                  this.state.difficulty === basicNormal ? "selected" : "link"
                }
              >
                Normal
              </li>
              <li
                onClick={() => this.setState({ difficulty: basicHard })}
                className={
                  this.state.difficulty === basicHard ? "selected" : "link"
                }
              >
                Hard
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="main-top">
            <section className="main-btns">
              <div
                className={this.state.start ? "main-btn__hidden" : "main-btn"}
                onClick={async () => {
                  let date = new Date().toLocaleString("en-US", {
                    timeZone: "America/New_York"
                  });
                  await localStorage.setItem("startTime", date);

                  this.setState({ start: true, time: date });
                }}
              >
                START
              </div>
              <div
                className="main-btn"
                onClick={async () => {
                  await localStorage.removeItem("ids");
                  if (!ids) ids = [0];
                  else {
                    ids = JSON.parse(localStorage.getItem("ids"));
                  }
                  this.setState({ start: false, ids: [...ids] });
                }}
              >
                RESET
              </div>
            </section>
            <p
              className={
                this.state.start ? "main-started" : "main-started__hidden"
              }
            >
              Started Challenge at: {this.state.time}
            </p>
          </div>
          <section className="grid">{this.renderWorkouts()}</section>
        </main>
        <footer>
          <p>Copyright &copy; {curYear}</p>
          <p>
            Made by{" "}
            <a
              href="https://linkedin.com/in/victor--fernandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor Fernandez
            </a>
          </p>
        </footer>
      </Fragment>
    );
  }
}
