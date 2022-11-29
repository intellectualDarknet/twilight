import React, { SyntheticEvent } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'

interface IAppState {
  search: string
  passingElement: JSX.Element | undefined
  type: string
  sorting: string
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { 
      search: '',
      passingElement: undefined,
      type: 'all',
      sorting: ''
    }
  }

  public changeSearchParams = (field: string, value: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
      }
    })
  }

  changeState = (value: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        search: value,
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

  changeSorting = (sort: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        sorting: sort,
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
        <UI changeSorting={this.changeSorting} changeType={this.changeType} toggleModal={this.toggleModal} onSearchChange={this.changeState} />
      </>
    )
  }
}
