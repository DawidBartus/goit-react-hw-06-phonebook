import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContact] = useState([]);
  const [filter, setFilter] = useState('');
  const storageRef = useRef(false);

  useEffect(() => {
    const parseLocalContacts = JSON.parse(localStorage.getItem('contacts'));
    parseLocalContacts && setContact([...parseLocalContacts]);
  }, []);

  useEffect(() => {
    if (storageRef.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      storageRef.current = true;
    }
  }, [contacts]);

  const updateContactList = props => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === props.name.toLowerCase()
      )
    ) {
      alert(`${props.name} is in your contact list`);
    } else {
      const newContact = contacts;
      newContact.push(props);
      setContact([...newContact]);
    }
  };

  const deleteContact = e => {
    const newContact = contacts.filter(contact => contact.id !== e.target.id);
    setContact(newContact);
  };

  const findContact = e => {
    setFilter(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: '#1C1C1C',
        padding: '10px 10px',
        margin: '10px auto',
        width: '412px',
        height: '915px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>Phonebook</h1>
      <ContactForm onSubmit={updateContactList} />

      <h2 style={{ color: 'white', margin: '10px' }}>Contacts</h2>
      <Filter onChange={findContact} />
      <ContactList
        contacts={contacts}
        onClick={deleteContact}
        filter={filter}
      />
    </div>
  );
};

export default App;
