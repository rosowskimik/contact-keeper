import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';
import uuid from 'uuid';

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: 'Harry Potter',
        email: 'hpotter@hogwarts.com',
        phone: '666-666-666',
        type: 'professional'
      },
      {
        id: 34,
        name: 'Golum Smeagul',
        email: 'gollum@lonely.com',
        phone: '333-333-333',
        type: 'private'
      },
      {
        id: 69,
        name: 'Karol Error',
        email: 'karolerror@gmail.com',
        phone: '002-345-124',
        type: 'private'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Remove contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  const { contacts, current, filtered } = state;

  return (
    <ContactContext.Provider
      value={{
        contacts,
        current,
        filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
