import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  // For generating random id
  randomId = () => {
    let random = "";
    for (let i = 0; i < 12; i++) {
      const letters = "abcdefghijklmnopqrstuvwxyz0123456789";
      let index = Math.floor(Math.random() * letters.length);
      random += letters[index];
    }
    return random;
  };

  // Default todos that displays all the time
  state = {
    todos: [
      {
        id: this.randomId(),
        title: "Do your laundry",
        completed: false,
      },
      {
        id: this.randomId(),
        title: "Dinner date",
        completed: false,
      },
      {
        id: this.randomId(),
        title: "Important meeting at 15:00",
        completed: false,
      },
    ],
  };
  // function that toggle while clicking checkbox
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete Todos
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // To add a new todo
  addTodo = (title) => {
    const newTodo = {
      id: this.randomId(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
