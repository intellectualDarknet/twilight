import React, { useState } from 'react'
import './func-search.scss'

function FuncSearch () {
  const [searchValue, setSearchValue] = useState('')

  return (
      <form className='func-search'>
        <input className='func-search__search' placeholder='What do you want to watch?' onChange={(e) => setSearchValue(e.target.value)}/>
        <button className='func-search__button'>Search</button>
      </form>
  )
}

export default FuncSearch;
