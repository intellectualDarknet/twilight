import { Component, ChangeEvent } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import { IFakeData } from '../../App';
import './header.scss';

interface IHeaderProps {
  state: IFakeData[] | undefined;
  openModal: () => void;
  searchFilmByName: (naming: string) => void;
}

interface IHeaderState {
  search: string;
}

class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      search: '',
    };
    this.searchFilms = this.searchFilms.bind(this);
  }

  public changeSearchState = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
    });
  };

  public searchFilms(): void {
    this.props.searchFilmByName(this.state.search);
  }

  render() {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <div>
              <span className='header__logo-color'>netflix</span>roulette
            </div>
            <Button
              onClick={this.props.openModal}
              type='hollow'
              text='+ add movie'
              class='header__button'
            ></Button>
          </div>
          <div className='header__writing'>FIND YOUR MOVIE</div>
          <div className='header__main'>
            <Input
              onInputChange={this.changeSearchState}
              placeholder={'What do you want to watch?'}
            />
            <Button onClick={this.searchFilms} type='full' text='SEARCH' />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
