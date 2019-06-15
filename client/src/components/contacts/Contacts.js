import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactFilter from './ContactFilter';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const { filtered, contacts } = useContext(ContactContext);

  if (contacts.length === 0) {
    return (
      <h4 style={{ textAlign: 'center', marginTop: '1em' }}>
        Please add a contact
      </h4>
    );
  }

  return (
    <Fragment>
      <ContactFilter />
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={475} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={400} classNames='item'>
                <ContactItem key={contact.id} contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
