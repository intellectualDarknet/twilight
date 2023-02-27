import { Component } from 'react';
import Body from '../body/body';
import Header from '../header/header';
import ToggledMovie from '../togged-movie/toggled-movie';
import { IContextMenu, IFakeData } from '../../App';
import './ui.scss';

interface IUIProps {
  data?: IFakeData[];
  showMovieInfo: boolean;
  movieInfo: IFakeData | undefined;
  showMovieF: Function;
  changeContextMenu: (obj: IContextMenu) => void;
  openModal: () => void;
  findMovieForEditing: (id: string) => void;
  deleteMovie: (id: string) => void;
}

interface IUIState {
  passingElement: JSX.Element | undefined;
  dateToShow: IFakeData[] | undefined;
  type: string;
  sorting: string;
  search: string;
}

class UI extends Component<IUIProps, IUIState> {
  constructor(props: IUIProps) {
    super(props);

    this.state = {
      passingElement: undefined,
      dateToShow: this.props.data,
      search: '',
      type: 'all',
      sorting: '',
    };

    this.searchFilmByName = this.searchFilmByName.bind(this);
  }

  public changeMoviesToShow = (
    search: string = this.state.search,
    type: string = this.state.type,
    sorting: string = this.state.sorting,
  ) => {
    const filteredMovie = this.props.data
      ?.filter((elem: IFakeData) => elem.title.includes(search))
      .filter((elem: IFakeData) => (type === 'all' ? elem : elem.type.includes(type)))
      .filter((elem: IFakeData) => (sorting === '' ? elem : elem.year.includes(sorting)));

    this.setState({
      search,
      type,
      sorting,
      dateToShow: filteredMovie,
    });
    console.log(this.state);
  };

  public searchFilmByName(naming: string) {
    this.changeMoviesToShow(naming);
  }

  closeContextMenu = () => {
    this.props.changeContextMenu({ showContextMenu: false });
  };

  changeType = (type: string) => {
    this.changeMoviesToShow(undefined, type);
  };

  changeSorting = (year: string) => {
    this.changeMoviesToShow(undefined, undefined, year);
  };

  componentDidUpdate(prevProps: Readonly<IUIProps>): void {
    if (prevProps.data !== this.props.data) {
      this.setState({
        dateToShow: this.props.data,
      });
    }
  }

  render() {
    return (
      <>
        <div className='ui' onClick={this.closeContextMenu}>
          <div className='ui__wrapper'>
            <>
              {this.props.showMovieInfo && (
                <ToggledMovie showMovieInfo={this.props.showMovieF} elem={this.props.movieInfo} />
              )}
              {!this.props.showMovieInfo && (
                <Header
                  searchFilmByName={this.searchFilmByName}
                  openModal={this.props.openModal}
                  state={this.props.data}
                />
              )}
              <Body
                changeContextMenu={this.props.changeContextMenu}
                changeType={this.changeType}
                changeSorting={this.changeSorting}
                openModal={this.props.openModal}
                findMovieForEditing={this.props.findMovieForEditing}
                deleteMovie={this.props.deleteMovie}
                data={this.state.dateToShow}
              />
            </>
          </div>
        </div>
      </>
    );
  }
}

export default UI;
