import React from 'react'
import axios from 'axios'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Navbar from "./components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'


import GlobalStyle from './styles/Global';

class App extends React.PureComponent {
  state = {
    guests: [],
    navbarOpen: false,
    modalClose: true,
  }

    handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }

  componentDidMount = () => {
    this.getGuests()
  }
  getGuests = () => {
    axios
      .get('https://young-guestbook-api.herokuapp.com/guests')
      .then(response => this.setState({ guests: response.data }))
  }
  handleAdd = (event, formInputs) => {
  axios
    .post('https://young-guestbook-api.herokuapp.com/guests', formInputs)
    .then(jsonedGuest => this.setState({guests: [jsonedGuest.data, ...this.state.guests]}))
  }
  handleDelete = deletedGuest => {
    axios
      .delete(`https://young-guestbook-api.herokuapp.com/guests/${deletedGuest._id}`)
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
      .put(`https://young-guestbook-api.herokuapp.com/guests/${formInputs.id}`, formInputs)
      .then((resp) => {

        this.getGuests()
      })
  }
  render() {
    return (
      <div className="App">
        <>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <GlobalStyle />
        </>
        <Header handleSubmit={this.handleAdd}/>
          <div className="guest-view">
          <h1>Guestbook</h1>
          <Main
            guests={this.state.guests}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
        <Footer />
      </div>

    )
  }
}

export default App
