import React from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'

interface IAppState {
  input: string
  passingElement: JSX.Element | undefined
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { input: '',
    passingElement:  undefined}
  }

  changeState = (value: string): void => {
    this.setState({
      input: value,
    })
  }

  public toggleModal = (value: JSX.Element): void => {
    this.setState((prev) => {
      return {
        ...prev,
        passingElement: value 
      }
    })
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement && <Modal passingElement={this.state.passingElement} toggleModal={this.toggleModal}/>}
        <UI toggleModal={this.toggleModal} onInputChange={this.changeState} />
      </>
    )
  }
}
