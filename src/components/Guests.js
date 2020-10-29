import React from 'react'
import Guest from './Guest.js'

function Guests (props) {
  const { guests, handleDelete, handleUpdate } = props
    return (
      <div>
        {guests.map(guest => <Guest
          key={guest.id}
          guest={guest}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          />)}
      </div>
    )
}

export default Guests
