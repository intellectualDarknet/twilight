import React from 'react'
import Button from '../button/button'
import Input from '../input/input'
// interface Props {}

// interface State {}

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <span className='header__logo-color'>netflix</span>roulette
            <button className='header__button'>+ add movie</button>
          </div>
          <div className='header__writing'>FIND YOUR MOViE</div>
          <div className='header__main'>
            <Input placeholder={'What do you want to watch?'} />
            <Button type='full' text='SEARCH' />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
