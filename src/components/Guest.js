import React, {Component} from 'react'
import UpdateForm from './UpdateForm'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


 class Guest extends Component {
  render () {
    const {guest, handleDelete, handleUpdate} = this.props
    return (
    <>
    <div className="allGuest">
    <div className="guest">
      <h3>{guest.name}</h3>
      <p>{guest.from}</p>
      <p>{guest.memory}</p>
      <p>{guest.wish}</p>
      <p>{guest.side}</p>
    </div>
    <Popup modal trigger={<button>Edit</button>}>
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
