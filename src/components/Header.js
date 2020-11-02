import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Header(props) {
    return (
  <header>
    <Jumbotron fluid>
      <Container className="sign-it">
        <p>
          <Button variant="primary">
            Sign Guestbook
          </Button>
        </p>
      </Container>
    </Jumbotron>
  </header>
    )
}
