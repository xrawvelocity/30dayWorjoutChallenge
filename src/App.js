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

let pushupsEditHard = localStorage.getItem("pushupsEditHard");
let pullupsEditHard = localStorage.getItem("pullupsEditHard");
let legraisesEditHard = localStorage.getItem("legraisesEditHard");
let squatsEditHard = localStorage.getItem("squatsEditHard");
!pushupsEditHard
  ? (pushupsEditHard = 0)
  : (pushupsEditHard = localStorage.getItem("pushupsEditHard"));
!pullupsEditHard
  ? (pullupsEditHard = 0)
  : (pullupsEditHard = localStorage.getItem("pullupsEditHard"));
!legraisesEditHard
  ? (legraisesEditHard = 0)
  : (legraisesEditHard = localStorage.getItem("legraisesEditHard"));
!squatsEditHard
  ? (squatsEditHard = 0)
  : (squatsEditHard = localStorage.getItem("squatsEditHard"));
let pushupsEditNormal = localStorage.getItem("pushupsEditNormal");
let pullupsEditNormal = localStorage.getItem("pullupsEditNormal");
let legraisesEditNormal = localStorage.getItem("legraisesEditNormal");
let squatsEditNormal = localStorage.getItem("squatsEditNormal");
!pushupsEditNormal
  ? (pushupsEditNormal = 0)
  : (pushupsEditNormal = localStorage.getItem("pushupsEditNormal"));
!pullupsEditNormal
  ? (pullupsEditNormal = 0)
  : (pullupsEditNormal = localStorage.getItem("pullupsEditNormal"));
!legraisesEditNormal
  ? (legraisesEditNormal = 0)
  : (legraisesEditNormal = localStorage.getItem("legraisesEditNormal"));
!squatsEditNormal
  ? (squatsEditNormal = 0)
  : (squatsEditNormal = localStorage.getItem("squatsEditNormal"));
let pushupsEditEasy = localStorage.getItem("pushupsEditEasy");
let pullupsEditEasy = localStorage.getItem("pullupsEditEasy");
let legraisesEditEasy = localStorage.getItem("legraisesEditEasy");
let squatsEditEasy = localStorage.getItem("squatsEditEasy");
!pushupsEditEasy
  ? (pushupsEditEasy = 0)
  : (pushupsEditEasy = localStorage.getItem("pushupsEditEasy"));
!pullupsEditEasy
  ? (pullupsEditEasy = 0)
  : (pullupsEditEasy = localStorage.getItem("pullupsEditEasy"));
!legraisesEditEasy
  ? (legraisesEditEasy = 0)
  : (legraisesEditEasy = localStorage.getItem("legraisesEditEasy"));
