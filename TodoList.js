import React, {Component} from "react"
import TodoItem from "./TodoItem"
  
export default class TodoList extends Component {
  render() {
    const {todos, onRemoveTodo} = this.props
    return <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />)}
    </ul>
  }
}