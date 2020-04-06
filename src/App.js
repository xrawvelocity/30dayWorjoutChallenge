import React, { Component, Fragment } from "react";

let curYear = new Date().getFullYear();

let ids = JSON.parse(localStorage.getItem("ids"));

if (!ids) ids = [0];

let startTime = localStorage.getItem("startTime");

let started;

startTime ? (started = true) : (started = false);

let finishTime = localStorage.getItem("finishTime");

let pushupsEdit = localStorage.getItem("pushupsEdit");
let pullupsEdit = localStorage.getItem("pullupsEdit");
let legraisesEdit = localStorage.getItem("legraisesEdit");
let squatsEdit = localStorage.getItem("squatsEdit");
!pushupsEdit
  ? (pushupsEdit = 0)
  : (pushupsEdit = localStorage.getItem("pushupsEdit"));
!pullupsEdit
  ? (pullupsEdit = 0)
  : (pullupsEdit = localStorage.getItem("pullupsEdit"));
!legraisesEdit
  ? (legraisesEdit = 0)
  : (legraisesEdit = localStorage.getItem("legraisesEdit"));
!squatsEdit
  ? (squatsEdit = 0)
  : (squatsEdit = localStorage.getItem("squatsEdit"));

let initialPushups = localStorage.getItem("initialPushups");
!initialPushups
  ? (initialPushups = 200)
  : (initialPushups = localStorage.getItem("initialPushups"));

let addedPushups = localStorage.getItem("initialPushups");
!addedPushups
  ? (addedPushups = 25)
  : (addedPushups = localStorage.getItem("addedPushups"));

let initialPullups = localStorage.getItem("initialPullups");
!initialPullups
  ? (initialPullups = 100)
  : (initialPullups = localStorage.getItem("initialPullups"));

let addedPullups = localStorage.getItem("addedPullups");
!addedPullups
  ? (addedPullups = 5)
  : (addedPullups = localStorage.getItem("addedPullups"));

let initialLegraises = localStorage.getItem("initialLegraises");
!initialLegraises
  ? (initialLegraises = 200)
  : (initialLegraises = localStorage.getItem("initialLegraises"));

let addedLegraises = localStorage.getItem("addedLegraises");
!addedLegraises
  ? (addedLegraises = 25)
  : (addedLegraises = localStorage.getItem("addedLegraises"));

let initialSquats = localStorage.getItem("initialSquats");
!initialSquats
  ? (initialSquats = 100)
  : (initialSquats = localStorage.getItem("initialSquats"));

let addedSquats = localStorage.getItem("addedSquats");
!addedSquats
  ? (addedSquats = 5)
  : (addedSquats = localStorage.getItem("addedSquats"));

export default class App extends Component {
  state = {
    start: started,

    time: startTime,

    ids: [...ids],

    edit: false,

    pushupsEdit: pushupsEdit,
    pullupsEdit: pullupsEdit,
    legraisesEdit: legraisesEdit,
    squatsEdit: squatsEdit,

    initialPushups,
    addedPushups,

    initialPullups,
    addedPullups,

    initialLegraises,
    addedLegraises,

    initialSquats,
    addedSquats
  };

  componentDidMount() {
    if (!ids) ids = [0];
    else {
      ids = JSON.parse(localStorage.getItem("ids"));
    }
  }

