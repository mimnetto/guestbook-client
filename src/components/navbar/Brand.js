import React from 'react'
import styled from "styled-components";

import logo from "../../img/logo-min.png";

const Brand = () => {
  return (
    <a href="#">
    <Image src={logo} alt="Company Logo" />
    </a>
  )
}

export default Brand

const Image = styled.img`
  height: 50%;
  margin: 10px 0;
`;
