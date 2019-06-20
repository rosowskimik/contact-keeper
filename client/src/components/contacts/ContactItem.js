import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;

  const {
    deleteContact,
    setCurrent,
    clearCurrent,
    filterContacts
  } = useContext(ContactContext);

  const onClickDelete = e => {
    deleteContact(_id);
    filterContacts();
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          }`}
          style={{ float: 'right' }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onClickDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
