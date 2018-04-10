import React from 'react'
import './search.css'
const Search = (props) => (
  <form
    className='search'
    onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef}
      type='text'
      placeholder='Busca tu video favorito'
      className='search-input'
      onChange={props.handleChange}
      value={props.value}
      />
  </form>
)

export default Search
