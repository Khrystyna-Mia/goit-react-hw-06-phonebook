import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getvisibleContacts } from 'redux/contacts/contacts-selector';
import ContactElList from './ContactElList';
import { List, Item } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactElList
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
