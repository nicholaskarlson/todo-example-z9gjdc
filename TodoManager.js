import React, {Component} from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

export default class TodoManager extends Component {
  state = {
    todos: []
  }

  handleAddTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleRemoveTodo = (todoToRemove) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo !== todoToRemove)
    })
  }
  
  render() {
    const {todos} = this.state
    return <div>
      <AddTodo onAddTodo={this.handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={this.handleRemoveTodo} />
    </div>
  }
}