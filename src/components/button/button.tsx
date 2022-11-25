import React from 'react'

interface IButtonProps {
  type: 'full' | 'hollow'
  text: string
  class?: string
}

class Button extends React.Component<IButtonProps, IButtonProps> {
  render(): JSX.Element {
    return (
      <button className={`button ${this.props.type === 'full' ? 'button_full' : 'button_hollow'} `}>
        {this.props.text}
      </button>
    )
  }
}

export default Button
