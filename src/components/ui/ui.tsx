import { Component } from 'react'
import Body from '../body/body'
import Header from '../header/header'
import ToggledMovie from '../togged-movie/toggled-movie'
import { ItoContextMenuFunctions } from '../../interfaces/toContextMenuFunctions'
import { IFakeData } from '../../App'
import './ui.scss'


interface IUIProps {
  data?: IFakeData[]
  toContextMenuFunctions: ItoContextMenuFunctions
  showContextMenu: boolean
  showMovieInfo: boolean
  globalOnClick: Function
  movieInfo: IFakeData | undefined
  showMovieF: Function
  changeGlobalState: Function
}

interface IUIState {
  passingElement: JSX.Element | undefined
}

class UI extends Component<IUIProps, IUIState> {
  constructor(props: IUIProps) {
    super(props)

    this.state = {
      passingElement: undefined
    }
  }

  render(): JSX.Element {
    return (
      <>
      <div onClick={(e) => this.props.globalOnClick(e)} className='ui'>
        <div className='ui__wrapper'>
          <>
          {this.props.showMovieInfo && <ToggledMovie showMovieInfo={this.props.showMovieF} elem={this.props.movieInfo}/>}
          {!this.props.showMovieInfo && <Header changeGlobalState={this.props.changeGlobalState} state={this.props.data} />}
          <Body changleGlobalState={this.props.changeGlobalState} showContextMenu={this.props.showContextMenu} ItoContextMenuFunctions={this.props.toContextMenuFunctions} data={this.props.data} />
          </>
        </div>
      </div>
    </>
    )
  }
}

export default UI
