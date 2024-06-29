import React, { useRef, useEffect } from 'react';

function SearchBar({ handleSubmit, searchTerm, handleChange, id, children, isFocused = true }) {
  const inputRef = useRef();
  useEffect(() => {
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  }, [isFocused]);
return (
  <section className='search-bar-container'>
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>
        {children}
        <br/>
        <input
        type='text'
        placeholder='Search-city'
        className='search-city'
        onChange={handleChange}
        value={searchTerm}
        ref={inputRef}
        />
      </label>
      <button type='submit' className='submit-search-city'>
        Search
      </button>
    </form>
  </section>
)
}

export default SearchBar;