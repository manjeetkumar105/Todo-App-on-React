import React, { Component } from 'react';
import Todo from './Todo.js';
import AddTodo from './addTodo.js';

class App extends Component {
  state = {
    todos: [
      {content: 'this make my day', id:1},
      {content: 'wallah Im so good', id:2}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  }
}


export default App;
