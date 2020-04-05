import React, { Component, Fragment } from "react";

const basicEasy = require("./challenges/basicEasy");

const basicNormal = require("./challenges/basicNormal");

const basicHard = require("./challenges/basicHard");

let curYear = new Date().getFullYear();

let idsEasy = JSON.parse(localStorage.getItem("idsEasy"));

if (!idsEasy) idsEasy = [0];

let idsNormal = JSON.parse(localStorage.getItem("idsNormal"));

if (!idsNormal) idsNormal = [0];

let idsHard = JSON.parse(localStorage.getItem("idsHard"));

if (!idsHard) idsHard = [0];

let startTimeEasy = localStorage.getItem("startTimeEasy");

let startedEasy;

startTimeEasy ? (startedEasy = true) : (startedEasy = false);

let finishTimeEasy = localStorage.getItem("finishTimeEasy");

let startTimeNormal = localStorage.getItem("startTimeNormal");

let startedNormal;

startTimeNormal ? (startedNormal = true) : (startedNormal = false);

let finishTimeNormal = localStorage.getItem("finishTimeNormal");

let startTimeHard = localStorage.getItem("startTimeHard");

let startedHard;

startTimeHard ? (startedHard = true) : (startedHard = false);

let finishTimeHard = localStorage.getItem("finishTimeHard");

export default class App extends Component {
  state = {
    difficulty: basicHard,

    startEasy: startedEasy,
    startNormal: startedNormal,
    startHard: startedHard,

    timeEasy: startTimeEasy,
    timeNormal: startTimeNormal,
    timeHard: startTimeHard,

    idsEasy: [...idsEasy],
    idsNormal: [...idsNormal],
    idsHard: [...idsHard],
    allIds: [...idsEasy, ...idsNormal, ...idsHard]
  };

