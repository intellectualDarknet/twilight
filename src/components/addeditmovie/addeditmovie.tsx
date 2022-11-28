import React from 'react'
import Button from '../button/button'
import Input from '../input/input'
import './addeditmovie.scss'

interface IAddEditMovieProps {
  class?: string
}

interface IAddEditMovieState {
  login: string
  password: string
}

export default class AddEditMovie extends React.Component<IAddEditMovieProps, IAddEditMovieState> {
  constructor(props: IAddEditMovieProps) {
    super(props)

    this.state = {
      login: '',
      password: '',
    }
  }

  public passwordChange = (value: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        password: value,
      }
    })
  }

  public loginChange = (value: string): void => {
    this.setState((prev) => {
      return {
        ...prev,
        login: value,
      }
    })
    console.log(this.state)
  }

  public reset = (): void => {
    this.setState({
      login: '',
      password: '',
    })
  }

  public submit = (): void => {
    this.setState({
      login: '',
      password: '',
    })
  }

  render(): JSX.Element {
    return (
      <form className='login'>
        <div className='login__wrapper'>
          <div className='login__login'>log in</div>
          <Input
            class={'login__input'}
            description='user id'
            value={this.state.login}
            onInputChange={this.loginChange}
            placeholder='login'
            type='input'
          />
          <Input
            class={'login__input'}
            description='password'
            value={this.state.password}
            onInputChange={this.passwordChange}
            placeholder='password'
            type='password'
          />
          <div className="login__button">
            <Button onClick={this.reset} type='hollow' text='reset' class='login__button login__reset' />
            <Button onClick={() => this.submit} type='full' text='log in' class='login__button login__in' />
          </div>
        </div>
      </form>
    )
  }
}

