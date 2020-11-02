import React, {Component} from 'react'
import UpdateForm from './UpdateForm'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Icon, InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';


 class Guest extends Component {
  render () {
    const {guest, handleDelete, handleUpdate} = this.props
    return (
    <>
    <div className="allGuest">
    <div className="guest">
      <p className="right"><strong>Posted On:</strong> {(new Date(guest.createdAt)).toLocaleString()}</p>
      <h3>{guest.name}</h3>
      <p><strong><Icon icon={mapMarkerAlt} /> </strong>{guest.from}</p>
      <p><strong>Memory:</strong> {guest.memory}</p>
      <p><strong>Wishes:</strong> {guest.wish}</p>
      <p><strong>Side:</strong> {guest.side}</p>
    </div>
    <Popup modal trigger={<button className="edit">Edit</button>}>
          {close => (
              <div>
              <button className="close" onClick={close}>
              &times;
              </button>
              <div className="header">
                Edit
              </div>
              <div className="content">
                <UpdateForm
                guest={guest}
                handleSubmit={handleUpdate}
                toggleForm={this.toggleForm}
                >
                </UpdateForm>
                <button
                  className="right"
                  onClick={()=>handleDelete(guest)}>
                  Delete
                </button>
              </div>
              </div>
          )}
    </Popup>
    </div>
    </>
    )
  }
}


export default Guest
