import React from 'react';
import PropTypes from 'prop-types';
import ProfileContext from './FoodsContext';

function FoodsProvider({ children }) {
  const contextValue = {

  };
  return (
    <ProfileContext.Provider value={ contextValue }>
      { children }
    </ProfileContext.Provider>

  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
