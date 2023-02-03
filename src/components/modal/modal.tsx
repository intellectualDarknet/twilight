import { Component } from 'react';

import './modal.scss';

interface IModalProps {
  passingElement: JSX.Element | undefined;
  onClickFunction: Function;
}

interface IModalState {
  element: boolean;
}

class Modal extends Component<IModalProps, IModalState> {
  render(): JSX.Element {
    return (
      <>
        {this.props.passingElement != null && (
          <>
            <div className='blur'></div>
            <div onClick={(e) => this.props.onClickFunction(e)} className='modal'>
              {this.props.passingElement}
            </div>
          </>
        )}
      </>
    );
  }
}

export default Modal;
