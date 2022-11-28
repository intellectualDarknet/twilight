import React from 'react'
import Button from '../button/button'
import Input from '../input/input'
import './header.scss'

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <div>
              <span className='header__logo-color'>netflix</span>roulette
            </div>
            <Button type='hollow' text='+ add movie' class='header__button'></Button>
          </div>
          <div className='header__writing'>FIND YOUR MOVIE</div>
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
