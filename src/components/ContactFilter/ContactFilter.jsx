import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { filterContact } from '../../redux/contacts/contacts-actions';
import { nanoid } from 'nanoid';
import { Label, Input } from './ContactFilter.styled';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const filterId = nanoid();

  return (
    <>
      <Label htmlFor={filterId}>Find contacts by name</Label>

      <Input
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};

export default ContactFilter;
