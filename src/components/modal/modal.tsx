import React from 'react'
import Congrats from '../congrats/congrats'
import Deleted from '../delete/deleted'
import Login from '../login/login'
import './modal.scss'

class Modal extends React.Component {
  render(): JSX.Element {
    return (
      <div className='modal'>
        <Deleted />
        {/* <Congrats /> */}
        {/* <Login />  */}
      </div>
    )
  }
}

export default Modal
