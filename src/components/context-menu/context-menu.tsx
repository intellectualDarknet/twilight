import { Component } from 'react';
import { ItoContextMenuFunctions } from '../../interfaces/toContextMenuFunctions';
import classNames from 'classnames';
import './context-menu.scss';

interface IStyle {
  left: number;
  top: number;
}

interface IContextMenuProps {
  toContextMenuFunctions: ItoContextMenuFunctions;
  id: string | undefined;
  style: IStyle;
  changleGlobalState: Function;
}

interface IContextMenuState {
  firstOption: boolean;
  secondOption: boolean;
}

class ContextMenu extends Component<IContextMenuProps, IContextMenuState> {
  constructor(props: IContextMenuProps) {
    super(props);

    this.state = {
      firstOption: false,
      secondOption: false,
    };

    this.param = false;
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

  render(): JSX.Element {
    return (
      <div style={this.props.style} className='contextmenu'>
        <div
          data-name={'firstOption'}
          onMouseOut={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onMouseEnter={(e: React.MouseEvent) => {
            this.mouseEvent(e);
          }}
          onClick={() => {
            this.props.toContextMenuFunctions.editMovie(this.props.id);
          }}
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
            this.props.toContextMenuFunctions.deleteMovie(this.props.id);
          }}
          className={classNames('contextmenu__elem', {
            contextmenu__mouseenter: this.state.secondOption,
          })}
        >
          Delete
        </div>
      </div>
    );
  }
}

export default ContextMenu;
