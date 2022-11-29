import React from 'react'
import AddEditMovie from '../addeditmovie/addeditmovie'
import Congrats from '../congrats/congrats'
import Deleted from '../delete/deleted'
import Login from '../login/login'
import './modal.scss'

interface IModalProps {
  passingElement: JSX.Element | undefined
  toggleModal: Function
}

interface IModalState {
  element: boolean
}

class Modal extends React.Component<IModalProps, IModalState > {

  componentWillMount(): void {
    console.log(this.props.passingElement)
  }

  componentDidMount(): void {
    console.log(this.props.passingElement)
  }

  render(): JSX.Element {
    return (
      <>
        {this.props.passingElement &&
        <>
          <div className="blur"></div>
          <div className='modal'>
            {this.props.passingElement}
          </div>
        </>
        }
      </>
    )
  }
}

export default Modal
