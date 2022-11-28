import React from 'react'
import './button.scss'

interface IButtonProps {
  type: 'full' | 'hollow'
  text: string
  class?: string
}

class Button extends React.Component<IButtonProps, IButtonProps> {
  render(): JSX.Element {
    return (
      <button
        className={`button ${this.props.type === 'full' ? 'button_full' : 'button_hollow'} ${
          this.props.class !== undefined ? this.props.class : ''
        }`}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
