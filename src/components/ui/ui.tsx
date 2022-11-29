import React from 'react'
import Body from '../body/body'
import Header from '../header/header'
import Modal from '../modal/modal'
import './ui.scss'


interface IUIProps {
  toggleModal: Function
  onSearchChange: Function
  changeType: Function
  changeSorting: Function
}

interface IUIState {
  passingElement: JSX.Element | undefined
}

class UI extends React.Component<IUIProps, IUIState> {
  constructor(props: IUIProps) {
    super(props)

    this.state = {
      passingElement: undefined
    }
  }



  public onSearchChange = (value: string) => {

  }

  render(): JSX.Element {
    return (
      <>
      <div className='ui'>
        <div className='ui__wrapper'>
          <Header showModal={this.props.toggleModal} onSearchChange={this.onSearchChange} />
          <Body changeSorting={this.props.changeSorting} changeType={this.props.changeType} />
        </div>
      </div>
      </>

    )
  }
}

export default UI
