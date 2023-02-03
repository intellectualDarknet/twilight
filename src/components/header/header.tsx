import { Component, ChangeEvent } from 'react';
import AddEditMovie from '../addeditmovie/addeditmovie';
import Button from '../button/button';
import Input from '../input/input';
import { IFakeData } from '../../App';
import './header.scss';

interface IHeaderProps {
  changeGlobalState: Function;
  changeFilmsToShow: Function;
  state: IFakeData[] | undefined;
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
  }

  public changeSearchState = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => {
      return {
        search: event.target.value,
      };
    });
  };

  public addMovie(): void {
    this.props.changeGlobalState(
      'passingElement',
      <AddEditMovie
        changeFilmsToShow={this.props.changeFilmsToShow}
        data={this.props.state}
        changeGlobalState={this.props.changeGlobalState}
      />,
    );
  }

  render(): JSX.Element {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <div>
              <span className='header__logo-color'>netflix</span>roulette
            </div>
            <Button
              onClick={() => this.addMovie()}
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
            <Button
              onClick={() => this.props.changeGlobalState('search', this.state.search)}
              type='full'
              text='SEARCH'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
