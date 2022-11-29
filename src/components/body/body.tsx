import React from 'react'
import Modes from '../modes/modes'
import './body.scss'

interface IBodyProps {
  props?: string
  changeType: Function
}

interface IBodyState {
  state?: string
}

class Body extends React.Component<IBodyProps, IBodyState> {
  // constructor(props: IBodyProps) {
  //   super(props);
  //   this.state = { :  };
  // }
  render(): JSX.Element {
    return (
      <div className='body'>
        <Modes changeType={this.props.changeType}/>
        <div className='body__underline'></div>
        <div className='body__found'>
          <span className='body__number'></span>
          movies found
        </div>
      </div>
    )
  }
}

export default Body
