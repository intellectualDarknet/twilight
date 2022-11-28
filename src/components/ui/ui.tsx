import React from 'react'
import Body from '../body/body'
import Header from '../header/header'
import './ui.scss'

class UI extends React.Component {
  render(): JSX.Element {
    return (
      <div className='ui'>
        <div className='ui__wrapper'>
          <Header />
          <Body />
        </div>
      </div>
    )
  }
}

export default UI
