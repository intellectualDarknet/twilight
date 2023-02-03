import { Component, MouseEvent } from 'react';
import ContextMenu from '../context-menu/context-menu';
import Modes from '../modes/modes';
import Movie from '../movie/movie';
import { ItoContextMenuFunctions } from '../../interfaces/toContextMenuFunctions';
import { IFakeData } from '../../App';
import './body.scss';

interface IBodyProps {
  data?: IFakeData[];
  ItoContextMenuFunctions: ItoContextMenuFunctions;
  showContextMenu: boolean;
  changleGlobalState: Function;
}

interface IBodyState {
  idToChange?: string;
  left: number;
  top: number;
}

class Body extends Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);

    this.state = {
      idToChange: '0',
      left: 0,
      top: 0,
    };
  }

  public contextMenu = (event: MouseEvent<HTMLDivElement>, index: string) => {
    event.preventDefault();
    if (event.pageX == null && event.clientX != null) {
      const eventDoc = (event.target && (event.target as any).ownerDocument) || document;
      const doc = eventDoc.documentElement;
      const body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }
    this.setState((prev) => {
      return {
        ...prev,
        top: event.pageY,
        left: event.pageX,
        idToChange: index,
      };
    });

    this.props.changleGlobalState('showContextMenu', true);
  };

  render(): JSX.Element {
    return (
      <>
        {this.props.showContextMenu && (
          <ContextMenu
            changleGlobalState={this.props.changleGlobalState}
            style={{ left: this.state.left, top: this.state.top }}
            id={this.state.idToChange}
            toContextMenuFunctions={this.props.ItoContextMenuFunctions}
          />
        )}
        <div className='body'>
          <Modes changeGlobalState={this.props.changleGlobalState} />
          <div className='body__underline'></div>
          <div className='body__found'>
            <span className='body__number'></span>
            movies found
          </div>
          <div className='body__movies'>
            {this.props.data != null &&
              this.props.data.map((elem) => (
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
