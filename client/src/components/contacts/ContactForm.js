import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const {
    addContact,
    updateContact,
    current,
    clearCurrent,
    clearFilter
  } = useContext(ContactContext);

  //Add/Update form state
  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'private'
      });
    }
  }, [current]);

  //Form state
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'private'
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const clearAll = e => {
    clearCurrent();
    clearFilter();
  };

  const onSubmit = e => {
    if (!current) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearFilter();
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'private'
    });
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {!current ? 'Add Contact' : 'Edit Contact'}
      </h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type:</h5>
      <label>
        <input
          type='radio'
          name='type'
          value='private'
          checked={type === 'private'}
          onChange={onChange}
        />{' '}
        Private{' '}
      </label>
      <label>
        <input
          type='radio'
          name='type'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />{' '}
        Professional
      </label>
      <input
        type='submit'
        value={!current ? 'Add Contact' : 'Update Contact'}
        className='btn btn-primary btn-block'
      />
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
