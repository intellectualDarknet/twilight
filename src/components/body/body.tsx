import { Component, MouseEvent } from 'react';
import Modes from '../modes/modes';
import Movie from '../movie/movie';
import { IContextMenu, IFakeData } from '../../App';
import './body.scss';

interface IBodyProps {
  data?: IFakeData[];
  changeContextMenu: (obj: IContextMenu) => void;
  changeType: (value: string) => void;
  changeSorting: (value: string) => void;
  findMovieForEditing: (id: string) => void;
  openModal: () => void;
  deleteMovie: (id: string) => void;
}

class Body extends Component<IBodyProps> {
  public deleteMovie = (id: string) => {
    this.props.deleteMovie(id);
    this.props.changeContextMenu({ showContextMenu: false });
  };

  public findMovieForEditing = (id: string) => {
    this.props.findMovieForEditing(id);
    this.props.changeContextMenu({ showContextMenu: false });
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

    this.props.changeContextMenu({
      showContextMenu: true,
      top: event.pageY,
      left: event.pageX,
      idToChange: index,
    });
  };

  render() {
    return (
      <>
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
