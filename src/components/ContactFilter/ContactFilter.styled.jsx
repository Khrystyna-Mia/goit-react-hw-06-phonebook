import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin: 10px 0;

  font-family: 'Georgia', sans-serif;
  font-weight: 600;
  font-size: 18px;

  color: white;
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

export { Label, Input };
