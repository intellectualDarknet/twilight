import React from 'react';
import './toggled-movie.scss';

interface IToggledMovieProps {
  src: string
  name: string
  type: string
  year: string
  rating: string
  duration: string
  text: string
}

interface IToggledMovieState {
  state?: string
}

class ToggledMovie extends React.Component<IToggledMovieProps, IToggledMovieState> {

  render(): JSX.Element {
    return (
      <div className='togglemovie'>
                  <div className='header__logo'>
            <div>
              <span className='header__logo-color'>netflix</span>roulette
            </div>
            <button>Search</button>
          </div>
          <div className="togglemovie__flex">
            <img className='movie__img' src={this.props.src} alt='alt' />
            <div className="togglemovie__container">
              <div className="togglemovie__upper">
                <div className="togglemovie__title">{this.props.name}</div>
                <div className="togglemovie__rating">{this.props.rating}</div>
              </div>
              <div>{this.props.type}</div>
              <div className="togglemovie__center">
                <div className='togglemovie__year'>{this.props.year}</div>
                <div className='togglemovie__duration'>{this.props.duration}</div>
              </div>
              <div className='togglemovie__text'>{this.props.text}</div>
            </div>
          </div>
      </div>
    )
  }
}

export default ToggledMovie
