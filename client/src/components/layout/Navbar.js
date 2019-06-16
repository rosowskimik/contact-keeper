import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const { clearFilter } = useContext(ContactContext);

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={() => clearFilter()}>
            About
          </Link>
        </li>
        <li>
          <Link to='/register' onClick={() => clearFilter()}>
            Register
          </Link>
        </li>
        <li>
          <Link to='/login' onClick={() => clearFilter()}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
