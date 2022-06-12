import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-right: 15px;
`;

const Span = styled.span`
  margin-right: 20px;

  color: white;
`;

const Button = styled.button`
  display: inline-block;
  padding: 8px;

  font-family: 'Georgia', sans-serif;
  font-size: 14px;

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

export { Wrapper, Text, Span, Button };
