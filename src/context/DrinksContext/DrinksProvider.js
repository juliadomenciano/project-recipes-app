import React from 'react';
import PropTypes from 'prop-types';
import ProfileContext from './DrinksContext';

function DrinksProvider({ children }) {
  const contextValue = {

  };
  return (
    <ProfileContext.Provider value={ contextValue }>
      { children }
    </ProfileContext.Provider>

  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
