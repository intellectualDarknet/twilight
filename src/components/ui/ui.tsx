import React from 'react'
import { IFakeData } from '../../App'
import { ItoContextMenuFunctions } from '../../interfaces/toContextMenuFunctions'
import Body from '../body/body'
import Header from '../header/header'
import ToggledMovie from '../togged-movie/toggled-movie'
import './ui.scss'


interface IUIProps {
  changeSearchParams: Function
  data?: IFakeData[]
  toContextMenuFunctions: ItoContextMenuFunctions
  showContextMenu: boolean
  showMovieInfo: boolean
  globalOnClick: Function
  buttonSubmitFunction: Function
  movieInfo: IFakeData | undefined
  showMovieF: Function
  changeGlobalState: Function
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

  render(): JSX.Element {
    return (
      <>
      <div onClick={(e) => this.props.globalOnClick(e)} className='ui'>
        <div className='ui__wrapper'>
          <>
          {this.props.showMovieInfo && <ToggledMovie showMovieInfo={this.props.showMovieF} elem={this.props.movieInfo}/>}
          {!this.props.showMovieInfo && <Header changeGlobalState={this.props.changeGlobalState} state={this.props.data} buttonSubmitFunction={this.props.buttonSubmitFunction} />}
          <Body changleGlobalState={this.props.changeGlobalState} showContextMenu={this.props.showContextMenu} ItoContextMenuFunctions={this.props.toContextMenuFunctions} data={this.props.data} changeSearchParams={this.props.changeSearchParams} />
          </>
        </div>
      </div>
    </>
    )
  }
}

export default UI
