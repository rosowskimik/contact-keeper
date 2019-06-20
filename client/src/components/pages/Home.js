import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const { token, loadUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(token);
    loadUser(token);
    //eslint-disable-next-line
  }, []);

  return (
    <div className='container grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
