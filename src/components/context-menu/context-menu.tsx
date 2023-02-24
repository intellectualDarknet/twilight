import { Component } from 'react';
import classNames from 'classnames';
import './context-menu.scss';
import ReactDOM from 'react-dom';

interface IStyle {
  left: number;
  top: number;
}

interface IContextMenuProps {
  id: string | undefined;
  style: IStyle;
  openModal: () => void;
  deleteMovie: (id: string) => void;
  findMovieForEditing: (id: string) => void;
}

interface IContextMenuState {
  firstOption: boolean;
  secondOption: boolean;
}

const contextMenuDiv = document.getElementById('contextMenu')!;

class ContextMenu extends Component<IContextMenuProps, IContextMenuState> {
  el: HTMLDivElement;
  constructor(props: IContextMenuProps) {
    super(props);

    this.state = {
      firstOption: false,
      secondOption: false,
    };

    this.param = false;

    this.el = document.createElement('div');
  }

  public param: boolean;

  public changeLocalState(field: string, value: boolean) {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  }

  public mouseEvent = (event: React.MouseEvent) => {
    event.type === 'mouseenter' ? (this.param = true) : (this.param = false);
    this.changeLocalState((event.target as HTMLDivElement).dataset.name!, this.param);
  };

  componentDidMount(): void {
    contextMenuDiv.appendChild(this.el);
  }

  componentWillUnmount(): void {
    contextMenuDiv.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div style={this.props.style} className='contextmenu'>
        <div
          data-name={'firstOption'}
          onMouseOut={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onMouseEnter={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onClick={() => this.props.findMovieForEditing(this.props.id!)}
          className={classNames('contextmenu__elem', {
            contextmenu__mouseenter: this.state.firstOption,
          })}
        >
          Edit
        </div>
        <div className='contextmenu__line'></div>
        <div
          data-name={'secondOption'}
          onMouseOut={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onMouseEnter={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onClick={() => {
            this.props.deleteMovie(this.props.id!);
          }}
          className={classNames('contextmenu__elem', {
            contextmenu__mouseenter: this.state.secondOption,
          })}
        >
          Delete
        </div>
      </div>,
      this.el,
    );
  }
}

export default ContextMenu;
