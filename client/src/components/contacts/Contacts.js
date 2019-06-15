import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactFilter from './ContactFilter';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const { filtered, contacts } = useContext(ContactContext);

  return (
    <Fragment>
      <ContactFilter />
      {filtered
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
