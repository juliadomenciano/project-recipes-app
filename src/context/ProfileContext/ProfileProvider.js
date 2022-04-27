import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from './ProfileContext';

function ProfileProvider({ children }) {
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisablebutton] = useState(true);

  const contextValue = {
    userEmail,
    setEmail,
    password,
    setPassword,
    disableButton,
  };

  useEffect(() => {
    setDisablebutton(true);
  }, []);

  useEffect(() => {
    const numberSix = 6;
    const verifyPassword = password === undefined ? false : password.length > numberSix;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = emailRegex.test(userEmail);

    if (verifyPassword && verifyEmail) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [userEmail, password]);

  return (
    <ProfileContext.Provider value={ contextValue }>
      { children }
    </ProfileContext.Provider>

  );
}

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileProvider;
