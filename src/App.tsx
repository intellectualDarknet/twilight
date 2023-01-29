import React, { Key, SyntheticEvent } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'
import { fakedata } from './assets/fakeResponse/fake'
import AddEditMovie from './components/addeditmovie/addeditmovie'
import Deleted from './components/delete/deleted'

export interface IFakeData {
  id: string
  title: string
  year: string
  src: string
  type: string
  rating: string
  duration: string
  text: string
}

interface IAppState {
  search: string
  passingElement: JSX.Element | undefined
  type: string
  sorting: string
  data?: IFakeData[]
  showContextMenu: boolean
  showMovieInfo: boolean
  MovieInfo: IFakeData | undefined
  functionToSubmit: Function 
}

interface IAppProps {
  prop?: string
}

interface IObj {
  search?: '',
  passingElement?: undefined,
  type?: 'all',
  sorting?: '',
  showContextMenu?: false,
  showMovieInfo?: false,
  MovieInfo?: undefined,
  functionToSubmit?: () => {}
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { 
      search: '',
      passingElement: undefined,
      type: 'all',
      sorting: '',
      showContextMenu: false,
      showMovieInfo: false,
      MovieInfo: undefined,
      functionToSubmit: () => {}
    }
  }

  public changeGlobalState = (...args: any[]) => {
    const obj: IObj = {}
    args.filter((elem: string, index) => {if(!(index % 2)) obj[elem as keyof IObj] = args[index + 1]})
    this.setState((prev) => {
      return {
        ...prev,
        ...obj,
      }
    })
  }

  public changeSearchParams = (field: string, value: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
      }
    })
  }

  public onClickFunction = (event: SyntheticEvent):void => {
    const target = event.target as HTMLElement
    if (!target.closest('.popup') || target.closest('.cross')) {
      this.changeGlobalState('passingElement', undefined)
    }
  }

  public showContextMenu = (value: boolean) => {
    this.setState((prev) => {
      return {
        showContextMenu: true
      }
    })
  }

  public submitFunction = (data: IFakeData[]) => {
    this.setState((prev) => {
      return {
        data: data
      }
    })
  }

  public editMovie = (id: number) => {
    const value = this.state.data?.find((elem) => +elem.id === id)
    this.changeGlobalState('passingElement', <AddEditMovie changeGlobalState={this.changeGlobalState} state={this.state.data!} obj={this.state.data![id]} /> )
  }

  public deleteMovie = (id: number) => {

    const dArray = this.state.data?.filter((elem) => +elem.id != +id)

    const deleteM = ():void => {
      this.changeGlobalState('passingElement', undefined, 'data', dArray)
    }
    this.changeGlobalState('passingElement', <Deleted deleteEvent={deleteM}/>, 'functionToSubmit', deleteM)
  } 

  public showMovieInfo = (value?: IFakeData): void => {
    const showMovieInfoValue = value ? true : false
    const movieInfoValue = value ? value : this.state.MovieInfo 
    this.changeGlobalState('showMovieInfo', showMovieInfoValue, "MovieInfo", movieInfoValue )
  }

  public globalOnClick = (event: React.MouseEvent) => {
    console.log(this.state.showContextMenu)
    if (this.state.showContextMenu) {
      this.changeGlobalState('showContextMenu', false)
    } else {
      const closest = (event.target as HTMLElement).closest('.movie')
      if (closest) {
        this.showMovieInfo(fakedata[+((closest as HTMLElement).dataset.id! as string)])
      }
    }
  }

  componentDidMount(): void {
    this.changeGlobalState('data', fakedata)
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement && <Modal onClickFunction={this.onClickFunction} passingElement={this.state.passingElement}/>}
        <UI changeGlobalState={this.changeGlobalState} buttonSubmitFunction={this.submitFunction} movieInfo={this.state.MovieInfo} showMovieF={this.showMovieInfo} showMovieInfo={this.state.showMovieInfo} globalOnClick={this.globalOnClick} showContextMenu={this.state.showContextMenu} toContextMenuFunctions={{showContextMenu: this.showContextMenu, editMovie: this.editMovie, deleteMovie: this.deleteMovie}} changeSearchParams={this.changeSearchParams} data={this.state.data}/>
      </>
    )
  }
}
