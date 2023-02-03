import { Component, SyntheticEvent } from 'react';
import classNames from 'classnames';
import './button.scss';

interface IButtonProps {
  type: 'full' | 'hollow';
  text: string;
  class?: string;
  onClick: (e?: SyntheticEvent) => void;
  buttonType?: 'submit' | 'reset' | 'button';
}
class Button extends Component<IButtonProps> {
  render() {
    return (
      <button
        type={this.props.buttonType ? this.props.buttonType : 'button'}
        onClick={this.props.onClick}
        className={classNames(`button ${this.props.class ?? ''}`, {
          button_full: this.props.type === 'full',
          button_hollow: this.props.type !== 'full',
        })}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
