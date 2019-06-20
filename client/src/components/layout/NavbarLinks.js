import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const NavbarLinks = () => {
  const { clearFilter, clearContacts } = useContext(ContactContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const onLogout = () => {
    clearFilter();
    clearContacts();
    logout();
  };

  const authUser = (
    <Fragment>
      <li>Hello {user && user.name}!</li>
      <li>
        <a href='#!' onClick={onLogout}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestUser = (
    <Fragment>
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
    </Fragment>
  );

  return isAuthenticated ? authUser : guestUser;
};

export default NavbarLinks;
