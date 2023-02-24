import { SyntheticEvent, Component } from 'react';
import Modal from './components/modal/modal';
import UI from './components/ui/ui';
import { fakedata } from './assets/fakeResponse/fake';

export interface IFakeData {
  id: string;
  title: string;
  year: string;
  src: string;
  type: string;
  rating: string;
  duration: string;
  text: string;
}

interface IAppState {
  passingElement: JSX.Element | undefined;
  data: IFakeData[];
  showMovieInfo: boolean;
  MovieInfo: IFakeData | undefined;
  functionToSubmit: Function;
  isModalOpen: boolean;
  currentMovie: IFakeData | null;
}

interface IAppProps {
  prop?: string;
}

export default class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    // context
    // либо настройки либо первичные данные
    this.state = {
      passingElement: undefined,

      showMovieInfo: false,
      MovieInfo: undefined,
      functionToSubmit: Function,
      isModalOpen: false,
      data: [],
      currentMovie: null,
    };
  }

  public onClickFunction = (event: SyntheticEvent): void => {
    const target = event.target as HTMLElement;
    if (target.closest('.popup') == null || target.closest('.cross') != null) {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  public deleteMovie = (id: string) => {
    const newMovies = this.state.data.filter((elem) => elem.id !== id);
    this.setState({
      data: newMovies,
    });
  };

  public showMovieInfo = (value?: IFakeData): void => {
    const showMovieInfoValue = value != null;
    const movieInfoValue = value != null ? value : this.state.MovieInfo;
    this.setState({
      showMovieInfo: showMovieInfoValue,
      MovieInfo: movieInfoValue,
    });
  };

  componentDidMount(): void {
    this.setState({
      data: fakedata,
    });
  }

  public addMovie = (movie: IFakeData) => {
    const newDate: IFakeData[] = [...this.state.data, movie];
    this.setState({
      data: newDate,
    });
  };

  // change films to show
  public updateMovie = (movie: IFakeData) => {
    const newData = this.state.data.map((elem) => {
      if (elem.id === movie.id) {
        return movie;
      }
      return elem;
    });
    this.setState({
      data: newData,
      currentMovie: null,
    });
  };

  public findMovieForEditing = (id: string) => {
    const movieToEdit = this.state.data.find((elem) => elem.id === id);
    console.log('movieToEdit', movieToEdit);
    this.setState({
      currentMovie: movieToEdit!,
    });
    this.openModal();
  };

  public closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  public openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  public openModalWithData(id: string) {
    const movie = this.state.data.find((elem) => elem.id === id);
    this.setState({
      currentMovie: movie!,
    });
    this.openModal();
  }

  render() {
    return (
      <>
        <UI
          findMovieForEditing={this.findMovieForEditing}
          deleteMovie={this.deleteMovie}
          openModal={this.openModal}
          movieInfo={this.state.MovieInfo}
          showMovieF={this.showMovieInfo}
          showMovieInfo={this.state.showMovieInfo}
          data={this.state.data}
        />
        {this.state.isModalOpen ? (
          <Modal
            onClickFunction={this.onClickFunction}
            currentMovie={this.state.currentMovie}
            closeModal={this.closeModal}
            addMovie={this.addMovie}
            updateMovie={this.updateMovie}
          />
        ) : null}
      </>
    );
  }
}
