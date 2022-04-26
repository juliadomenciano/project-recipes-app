import React from 'react';
import PropTypes from 'prop-types';
import ProfileContext from './ProfileContext';

function ProfileProvider({ children }) {
  const contextValue = {

  };
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
