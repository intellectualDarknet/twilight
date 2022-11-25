import React from 'react'
interface IPropsInput {
  placeholder?: string
  type?: string
}
interface IStateInput {
  state?: string
}

class Input extends React.Component<IPropsInput, IStateInput> {
  // constructor() {
  //   super()
  // }

  render(): JSX.Element {
    return (
      <>
        <div className='entry'>
          <div className='entry__descr'></div>
          <input placeholder={this.props.placeholder} type={this.props.type}></input>
        </div>
      </>
    )
  }
}

export default Input
