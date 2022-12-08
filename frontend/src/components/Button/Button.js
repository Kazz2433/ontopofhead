import React from 'react';
import styled from 'styled-components';

const Button = props => {
  return (
    <ButtonMain type={props.type}>
      {props.children}
    </ButtonMain>
  );
};

const ButtonMain = styled.button`
  font: inherit;
  padding: 0.5rem 2rem;
  background: #0028ab;
  border: 1px solid #0028ab;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active{
    background: #234edc;
    border-color: #234edc;
  }
`

export default Button;
