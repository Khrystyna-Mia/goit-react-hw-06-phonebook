import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <Text>Contacts</Text>
      <ContactFilter />
      <ContactList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 40px;
`;

const Title = styled.h1`
  font-family: 'Georgia', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.02em;

  color: white;
`;

const Text = styled.h2`
  font-family: 'Georgia', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.02em;

  color: white;
`;

export default App;
