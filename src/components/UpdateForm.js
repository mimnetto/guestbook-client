import React, { Component } from 'react'
import Input from './Input.js'
import ReactTooltip from 'react-tooltip';

class UpdateForm extends Component {
  constructor(props) {
    super(props)
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
       const { target } = event;
       this.setState({ [target.name]: target.value });
       console.log(target.value);
     }
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
          className="update-it"
          type="submit"
          data-tip='Updated! Thank you!'
          data-event='click focus'
          data-iscapture="true"
          value={this.props.guest ? 'Update' : 'Update'}
        />
      <ReactTooltip globalEventOff='click' />
        {this.props.children}
      </form>
    )
  }
}

export default UpdateForm
