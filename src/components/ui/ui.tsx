import React from 'react'
import { IFakeData } from '../../App'
import { ItoContextMenuFunctions } from '../../interfaces/toContextMenuFunctions'
import Body from '../body/body'
import Header from '../header/header'
import './ui.scss'


interface IUIProps {
  toggleModal: Function
  changeSearchParams: Function
  data?: IFakeData[]
  toContextMenuFunctions: ItoContextMenuFunctions
  showContextMenu: boolean
}

interface IUIState {
  passingElement: JSX.Element | undefined
}

class UI extends React.Component<IUIProps, IUIState> {
  constructor(props: IUIProps) {
    super(props)

    this.state = {
      passingElement: undefined
    }
  }


  public onSearchChange = (value: string) => {
    this.props.changeSearchParams('search', value)
  }

  public mouseMove = (event: any) => {
    if (event.pageX == null && event.clientX != null) {
      const eventDoc = (event.target && event.target.ownerDocument) || document;
      const doc = eventDoc.documentElement;
      const body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    console.log(event.pageX, event.pageY)
  }

  render(): JSX.Element {
    return (
      <>
      <div onMouseMove={(e: any) => this.mouseMove(e)} className='ui'>
        <div className='ui__wrapper'>
          <Header showModal={this.props.toggleModal} onSearchChange={this.onSearchChange} />
          <Body showContextMenu={this.props.showContextMenu} ItoContextMenuFunctions={this.props.toContextMenuFunctions} data={this.props.data} changeSearchParams={this.props.changeSearchParams} />
        </div>
      </div>
      </>

    )
  }
}

export default UI
