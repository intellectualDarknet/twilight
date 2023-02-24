import { Component, MouseEvent } from 'react';
import ContextMenu from '../context-menu/context-menu';
import Modes from '../modes/modes';
import Movie from '../movie/movie';
import { IFakeData } from '../../App';
import './body.scss';

interface IBodyProps {
  data?: IFakeData[];
  changeType: (value: string) => void;
  changeSorting: (value: string) => void;
  findMovieForEditing: (id: string) => void;
  openModal: () => void;
  deleteMovie: (id: string) => void;
}

interface IBodyState {
  showContextMenu: boolean;
  idToChange?: string;
  left: number;
  top: number;
}

class Body extends Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);

    this.state = {
      showContextMenu: false,
      idToChange: '0',
      left: 0,
      top: 0,
    };
  }

  public deleteMovie = (id: string) => {
    this.props.deleteMovie(id);
    this.setState({
      showContextMenu: false,
    });
  };

  public findMovieForEditing = (id: string) => {
    this.props.findMovieForEditing(id);
    this.setState({
      showContextMenu: false,
    });
  };

  public contextMenu = (event: MouseEvent<HTMLDivElement>, index: string) => {
    event.preventDefault();
    if (event.pageX == null && event.clientX != null) {
      const eventDoc = (event.target && (event.target as any).ownerDocument) || document;
      const doc = eventDoc.documentElement;
      const body = eventDoc.body;

      event.pageX =
        +event.clientX +
        +(doc?.scrollLeft || body?.scrollLeft || 0) -
        +(doc?.clientLeft || body?.clientLeft || 0);
      event.pageY =
        +event.clientY +
        +(doc?.scrollTop || body?.scrollTop || 0) -
        (doc?.clientTop || body?.clientTop || 0);
    }
    this.setState({
      showContextMenu: true,
      top: event.pageY,
      left: event.pageX,
      idToChange: index,
    });
  };

  render() {
    return (
      <>
        {this.state.showContextMenu && (
          <ContextMenu
            findMovieForEditing={this.findMovieForEditing}
            deleteMovie={this.deleteMovie}
            openModal={this.props.openModal}
            style={{ left: this.state.left, top: this.state.top }}
            id={this.state.idToChange}
          />
        )}
        <div className='body'>
          <Modes changeType={this.props.changeType} changeSorting={this.props.changeSorting} />
          <div className='body__underline'></div>
          <div className='body__found'>
            <span className='body__number'></span>
            movies found
          </div>
          <div className='body__movies'>
            {this.props.data?.map((elem) => (
              <Movie
                key={elem.id}
                index={(+elem.id).toString()}
                onContextMenu={this.contextMenu}
                year={elem.year}
                src={elem.src}
                name={elem.title}
                type={elem.type}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Body;
