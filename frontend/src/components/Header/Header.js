import React from 'react';
import styled from 'styled-components';

const Header = props => {
  return (
    <HeaderMain>
      <H1Center>MERN Shop</H1Center>
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0028ab;
`

const H1Center = styled.h1`
  margin: 0;
  color: white;
`

export default Header;
