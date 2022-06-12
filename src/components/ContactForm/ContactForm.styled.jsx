import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  margin: 20px 0;
  padding: 10px;

  border: 2px solid red;
  border-radius: 6px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;

  font-family: 'Georgia', sans-serif;
  font-size: 18px;

  color: red;
`;

const Input = styled.input`
  width: 200px;
  margin-bottom: 20px;
  padding: 5px 10px;

  border: 2px solid red;
  border-radius: 6px;
  outline: none;

  font-size: 16px;

  background-color: whitesmoke;
`;

const SubmitButton = styled.button`
  display: block;
  padding: 10px;

  font-family: 'Georgia', sans-serif;
  font-size: 16px;

  border: 2px solid red;
  border-radius: 8px;
  outline: none;

  color: red;
  background-color: white;

  transition: transform 200ms;

  &:hover,
  &:focus {
    color: white;
    background-color: slategray;
    border-color: white;
  }
`;

export { Form, Label, Input, SubmitButton };
