import React, { Component } from 'react'
import Input from './Input.js'

class Form extends Component {
  // older syntax
  // must pass props as argument
  // must call super(props)

  constructor(props) {
    super(props)
    // form values, skipping this will give an error warning about
    // component changing uncontrolled input
    this.state = {
      name: '',
      from: '',
      memory: '',
      wish: '',
      side: ''
    }
    // must bind all functions
    // all functions must be func () {}
    // not func = () => {}
    // in order to reduce headaches
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // use some logic to determine if the form should be pre-filled for update
  // or if it should be empty for new, depending on where the form is rendered/whether data was passed in
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
  // will change all the values of each input, rather than having to write a function for each one
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  // explicity show what is being passed in
  // this function will get lifted all the way up back to the app component, that will allow the main list to update after this function is completed
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
    // clears the form
    this.setState({
      name: '',
      from: '',
      memory: '',
      wish: '',
      side: ''
    })
    // if this is the edit form, change the view back
    if (this.props.guest) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
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
          type="submit"
          value={this.props.guest ? 'update this guest' : 'add a guest'}
        />
        {this.props.children}
      </form>
    )
  }
}

export default Form
