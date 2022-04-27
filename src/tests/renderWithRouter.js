import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import DrinksProvider from '../context/DrinksContext/DrinksProvider';
import FoodsProvider from '../context/FoodsContext/FoodsProvider';
import ProfileProvider from '../context/ProfileContext/ProfileProvider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <DrinksProvider>
        <FoodsProvider>
          <ProfileProvider>
            <Router history={ history }>
              {component}
            </Router>
          </ProfileProvider>
        </FoodsProvider>
      </DrinksProvider>,
    ),
    history,
  });
};
export default renderWithRouter;
