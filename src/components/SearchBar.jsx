import React from 'react';

export default function SearchBar() {
  return (
    <form>
      <label htmlFor="searchInput">
        <input
          name="searchInput"
          type="text"
          data-testid="search-input"
        />
      </label>
    </form>
  );
}
