import React, {Component} from "react"

  
export default class TodoItem extends Component {
  static defaultProps = {
    onRemoveTodo: () => {}
  }

  handleClick = () => {
    const {onRemoveTodo, todo} = this.props
    onRemoveTodo(todo)
  }

  render() {
    const {todo, onRemoveTodo} = this.props
    const {id, text, time} = todo
    return <li>
      <h3>{text}</h3>
      <p>Time: {time.toString()}</p>
      <p>id: {id}</p>
      <button onClick={this.handleClick}>Remove</button>
    </li>
  }
}