  renderWorkouts = () => {
    // eslint-disable-next-line array-callback-return

    let pushups = Number(this.state.initialPushups);
    let pullups = Number(this.state.initialPullups);
    let legraises = Number(this.state.initialLegraises);
    let squats = Number(this.state.initialSquats);
    let arr = [];

    for (let day = 1; day < 31; day++) {
      if (day % 7) {
        arr.push({
          id: day,
          day: day,
          pushups: pushups,
          pullups: pullups,
          squats: squats,
          legraises: legraises,
          rest: false,
          checked: true
        });
        pushups += Number(this.state.addedPushups);
        pullups += Number(this.state.addedPullups);
        legraises += Number(this.state.addedLegraises);
        squats += Number(this.state.addedSquats);
      } else {
        arr.push({
          day: day,
          rest: true,
          checked: false
        });
      }
    }

    return arr.map(eachDay => {
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
            <p id={`day${eachDay.id}`} >Pullups: {eachDay.pullups}</p>
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
    await localStorage.setItem("ids", JSON.stringify(filteredArray));

    await this.setState({ ids: filteredArray });
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = Number(e.target.value);

    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    await localStorage.setItem("pushupsEdit", this.state.pushupsEdit);
    await localStorage.setItem("pullupsEdit", this.state.pullupsEdit);
    await localStorage.setItem("legraisesEdit", this.state.legraisesEdit);
    await localStorage.setItem("squatsEdit", this.state.squatsEdit);
  };

  handleSubmitEdit = async () => {
    await localStorage.setItem("initialPushups", this.state.initialPushups);
    await localStorage.setItem("initialPullups", this.state.initialPullups);
    await localStorage.setItem("initialLegraises", this.state.initialLegraises);
    await localStorage.setItem("initialSquats", this.state.initialSquats);

    await localStorage.setItem("addedPushups", this.state.addedPushups);
    await localStorage.setItem("addedPullups", this.state.addedPullups);
    await localStorage.setItem("addedLegraises", this.state.addedLegraises);
    await localStorage.setItem("addedSquats", this.state.addedSquats);

    await this.setState({
      initialPushups: this.state.initialPushups,
      initialPullups: this.state.initialPullups,
      initialLegraises: this.state.initialLegraises,
      initialSquats: this.state.initialSquats,

      addedPushups: this.state.addedPushups,
      addedPullups: this.state.addedPullups,
      addedLegraises: this.state.addedLegraises,
      addedSquats: this.state.addedSquats
    });
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
              {this.state.start ? (
                <Fragment>
                  <a href="#top">
                    <li
                      onClick={() => this.setState({ selected: "count" })}
                      className={
                        this.state.selected === "count" ? "selected" : "link"
                      }
                    >
                      Current Count
                    </li>
                  </a>
                  <a href=
                    {(JSON.parse(localStorage.getItem("ids"))
                      ? (`#day${
                          JSON.parse(localStorage.getItem("ids"))[
                            JSON.parse(localStorage.getItem("ids")).length - 1
                          ]
                        }`)
                      : `#first`)}
                  >
                    <li
                      onClick={() => this.setState({ selected: "day" })}
                      className={
                        this.state.selected === "day" ? "selected" : "link"
                      }
                    >
                      Current Day
                    </li>
                  </a>
                </Fragment>
              ) : null}
              {/* <li
                onClick={() => this.setState({ difficulty: basic })}
                className={
                  this.state.difficulty === basic ? "selected" : "link"
                }
              >
                Hard
              </li> */}
            </ul>
          </div>
        </nav>
        <main id="top">
          <div className="main-top">
            <section className="main-btns">
              <div
                className={this.state.start ? "main-btn__hidden" : "main-btn"}
                onClick={async () => {
                  let date = new Date().toLocaleString("en-US", {
                    timeZone: "America/New_York"
                  });
                  await localStorage.setItem("startTime", date);

                  this.setState({ start: true, time: date, edit: false });
                }}
              >
                START
              </div>
              <div
                className={
                  !this.state.start ? "main-current" : "main-current__hidden"
                }
              >
                <h2>Edit Workout</h2>
                {this.state.edit ? (
                  <form className="main-form">
                    <div className="main-form--group">
                      <label for="initialPushups">Pushups: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="initialPushups"
                        placeholder={this.state.initialPushups}
                      />
                      <span className="main-form--group__plus">+</span>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="addedPushups"
                        placeholder={this.state.addedPushups}
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="initialPullups">Pullups: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="initialPullups"
                        placeholder={this.state.initialPullups}
                      />
                      <span className="main-form--group__plus">+</span>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="addedPullups"
                        placeholder={this.state.addedPullups}
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="initialLegraises">Leg Raises: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="initialLegraises"
                        placeholder={this.state.initialLegraises}
                      />
                      <span className="main-form--group__plus">+</span>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="addedLegraises"
                        placeholder={this.state.addedLegraises}
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="initialSquats">Squats: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="initialSquats"
                        placeholder={this.state.initialSquats}
                      />
                      <span className="main-form--group__plus">+</span>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="addedSquats"
                        placeholder={this.state.addedSquats}
                      />
                    </div>
                    <div
                      className="day-btn"
                      onClick={() => {
                        this.handleSubmitEdit();
                        this.setState({ edit: false });
                      }}
                    >
                      Save
                    </div>
                  </form>
                ) : (
                  <div className="main-current__saved">
                    <p>
                      Pushups: {this.state.initialPushups} +{" "}
                      {this.state.addedPushups}
                    </p>
                    <p>
                      Pullups: {this.state.initialPullups} +{" "}
                      {this.state.addedPullups}
                    </p>
                    <p>
                      Leg raises: {this.state.initialLegraises} +{" "}
                      {this.state.addedLegraises}
                    </p>
                    <p>
                      Squats: {this.state.initialSquats} +{" "}
                      {this.state.addedSquats}
                    </p>
                    <div
                      className="day-btn"
                      onClick={() => this.setState({ edit: true })}
                    >
                      Edit
                    </div>
                  </div>
                )}
              </div>
              <div
                id="count"
                className={!this.state.start ? "main-btn__hidden" : "main-btn"}
                onClick={async () => {
                  await localStorage.removeItem("ids");
                  await localStorage.removeItem("startTime");

                  await localStorage.removeItem("pushupsEdit");
                  await localStorage.removeItem("pullupsEdit");
                  await localStorage.removeItem("legraisesEdit");
                  await localStorage.removeItem("squatsEdit");

                  if (!ids) ids = [0];
                  else {
                    ids = JSON.parse(localStorage.getItem("ids"));
                  }
                  await this.setState({ start: false, ids: [0] });
                  await this.setState({
                    pushupsEdit: 0,
                    pullupsEdit: 0,
                    legraisesEdit: 0,
                    squatsEdit: 0,
                    edit: false
                  });
                }}
              >
                RESET
              </div>
              <div
                className={
                  this.state.start ? "main-current" : "main-current__hidden"
                }
              >
                <h2>Current Count</h2>
                {this.state.edit ? (
                  <form className="main-form">
                    <div className="main-form--group">
                      <label for="pushupsEdit">Pushups: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="pushupsEdit"
                        placeholder="0"
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="pullupsEdit">Pullups: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="pullupsEdit"
                        placeholder="0"
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="legraisesEdit">Leg Raises: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="legraisesEdit"
                        placeholder="0"
                      />
                    </div>
                    <div className="main-form--group">
                      <label for="squatsEdit">Squats: </label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="squatsEdit"
                        placeholder="0"
                      />
                    </div>
                    <div
                      className="day-btn"
                      onClick={() => {
                        this.handleSubmit();
                        this.setState({ edit: false });
                      }}
                    >
                      Save
                    </div>
                  </form>
                ) : (
                  <div className="main-current__saved">
                    <p>Pushups: {this.state.pushupsEdit}</p>
                    <p>Pullups: {this.state.pullupsEdit}</p>
                    <p>Leg raises: {this.state.legraisesEdit}</p>
                    <p>Squats: {this.state.squatsEdit}</p>
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
                this.state.start ? "main-started" : "main-started__hidden"
              }
            >
              Started Challenge at: {this.state.time}
            </p>
            <p
              className={
                this.state.finish ? "main-finished" : "main-finished__hidden"
              }
            >
              Finished Challenge at: {finishTime}
            </p>
          </div>

          <section  id="first" className="grid">{this.renderWorkouts()}</section>
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
