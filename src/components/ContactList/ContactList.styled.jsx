import styled from 'styled-components';

const List = styled.ul`
  padding-left: 20px;

  font-weight: 500;
  font-size: 16px;

  color: red;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export { List, Item };
