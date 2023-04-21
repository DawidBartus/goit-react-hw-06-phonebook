import React from 'react';
import style from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { contacts, onClick, filter } = props;

  return (
    <ul className={style.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li className={style.list_element} key={contact.id}>
              <button
                className={style.delete}
                id={contact.id}
                onClick={onClick}
              >
                Del
              </button>
              <p className={style.contact_details}>
                {contact.name} {contact.number}
              </p>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactList;
