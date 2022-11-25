import React from 'react'

interface IMovieProps {
  src: string
  name: string
  type: string
  year: number
}

interface IMovieState {
  state?: string
}

class IMovie extends React.Component<IMovieProps, IMovieState> {
  // constructor(props: IMovieProps) {
  //   super(props);
  //   this.state = { :  };
  // }

  render(): JSX.Element {
    return (
      <div className='movie'>
        <div className='movie__wrapper'>
          <img src={this.props.src} alt='alt' />
          <div className='movie__flex'>
            <div className='movie__title'>{this.props.name}</div>
            <div className='movie__year'>{this.props.year}</div>
          </div>
          <div className='movie__type'>{this.props.type}</div>
        </div>
      </div>
    )
  }
}

export default IMovie
