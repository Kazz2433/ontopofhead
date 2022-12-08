import React from 'react';
import styled from "styled-components";

const Input = props => {
  return (
    <InputDiv>
      <InputLabel>{props.id}{props.label}</InputLabel>
      <InputForm
        type={props.type}
        step={props.step}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  margin: 1rem 0;
`
const InputLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`
const InputForm = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  background: white;
  padding: 0.15rem 0.25rem;
  &:focus {
    outline: none;
    background: #e7e7e7;
    border-color: black;
  }
`

export default Input;
