import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
    return (
      <footer>
        <p>Made with <FontAwesomeIcon icon={faHeart} /> by Mimi General Assembly SEIR 810 Moss</p>
      </footer>
    )
}
