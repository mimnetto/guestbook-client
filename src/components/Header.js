import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Sign from './Form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Header(props) {
    return (
  <header>
    <Jumbotron fluid>
      <Container className="sign-it">
          <Popup modal trigger={<button className="signing">Sign Guestbook</button>}>
            {close => (
            <div>
              <button className="close" onClick={close}>
                &times;
              </button>
            <div className="header"> Modal Title </div>
            <div className="content">
            <Sign handleSubmit={props.handleSubmit} />
            </div>
          </div>
          )}
          </Popup>
      </Container>
    </Jumbotron>
  </header>
    )
}
