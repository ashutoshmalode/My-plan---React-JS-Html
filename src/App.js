import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Components/Plan";

export class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelet = id => {
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <>
        <div className="box">
          <h3 className="my-4 text-light">Today's Plan</h3>
          <div className="input input-group">
            <input
              type="text"
              className="form-control text-light"
              placeholder="Write your plan here..."
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button className="btn btn-warning mx-2" onClick={this.handleAdd}>
              Add
            </button>
          </div>
          <ol>
            {this.state.items.map((value, i) => {
              return (
                <Plan
                  key={i}
                  id={i}
                  value={value}
                  sendDelet={this.handleDelet}
                />
              );
            })}
          </ol>
        </div>
      </>
    );
  }
}

export default App;