  componentDidMount() {
    if (!idsEasy) idsEasy = [0];
    else {
      idsEasy = JSON.parse(localStorage.getItem("idsEasy"));
    }
    if (!idsNormal) idsNormal = [0];
    else {
      idsNormal = JSON.parse(localStorage.getItem("idsNormal"));
    }
    if (!idsHard) idsHard = [0];
    else {
      idsHard = JSON.parse(localStorage.getItem("idsHard"));
    }
  }
  renderWorkouts = () => {
    console.log(basicHard);
    return this.state.difficulty.map(eachDay => {
      if (this.state.difficulty === basicEasy) {
        if (!eachDay.rest) {
          return (
            <div className="day">
              <div
                className={
                  this.state.allIds.includes(eachDay.id)
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
              {this.state.startEasy ? (
                <div
                  className={
                    this.state.allIds.includes(eachDay.id)
                      ? "day-btn__hidden"
                      : "day-btn"
                  }
                  onClick={() => this.addToDoneEasy(eachDay)}
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
      } else if (this.state.difficulty === basicNormal) {
        if (!eachDay.rest) {
          return (
            <div className="day">
              <div
                className={
                  this.state.allIds.includes(eachDay.id)
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
              {this.state.startNormal ? (
                <div
                  className={
                    this.state.allIds.includes(eachDay.id)
                      ? "day-btn__hidden"
                      : "day-btn"
                  }
                  onClick={() => this.addToDoneNormal(eachDay)}
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
      } else if (this.state.difficulty === basicHard) {
        if (!eachDay.rest) {
          return (
            <div className="day">
              <div
                className={
                  this.state.allIds.includes(eachDay.id)
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
              {this.state.startHard ? (
                <div
                  className={
                    this.state.allIds.includes(eachDay.id)
                      ? "day-btn__hidden"
                      : "day-btn"
                  }
                  onClick={() => this.addToDoneHard(eachDay)}
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
      }
    });
  };

  addToDoneEasy = async eachDay => {
    let copyArray = [...this.state.idsEasy];
    await copyArray.push(eachDay.id);
    let filteredArray = copyArray.filter(function(item, pos) {
      return copyArray.indexOf(item) === pos;
    });
    console.log(filteredArray);
    await localStorage.setItem("idsEasy", JSON.stringify(filteredArray));

    await this.setState({ idsEasy: filteredArray });
    await this.setState({allIds: [...this.state.idsEasy]})
  };

  addToDoneNormal = async eachDay => {
    let copyArray = [...this.state.idsNormal];
    await copyArray.push(eachDay.id);
    let filteredArray = copyArray.filter(function(item, pos) {
      return copyArray.indexOf(item) === pos;
    });
    console.log(filteredArray);
    await localStorage.setItem("idsNormal", JSON.stringify(filteredArray));

    await this.setState({ idsNormal: filteredArray });
    await this.setState({allIds: [...this.state.idsNormal]})
  };

  addToDoneHard = async eachDay => {
    let copyArray = [...this.state.idsHard];
    await copyArray.push(eachDay.id);
    let filteredArray = copyArray.filter(function(item, pos) {
      return copyArray.indexOf(item) === pos;
    });
    console.log(filteredArray);
    await localStorage.setItem("idsHard", JSON.stringify(filteredArray));

    await this.setState({ idsHard: filteredArray });
    await this.setState({allIds: [...this.state.idsHard]})
  };

  render() {
    console.log(this.state.allIds);
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
          {/* ON DIFFICULTY HARD */}
          {this.state.difficulty === basicHard ? (
            <div className="main-top">
              <section className="main-btns">
                <div
                  className={
                    this.state.startHard ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    let date = new Date().toLocaleString("en-US", {
                      timeZone: "America/New_York"
                    });
                    await localStorage.setItem("startTimeHard", date);

                    this.setState({ startHard: true, timeHard: date });
                  }}
                >
                  START
                </div>
                <div
                  className="main-btn"
                  onClick={async () => {
                    await localStorage.removeItem("idsHard");
                    await localStorage.removeItem("startTimeHard");
                    if (!idsHard) idsHard = [0];
                    else {
                      idsHard = JSON.parse(localStorage.getItem("idsHard"));
                    }
                    await this.setState({ startHard: false, idsHard: [0] });
                    await this.setState({allIds: [...this.state.idsEasy, ...this.state.idsNormal]})
                  }}
                >
                  RESET
                </div>
              </section>
              <p
                className={
                  this.state.startHard ? "main-started" : "main-started__hidden"
                }
              >
                Started Challenge at: {this.state.timeHard}
              </p>
              <p
                className={
                  this.state.finishHard
                    ? "main-finished"
                    : "main-finished__hidden"
                }
              >
                Finished Challenge at: {finishTimeHard}
              </p>
            </div>
          ) : null}

          {/* ON DIFFICULTY NORMAL */}
          {this.state.difficulty === basicNormal ? (
            <div className="main-top">
              <section className="main-btns">
                <div
                  className={
                    this.state.startNormal ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    let date = new Date().toLocaleString("en-US", {
                      timeZone: "America/New_York"
                    });
                    await localStorage.setItem("startTimeNormal", date);

                    this.setState({ startNormal: true, timeNormal: date });
                  }}
                >
                  START
                </div>
                <div
                  className="main-btn"
                  onClick={async () => {
                    await localStorage.removeItem("idsNormal");
                    await localStorage.removeItem("startTimeNormal");
                    if (!idsNormal) idsNormal = [0];
                    else {
                      idsNormal = JSON.parse(localStorage.getItem("idsNormal"));
                    }
                    await this.setState({ startNormal: false, idsNormal: [0] });
                    await this.setState({allIds: [...this.state.idsEasy, ...this.state.idsHard]})
                  }}
                >
                  RESET
                </div>
              </section>
              <p
                className={
                  this.state.startNormal
                    ? "main-started"
                    : "main-started__hidden"
                }
              >
                Started Challenge at: {this.state.timeNormal}
              </p>
              <p
                className={
                  this.state.finishNormal
                    ? "main-finished"
                    : "main-finished__hidden"
                }
              >
                Finished Challenge at: {finishTimeNormal}
              </p>
            </div>
          ) : null}

          {/* ON DIFFICULTY EASY */}
          {this.state.difficulty === basicEasy ? (
            <div className="main-top">
              <section className="main-btns">
                <div
                  className={
                    this.state.startEasy ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    let date = new Date().toLocaleString("en-US", {
                      timeZone: "America/New_York"
                    });
                    await localStorage.setItem("startTimeEasy", date);

                    this.setState({ startEasy: true, timeEasy: date });
                  }}
                >
                  START
                </div>
                <div
                  className="main-btn"
                  onClick={async () => {
                    await localStorage.removeItem("idsEasy");
                    await localStorage.removeItem("startTimeEasy");
                    if (!idsEasy) idsEasy = [0];
                    else {
                      idsEasy = JSON.parse(localStorage.getItem("idsEasy"));
                    }
                    await this.setState({ startEasy: false, idsEasy: [0] });
                    await this.setState({allIds: [...this.state.idsNormal, ...this.state.idsHard]})
                  }}
                >
                  RESET
                </div>
              </section>
              <p
                className={
                  this.state.startEasy ? "main-started" : "main-started__hidden"
                }
              >
                Started Challenge at: {this.state.timeEasy}
              </p>
              <p
                className={
                  this.state.finishEasy
                    ? "main-finished"
                    : "main-finished__hidden"
                }
              >
                Finished Challenge at: {finishTimeEasy}
              </p>
            </div>
          ) : null}

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
