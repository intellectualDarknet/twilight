import { MouseEvent, SyntheticEvent, Component } from 'react';
import Modal from './components/modal/modal';
import UI from './components/ui/ui';
import AddEditMovie from './components/addeditmovie/addeditmovie';
import Deleted from './components/delete/deleted';
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
  search: string;
  passingElement: JSX.Element | undefined;
  type: string;
  sorting: string;
  data?: IFakeData[];
  dataToShow?: IFakeData[];
  showContextMenu: boolean;
  showMovieInfo: boolean;
  MovieInfo: IFakeData | undefined;
  functionToSubmit: Function;
}

interface IAppProps {
  prop?: string;
}

interface IObj {
  search?: '';
  passingElement?: undefined;
  type?: 'all';
  sorting?: '';
  showContextMenu?: false;
  showMovieInfo?: false;
  MovieInfo?: undefined;
  functionToSubmit?: () => {};
}

export default class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      search: '',
      passingElement: undefined,
      type: 'all',
      sorting: '',
      showContextMenu: false,
      showMovieInfo: false,
      MovieInfo: undefined,
      functionToSubmit: () => {},
    };
  }

  public changeGlobalState = (...args: any[]) => {
    const obj: IObj = {};
    args.filter((elem: string, index) => {
      if (!(index % 2)) obj[elem as keyof IObj] = args[index + 1];
    });
    this.setState(
      (prev) => {
        return {
          ...prev,
          ...obj,
        };
      },
      () => {
        if (args.includes('search') || args.includes('sorting') || args.includes('type')) {
          console.log('includes');
          this.changeFilmsToShow();
        }
      },
    );
  };

  public changeFilmsToShow = () => {
    console.log(
      'search',
      this.state.search,
      'this.state.type',
      this.state.type,
      this.state.sorting,
      'this.state.sorting',
    );
    const filmsToShow = this.state.dataToShow!.filter(
      (singleFilm) =>
        singleFilm.title.includes(this.state.search) &&
        (singleFilm.type === this.state.type || this.state.type === 'all') &&
        (singleFilm.year === this.state.sorting || this.state.sorting === ''),
    );
    console.log('filmsToShow', filmsToShow);
    this.changeGlobalState('data', filmsToShow);
  };

  public onClickFunction = (event: SyntheticEvent): void => {
    const target = event.target as HTMLElement;
    if (target.closest('.popup') == null || target.closest('.cross') != null) {
      this.changeGlobalState('passingElement', undefined);
    }
  };

  public editMovie = (id: string) => {
    this.changeGlobalState(
      'passingElement',
      <AddEditMovie
        changeFilmsToShow={this.changeFilmsToShow}
        changeGlobalState={this.changeGlobalState}
        data={this.state.dataToShow}
        obj={this.state.dataToShow![+id]}
      />,
    );
  };

  public deleteMovie = (id: string) => {
    console.log('delete movie!');
    const dArray = this.state.dataToShow?.filter((elem) => elem.id != id);

    const deleteM = (): void => {
      this.changeGlobalState('passingElement', undefined, 'data', dArray);
    };
    this.changeGlobalState(
      'passingElement',
      <Deleted deleteEvent={deleteM} />,
      'functionToSubmit',
      deleteM,
    );

    this.changeFilmsToShow();
  };

  public showMovieInfo = (value?: IFakeData): void => {
    const showMovieInfoValue = value != null;
    const movieInfoValue = value != null ? value : this.state.MovieInfo;
    this.changeGlobalState('showMovieInfo', showMovieInfoValue, 'MovieInfo', movieInfoValue);
  };

  public globalOnClick = (event: MouseEvent) => {
    console.log(this.state.showContextMenu);
    if (this.state.showContextMenu) {
      this.changeGlobalState('showContextMenu', false);
    } else {
      const closest = (event.target as HTMLElement).closest('.movie');
      if (closest != null) {
        this.showMovieInfo(fakedata[+(closest as HTMLElement).dataset.id!]);
      }
    }
  };

  componentDidMount(): void {
    this.changeGlobalState('dataToShow', fakedata, 'data', fakedata);
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement != null && (
          <Modal
            onClickFunction={this.onClickFunction}
            passingElement={this.state.passingElement}
          />
        )}
        <UI
          changeFilmsToShow={this.changeFilmsToShow}
          changeGlobalState={this.changeGlobalState}
          movieInfo={this.state.MovieInfo}
          showMovieF={this.showMovieInfo}
          showMovieInfo={this.state.showMovieInfo}
          globalOnClick={this.globalOnClick}
          showContextMenu={this.state.showContextMenu}
          toContextMenuFunctions={{ editMovie: this.editMovie, deleteMovie: this.deleteMovie }}
          data={this.state.data}
        />
      </>
    );
  }
}
