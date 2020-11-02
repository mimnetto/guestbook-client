import React, { Component } from 'react'
import Input from './Input.js'

class UpdateForm extends Component {
  constructor(props) {
    super(props)
    // form values, skipping this will give an error warning about
    // component changing uncontrolled input
    this.state = {
       name: props.guest.name,
       from: props.guest.from,
       memory: props.guest.memory,
       wish: props.guest.wish,
       side: props.guest.side
     }

     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
   }

     handleChange = event => {
       // each input has event.target.name == name of Input
       // event.target.value == new value
       const { target } = event;
       this.setState({ [target.name]: target.value });
     console.log(target.value);
       // this.setState({ target.name })
       // this.setState({ [event.target._id]: event.target.value })
     }
  // will change all the values of each input, rather than having to write a function for each one

  // explicity show what is being passed in
  // this function will get lifted all the way up back to the app component, that will allow the main list to update after this function is completed
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props);
    this.props.handleSubmit({
      name: this.state.name,
      from: this.state.from,
      memory: this.state.memory,
      wish: this.state.wish,
      side: this.state.side,
      id: this.props.guest._id
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
          value={this.props.guest ? 'Update' : 'Update'}
        />
        {this.props.children}
      </form>
    )
  }
}

export default UpdateForm
