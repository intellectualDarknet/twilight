import React from 'react'

// interface Props {}

// interface State {}

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <span className='header__logo-color'>netflix</span>roulette
            <button className='header__button'>+ add movie</button>
          </div>
          <div className='header__writing'></div>
        </div>
      </div>
    )
  }
}

export default Header
