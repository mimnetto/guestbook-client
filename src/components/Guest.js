import React, {Component} from 'react'
import Form from './Form'

 class Guest extends Component {
   state = {
     formVisible: false
   }
   toggleForm = () => {
     this.setState({formVisible: !this.state.formVisible})
   }
  render () {
    const {guest, handleDelete, handleUpdate} = this.props
    return (
      <React.Fragment>
      { this.state.formVisible
      ? <Form
          guest={guest}
          handleSubmit={handleUpdate}
          toggleForm={this.toggleForm}
        >
          <button onClick={this.toggleForm}> Nevermind!</button>
        </Form>
      :       <div className="guest">
               <h3>{guest.name}</h3>
                 <p>{guest.from}</p>
                 <p>{guest.memory}</p>
                 <p>{guest.wish}</p>
                 <p>{guest.side}</p>
               <button onClick={()=>handleDelete(guest)}>X</button>
               <button onClick={this.toggleForm}> Edit this guest</button>
             </div>
      }

       </React.Fragment>
    )
  }
}

export default Guest
