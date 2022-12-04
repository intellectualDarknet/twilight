import React, { SyntheticEvent } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'
import { fakedata } from './assets/fakeResponse/fake'
import AddEditMovie from './components/addeditmovie/addeditmovie'
import Deleted from './components/delete/deleted'
import ContextMenu from './components/context-menu/context-menu'

export interface IFakeData {
  title: string
  year: string
  src: string
  type:  string
}

interface IAppState {
  search: string
  passingElement: JSX.Element | undefined
  type: string
  sorting: string
  data?: IFakeData[]
  showContextMenu: boolean
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { 
      search: '',
      passingElement: undefined,
      type: 'all',
      sorting: '',
      showContextMenu: false
    }
  }

  public changeSearchParams = (field: string, value: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
      }
    })
  }

  public toggleModal = (value: JSX.Element): void => {
    this.setState((prev) => {
      return {
        ...prev,
        passingElement: value 
      }
    })
  }

  public onClickFunction = (event: SyntheticEvent):void => {
    const target = event.target as HTMLElement
    if (!target.closest('.popup') || target.closest('.cross')) {
      this.setState((prev) => {
        return {
          ...prev,
          passingElement: undefined 
        }
      })
    }
  }

  public showContextMenu = (value: boolean) => {
    this.setState((prev) => {
      return {
        ...prev,
        showContextMenu: true
      }
    })
  }

  public editMovie = (id: number) => {
    this.toggleModal(<AddEditMovie />)
  }

  public deleteMovie = (id: number) => {
    this.toggleModal(<Deleted />)
  } 

  componentDidMount(): void {

    console.log(fakedata)
    this.setState((prev) => {
      return {
        ...prev,
        data: fakedata 
      }
    })
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement && <Modal onClickFunction={this.onClickFunction} passingElement={this.state.passingElement} toggleModal={this.toggleModal}/>}
        <UI showContextMenu={this.state.showContextMenu} toContextMenuFunctions={{showContextMenu: this.showContextMenu, editMovie: this.editMovie, deleteMovie: this.deleteMovie}} changeSearchParams={this.changeSearchParams} toggleModal={this.toggleModal} data={this.state.data}/>
      </>
    )
  }
}
