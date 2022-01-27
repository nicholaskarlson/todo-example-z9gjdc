import React, {Component} from "react"

export default class AddTodo extends Component {
  static defaultProps = {
    onAddTodo: () => {}
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddTodo({
      id: Math.random(),
      text: this.text.value,
      time: new Date()
    })
    this.text.value = ''
  }
  
  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" ref={el => this.text = el} />
      <button type="submit">Add Todo</button>
    </form>
  }
}