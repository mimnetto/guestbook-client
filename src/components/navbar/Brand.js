import React from 'react'
import styled from "styled-components";

import logo from "../../img/logo-min.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Colleen ♥ Blake" />
  )
}

export default Brand

const Image = styled.img`
  height: 50%;
  margin: 10px 0;
`;
