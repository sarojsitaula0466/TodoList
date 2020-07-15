import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", margin: "10px auto" }}
      >
        <input
          type="text"
          style={{ flex: "10", padding: "5px" }}
          name="title"
          placeholder="Type your Todo here ...."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          style={{ flex: "1" }}
          className="btn"
          value="submit"
        />
      </form>
    );
  }
}

export default AddTodo;
