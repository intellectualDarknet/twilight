import React from 'react'
import Body from '../body/body'
import Header from '../header/header'
import Modal from '../modal/modal'
import './ui.scss'


interface IUIProps {
  toggleModal: Function
  onInputChange: Function
  changeType: Function
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



  public onInputChange = (value: string) => {

  }

  render(): JSX.Element {
    return (
      <>
      <div className='ui'>
        <div className='ui__wrapper'>
          <Header showModal={this.props.toggleModal} onInputChange={this.onInputChange} />
          <Body changeType={this.props.changeType} />
        </div>
      </div>
      </>

    )
  }
}

export default UI
