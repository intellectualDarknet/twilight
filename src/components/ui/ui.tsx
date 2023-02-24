import { Component } from 'react';
import Body from '../body/body';
import Header from '../header/header';
import ToggledMovie from '../togged-movie/toggled-movie';
import { IFakeData } from '../../App';
import './ui.scss';

interface IUIProps {
  data?: IFakeData[];
  showMovieInfo: boolean;
  movieInfo: IFakeData | undefined;
  showMovieF: Function;

  changeType: (value: string) => void;
  changeSorting: (value: string) => void;

  openModal: () => void;
  findMovieForEditing: (id: string) => void;
  deleteMovie: (id: string) => void;
}

interface IUIState {
  passingElement: JSX.Element | undefined;
  dateToShow: IFakeData[] | undefined;
}

class UI extends Component<IUIProps, IUIState> {
  constructor(props: IUIProps) {
    super(props);

    this.state = {
      passingElement: undefined,
      dateToShow: this.props.data,
    };

    this.searchFilmByName = this.searchFilmByName.bind(this);
  }

  public searchFilmByName(naming: string) {
    const filteredMovie = this.props.data?.filter((elem) => elem.title.includes(naming));
    this.setState({
      dateToShow: filteredMovie,
    });
  }

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
        <div className='ui'>
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
                changeType={this.props.changeType}
                changeSorting={this.props.changeSorting}
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
