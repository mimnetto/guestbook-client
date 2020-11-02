import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
    return (
      <footer>
        <p className="left">Made with <FontAwesomeIcon icon={faHeart} /> by Mimi General Assembly SEIR 810 Moss</p>
        <p className="right"><a className="white-text" href="https://github.com/mimnetto/guestbook-client" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></p>
      </footer>
    )
}
