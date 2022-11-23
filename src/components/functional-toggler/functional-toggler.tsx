import React, { useState } from 'react'
import './functional-toggler.scss'

function FuncToggler () {
  const [searchValue, setSearchValue] = useState(false)

  function checkPosition(event: React.SyntheticEvent) {
    (event.target as HTMLElement).closest('.toggler__button') ? null : setSearchValue((prev) => !prev)
  }

  return (
    <div onClick={(e) => checkPosition(e)} className='toggler'>
      <button className={(searchValue ? 'toggler__button-left' : 'toggler__button-right') + ' toggler__button'} ></button>
    </div>
  )
}

export default FuncToggler
