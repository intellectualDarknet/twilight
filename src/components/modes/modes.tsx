import React from 'react'
import './modes.scss'

interface IModesProps {
  props?: string
}

interface IModesState {
  state?: string
}

class Modes extends React.Component<IModesProps, IModesState> {
  // constructor(props: IModesProps) {
  //   super(props);
  //   this.state = { :  };
  // }
  render(): JSX.Element {
    return (
      <div className='modes'>
        <div className='modes__flex'>
          <div className='modes__types'>
            <span className='modes__type'>All</span>
            <span className='modes__type'>Documentary</span>
            <span className='modes__type'>Comedy</span>
            <span className='modes__type'>Horror</span>
            <span className='modes__type'>Crime</span>
          </div>
          <div className='modes__sort-n-date'>
            <span className='modes__type'>Sort By</span>
            <span className='modes__sort'>Release Date</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Modes
