import PropTypes from 'prop-types';
import { Wrapper, Text, Span, Button } from './ContactElList.styled';

const ContactElList = ({ name, number, onDelete }) => {
  return (
    <Wrapper>
      <Text>{name}:</Text>
      <Span>{number}</Span>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </Wrapper>
  );
};

ContactElList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactElList;
