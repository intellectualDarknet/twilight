import React, { SyntheticEvent } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'

interface IAppState {
  input: string
  passingElement: JSX.Element | undefined
  type: string
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { 
      input: '',
      passingElement: undefined,
      type: 'all'
    }
  }

  changeState = (value: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        input: value,
      }
    })
  }

  changeType = (movieType: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        type: movieType,
      }
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

  // restructure other modals!

  public onClickFunction = (event: SyntheticEvent):void => {
    const target = event.target as HTMLElement
    if (!target.closest('.popup') || target.closest('.cross')) {
      this.setState((prev) => {
        return {
          ...prev,
          passingElement: undefined 
        }
      })
    }
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement && <Modal onClickFunction={this.onClickFunction} passingElement={this.state.passingElement} toggleModal={this.toggleModal}/>}
        <UI changeType={this.changeType} toggleModal={this.toggleModal} onInputChange={this.changeState} />
      </>
    )
  }
}
