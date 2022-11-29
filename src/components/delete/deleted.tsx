import React from 'react'
import Button from '../button/button'
import './deleted.scss'

class Deleted extends React.Component {
  render(): JSX.Element {
    return (
      <div className='deleted'>
        <div className="deleted__cross">
          <div className="deleted__cross-line"></div>
          <div className="deleted__cross-line"></div>
        </div>
        <div className="deleted__body">
          <div className="deleted__title">Delete movie</div>
          <div className="deleted__text">
            Are you sure you want to delete this movie? 
          </div>
        </div>
        <div className="deleted__container">
          <Button onClick={() => {}} type='full' text='confirm' class='deleted__button deleted__in' />
        </div>
      </div>
    )
  }
}

export default Deleted
