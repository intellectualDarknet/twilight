import React, { SyntheticEvent } from 'react'
import Button from '../button/button'
import Input from '../input/input'
import './addeditmovie.scss'

interface IAddEditMovieProps {
  class?: string
}

interface IAddEditMovieState {
  title: string,
  date: string,
  url: string
  rating: string
  genre: string
  runtime: string
  textarea: string
}

export default class AddEditMovie extends React.Component<IAddEditMovieProps, IAddEditMovieState> {
  constructor(props: IAddEditMovieProps) {
    super(props)

    this.state = {
      title: '',
      date: '',
      url:  '',
      rating: '',
      genre: '',
      runtime: '',
      textarea: '',
    }
  }

  public onInputChange = (event: SyntheticEvent): void => {
    const name = (event.target as HTMLInputElement | HTMLTextAreaElement).name
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    console.log(this.state)
  }

  public reset = (): void => {
    this.setState({
      title: '',
      date: '',
      url:  '',
      rating: '',
      genre: '',
      runtime: '',
      textarea: '',
    })
  }

  public submit = (): void => {
   // TODO request 
    this.reset()
  }

  render(): JSX.Element {
    return (
      <form className='addeditmovie'>
        <div className="addeditmovie__wrapper">
        <div className="addeditmovie__cross">
          <div className="addeditmovie__cross-line"></div>
          <div className="addeditmovie__cross-line"></div>
        </div>
        <div className='addeditmovie__content'>
          <div className='addeditmovie__edit'>EDIT MOVIE</div>
          <div className="addeditmovie__line">
          <Input
            name='title'
            class={'addeditmovie__title'}
            description='title'
            value={this.state.title}
            onInputChange={this.onInputChange}
            placeholder='title'
            type='input'
          />
          <Input
            name='date'
            class={'addeditmovie__date'}
            description='release date'
            value={this.state.date}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='date'
          />
          
          </div>
          
          <div className="addeditmovie__line">
          <Input
            name='url'
            class={'addeditmovie__url'}
            description='movie url'
            value={this.state.url}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          <Input
            name='rating'
            class={'addeditmovie__rating'}
            description='rating'
            value={this.state.rating}
            onInputChange={this.onInputChange}
            placeholder='rating'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__line">
          <Input
            name='genre'
            class={'addeditmovie__genre'}
            description='genre'
            value={this.state.genre}
            onInputChange={this.onInputChange}
            placeholder='genre'
            type='input'
          />
          <Input
            name='runtime'
            class={'addeditmovie__runtine'}
            description='runtime'
            value={this.state.runtime}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__area">
            <div className="addeditmovie__descr">overview</div>
            <textarea name='textarea' className='addeditmovie__textarea' onChange={(event) => this.onInputChange(event)}></textarea>
          </div>

          <div className="addeditmovie__buttons">
            <Button onClick={this.reset} type='hollow' text='reset' class='addeditmovie__button addeditmovie__reset' />
            <Button onClick={() => this.submit} type='full' text='submit' class='addeditmovie__button addeditmovie__submit' />
          </div>
        </div>
        </div>
    
      </form>
    )
  }
}

