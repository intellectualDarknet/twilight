import React from 'react'

interface IModesProps {}

interface IModesState {}

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
            <div className='modes__type'>All</div>
            <div className='modes__type'>Documentary</div>
            <div className='modes__type'>Comedy</div>
            <div className='modes__type'>Horror</div>
            <div className='modes__type'>Crime</div>
          </div>
          <div className='modes__sort-n-date'>
            <div className='modes__type'>Sort</div>
            <div className='modes__sort'>Sort</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modes
