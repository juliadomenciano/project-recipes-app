import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchDrinksResults, setSearchDrinksResults] = useState();

  const contextValue = {
    searchDrinksResults,
    setSearchDrinksResults,
  };
  return (
    <DrinksContext.Provider value={ contextValue }>
      { children }
    </DrinksContext.Provider>

  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