!squatsEditEasy
  ? (squatsEditEasy = 0)
  : (squatsEditEasy = localStorage.getItem("squatsEditEasy"));

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
    allIds: [...idsEasy, ...idsNormal, ...idsHard],

    edit: false,

    pushupsEditHard: pushupsEditHard,
    pullupsEditHard: pullupsEditHard,
    legraisesEditHard: legraisesEditHard,
    squatsEditHard: squatsEditHard,

    pushupsEditNormal: pushupsEditNormal,
    pullupsEditNormal: pullupsEditNormal,
    legraisesEditNormal: legraisesEditNormal,
    squatsEditNormal: squatsEditNormal,

    pushupsEditEasy: pushupsEditEasy,
    pullupsEditEasy: pullupsEditEasy,
    legraisesEditEasy: legraisesEditEasy,
    squatsEditEasy: squatsEditEasy
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
    await this.setState({ allIds: [...this.state.idsEasy] });
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
    await this.setState({ allIds: [...this.state.idsNormal] });
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
    await this.setState({ allIds: [...this.state.idsHard] });
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = Number(e.target.value);

    this.setState({ [name]: value });
  };
  handleSubmitHard = async () => {
    await localStorage.setItem("pushupsEditHard", this.state.pushupsEditHard);
    await localStorage.setItem("pullupsEditHard", this.state.pullupsEditHard);
    await localStorage.setItem(
      "legraisesEditHard",
      this.state.legraisesEditHard
    );
    await localStorage.setItem("squatsEditHard", this.state.squatsEditHard);
  };
  handleSubmitNormal = async () => {
    await localStorage.setItem(
      "pushupsEditNormal",
      this.state.pushupsEditNormal
    );
    await localStorage.setItem(
      "pullupsEditNormal",
      this.state.pullupsEditNormal
    );
    await localStorage.setItem(
      "legraisesEditNormal",
      this.state.legraisesEditNormal
    );
    await localStorage.setItem("squatsEditNormal", this.state.squatsEditNormal);
  };
  handleSubmitEasy = async () => {
    await localStorage.setItem("pushupsEditEasy", this.state.pushupsEditEasy);
    await localStorage.setItem("pullupsEditEasy", this.state.pullupsEditEasy);
    await localStorage.setItem(
      "legraisesEditEasy",
      this.state.legraisesEditEasy
    );
    await localStorage.setItem("squatsEditEasy", this.state.squatsEditEasy);
  };

  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav">
            <div>
              <a href="#top" className="title">
                <span className="title-green">30 Day</span>{" "}
                <span>Workout Challenge</span>
              </a>
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
        <main id="top">
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
                  className={
                    !this.state.startHard ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    await localStorage.removeItem("idsHard");
                    await localStorage.removeItem("startTimeHard");

                    await localStorage.removeItem("pushupsEditHard");
                    await localStorage.removeItem("pullupsEditHard");
                    await localStorage.removeItem("legraisesEditHard");
                    await localStorage.removeItem("squatsEditHard");

                    if (!idsHard) idsHard = [0];
                    else {
                      idsHard = JSON.parse(localStorage.getItem("idsHard"));
                    }
                    await this.setState({ startHard: false, idsHard: [0] });
                    await this.setState({
                      allIds: [...this.state.idsEasy, ...this.state.idsNormal],
                      pushupsEditHard: 0,
                      pullupsEditHard: 0,
                      legraisesEditHard: 0,
                      squatsEditHard: 0,
                      edit: false
                    });
                  }}
                >
                  RESET
                </div>
                <div
                  className={
                    this.state.startHard
                      ? "main-current"
                      : "main-current__hidden"
                  }
                >
                  <h2>Current Count</h2>
                  {this.state.edit ? (
                    <form className="main-form">
                      <div className="main-form--group">
                        <label for="pushupsEditHard">Pushups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pushupsEditHard"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="pullupsEditHard">Pullups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pullupsEditHard"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="legraisesEditHard">Leg Raises: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="legraisesEditHard"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="squatsEditHard">Squats: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="squatsEditHard"
                          placeholder="0"
                        />
                      </div>
                      <div
                        className="day-btn"
                        onClick={() => {
                          this.handleSubmitHard();
                          this.setState({ edit: false });
                        }}
                      >
                        Save
                      </div>
                    </form>
                  ) : (
                    <div className="main-current__saved">
                      <p>Pushups: {this.state.pushupsEditHard}</p>
                      <p>Pullups: {this.state.pullupsEditHard}</p>
                      <p>Leg raises: {this.state.legraisesEditHard}</p>
                      <p>Squats: {this.state.squatsEditHard}</p>
                      <div
                        className="day-btn"
                        onClick={() => this.setState({ edit: true })}
                      >
                        Edit
                      </div>
                    </div>
                  )}
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
                  className={
                    !this.state.startNormal ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    await localStorage.removeItem("idsNormal");
                    await localStorage.removeItem("startTimeNormal");

                    await localStorage.removeItem("pushupsEditNormal");
                    await localStorage.removeItem("pullupsEditNormal");
                    await localStorage.removeItem("legraisesEditNormal");
                    await localStorage.removeItem("squatsEditNormal");

                    if (!idsNormal) idsNormal = [0];
                    else {
                      idsNormal = JSON.parse(localStorage.getItem("idsNormal"));
                    }
                    await this.setState({ startNormal: false, idsNormal: [0] });
                    await this.setState({
                      allIds: [...this.state.idsEasy, ...this.state.idsHard],
                      pushupsEditNormal: 0,
                      pullupsEditNormal: 0,
                      legraisesEditNormal: 0,
                      squatsEditNormal: 0,
                      edit: false
                    });
                  }}
                >
                  RESET
                </div>
                <div
                  className={
                    this.state.startNormal
                      ? "main-current"
                      : "main-current__hidden"
                  }
                >
                  <h2>Current Count</h2>
                  {this.state.edit ? (
                    <form className="main-form">
                      <div className="main-form--group">
                        <label for="pushupsEditNormal">Pushups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pushupsEditNormal"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="pullupsEditNormal">Pullups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pullupsEditNormal"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="legraisesEditNormal">Leg Raises: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="legraisesEditNormal"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="squatsEditNormal">Squats: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="squatsEditNormal"
                          placeholder="0"
                        />
                      </div>
                      <div
                        className="day-btn"
                        onClick={() => {
                          this.handleSubmitNormal();
                          this.setState({ edit: false });
                        }}
                      >
                        Save
                      </div>
                    </form>
                  ) : (
                    <div className="main-current__saved">
                      <p>Pushups: {this.state.pushupsEditNormal}</p>
                      <p>Pullups: {this.state.pullupsEditNormal}</p>
                      <p>Leg raises: {this.state.legraisesEditNormal}</p>
                      <p>Squats: {this.state.squatsEditNormal}</p>
                      <div
                        className="day-btn"
                        onClick={() => this.setState({ edit: true })}
                      >
                        Edit
                      </div>
                    </div>
                  )}
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
                  className={
                    !this.state.startEasy ? "main-btn__hidden" : "main-btn"
                  }
                  onClick={async () => {
                    await localStorage.removeItem("idsEasy");
                    await localStorage.removeItem("startTimeEasy");

                    await localStorage.removeItem("pushupsEditEasy");
                    await localStorage.removeItem("pullupsEditEasy");
                    await localStorage.removeItem("legraisesEditEasy");
                    await localStorage.removeItem("squatsEditEasy");

                    if (!idsEasy) idsEasy = [0];
                    else {
                      idsEasy = JSON.parse(localStorage.getItem("idsEasy"));
                    }
                    await this.setState({ startEasy: false, idsEasy: [0] });
                    await this.setState({
                      allIds: [...this.state.idsNormal, ...this.state.idsHard],
                      pushupsEditEasy: 0,
                      pullupsEditEasy: 0,
                      legraisesEditEasy: 0,
                      squatsEditEasy: 0,
                      edit: false
                    });
                  }}
                >
                  RESET
                </div>
                <div
                  className={
                    this.state.startEasy
                      ? "main-current"
                      : "main-current__hidden"
                  }
                >
                  <h2>Current Count</h2>
                  {this.state.edit ? (
                    <form className="main-form">
                      <div className="main-form--group">
                        <label for="pushupsEditEasy">Pushups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pushupsEditEasy"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="pullupsEditEasy">Pullups: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="pullupsEditEasy"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="legraisesEditEasy">Leg Raises: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="legraisesEditEasy"
                          placeholder="0"
                        />
                      </div>
                      <div className="main-form--group">
                        <label for="squatsEditEasy">Squats: </label>
                        <input
                          onChange={this.handleChange}
                          type="number"
                          name="squatsEditEasy"
                          placeholder="0"
                        />
                      </div>
                      <div
                        className="day-btn"
                        onClick={() => {
                          this.handleSubmitEasy();
                          this.setState({ edit: false });
                        }}
                      >
                        Save
                      </div>
                    </form>
                  ) : (
                    <div className="main-current__saved">
                      <p>Pushups: {this.state.pushupsEditEasy}</p>
                      <p>Pullups: {this.state.pullupsEditEasy}</p>
                      <p>Leg raises: {this.state.legraisesEditEasy}</p>
                      <p>Squats: {this.state.squatsEditEasy}</p>
                      <div
                        className="day-btn"
                        onClick={() => this.setState({ edit: true })}
                      >
                        Edit
                      </div>
                    </div>
                  )}
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
