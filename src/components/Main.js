import React from 'react'
import Guests from './Guests.js'

function Main(props) {
  const { guests, handleDelete, handleUpdate } = props
    return (
      <main>
        <Guests
         guests={guests}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main
