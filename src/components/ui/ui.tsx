import React from 'react'
import Body from '../body/body'
import Header from '../header/header'
import './ui.scss'

interface IUIProps {
  onInputChange: Function
}

class UI extends React.Component<IUIProps> {
  render(): JSX.Element {
    return (
      <div className='ui'>
        <div className='ui__wrapper'>
          <Header onInputChange={this.props.onInputChange} />
          <Body />
        </div>
      </div>
    )
  }
}

export default UI
