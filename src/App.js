import React from 'react'
import axios from 'axios'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.PureComponent {
  state = {
    guests: []
  }
  componentDidMount = () => {
    this.getGuests()
  }
  getGuests = () => {
    axios
      .get('/guests')
      .then(response => this.setState({ guests: response.data }))
  }
  handleAdd = (event, formInputs) => {
  axios
    .post('/guests', formInputs)
    .then(jsonedGuest => this.setState({guests: [jsonedGuest.data, ...this.state.guests]}))
  }
  handleDelete = deletedGuest => {
    axios
      .delete(`/guests/${deletedGuest._id}`)
      .then(() => {
        this.setState((state) => {
          const guests = state.guests.filter((guest) => {
            return guest._id !== deletedGuest._id
          })
          return { guests }
        })
      })
  }
  handleUpdate = (formInputs) => {
    // event.preventDefault()
    console.log(formInputs);
    axios
      .put(`/guests/${formInputs.id}`, formInputs)
      .then((resp) => {
      
        this.getGuests()
      })
  }
  render() {
    return (
      <div className="App">
        <Header />
          <div className="container">
          <h1>Guestbook</h1>
          <Main
            guests={this.state.guests}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Footer handleSubmit={this.handleAdd} />
        </div>
      </div>

    )
  }
}

export default App
