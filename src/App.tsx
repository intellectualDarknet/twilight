import React from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'

interface IAppState {
  input: string
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { input: '' }
  }

  changeState = (value: string): void => {
    this.setState({
      input: value,
    })
    console.log(this.state)
  }

  render(): JSX.Element {
    return (
      <>
        <Modal />
        <UI onInputChange={this.changeState} />
      </>
    )
  }
}
