import React, {Component, setState} from 'react'
// import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap'
// import ModalHeader from 'react-bootstrap/ModalHeader'
import Button from 'react-bootstrap/Button'


const display = { display: 'block'};
const hide = { display: 'none'};

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }
  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render = () => {
    const modalContent = (
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
      <div className="modal-header">
        <a className="btn-flat right" onClick={this.toggle}><h1>X</h1></a>
        </div>
        </div>
      </div>
      );
      return (
        <div>
          <Button className="button" onClick={this.toggle}>Post!</Button>
          {modalContent}
        </div>
      );
    }
  }

export default EditModal
