import React, { Component } from 'react'
import Input from './Input.js'
import "materialize-css/dist/css/materialize.min.css";
import Form from "react-forms-materialize-css"

class Sign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      from: '',
      memory: '',
      wish: '',
      side: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    if (this.props.notice) {
      this.setState({
        name: this.props.guest.name,
        from: this.props.guest.from,
        memory: this.props.guest.memory,
        wish: this.props.guest.wish,
        side: this.props.guest.side,
        id: this.props.guest.id
      })
    }
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(event, {
      name: this.state.name,
      from: this.state.from,
      memory: this.state.memory,
      wish: this.state.wish,
      side: this.state.side,
      id: this.state.id
    })
    //
    this.setState({
      name: '',
      from: '',
      memory: '',
      wish: '',
      side: ''
    })
    if (this.props.guest) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
          <Input
            handleChange={this.handleChange}
            name={'name'}
            placeholder={'Name'}
            title={'Name'}
            type={'text'}
            value={this.state.name}
            id={'name'}
          />
          <Input
            handleChange={this.handleChange}
            name={'from'}
            placeholder={'from'}
            title={'From'}
            type={'text'}
            value={this.state.from}
            id={'from'}
          />
          <Input
            handleChange={this.handleChange}
            name={'memory'}
            placeholder={'memory'}
            title={'memory'}
            type={'text'}
            value={this.state.memory}
            id={'name'}
          />
          <Input
            handleChange={this.handleChange}
            name={'wish'}
            placeholder={'wish'}
            title={'wish'}
            type={'text'}
            value={this.state.wish}
            id={'wish'}
          />
          <Input
            handleChange={this.handleChange}
            name={'side'}
            placeholder={'side'}
            title={'side'}
            type={'text'}
            value={this.state.side}
            id={'side'}
          />
        <input
          className="sign-it"
          type="submit"
          value={this.props.guest ? 'Sign' : 'Sign'}
        />
        {this.props.children}
      </div>
      </form>
    )
  }
}

export default Sign
