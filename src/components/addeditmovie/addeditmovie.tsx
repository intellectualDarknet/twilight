import { Component, SyntheticEvent } from 'react'
import Button from '../button/button'
import Input from '../input/input'
import Select from '../select/select'
import { IFakeData } from '../../App'
import { nanoid } from 'nanoid'
import './addeditmovie.scss'

interface IAddEditMovieProps {
  changeFilmsToShow: Function
  changeGlobalState: Function
  data?: IFakeData[]
  obj?: IFakeData
  class?: string
}

interface IAddEditMovieState {
  id: string
  title: string,
  year: string,
  src: string
  rating: string
  type: string
  duration: string
  text: string
}

interface localState {
  id?: string
  title?: string,
  year?: string,
  src?: string
  rating?: string
  type?: string
  duration?: string
  text?: string
}

export default class AddEditMovie extends Component<IAddEditMovieProps, IAddEditMovieState> {
  constructor(props: IAddEditMovieProps) {
    super(props)

    this.state = {
      id: this.props.obj?.id ?? '',
      title: this.props.obj?.title ?? '',
      year: this.props.obj?.year ?? '',
      src:  this.props.obj?.src ?? '',
      rating: this.props.obj?.rating ?? '',
      type: this.props.obj?.type ?? '',
      duration: this.props.obj?.duration ?? '',
      text: this.props.obj?.text ?? '',
    }
  }

  public changeLocalState = (...args: any[]) => {
    const localState: localState = {}
    args.filter((elem: string, index) => {if(!(index % 2)) localState[elem as keyof localState] = args[index + 1]})
    this.setState((prev) => {
      return {
        ...prev,
        ...localState,
      }
    })
  }

  public onInputChange = (event: SyntheticEvent): void => {
    console.log((event.target as HTMLSelectElement) )
    console.log("obj", this.state)
    const name = (event.target as HTMLInputElement | HTMLTextAreaElement).name
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value
    this.changeLocalState(name, value)
  }

  public reset = (): void => {
    this.changeLocalState("textarea", "","title", "", "date", "url", "", "rating", "", "genre", "", "runtime", "")
  }

  public componentDidMount(): void {
      if (!this.state.id) {
        this.changeLocalState('id', nanoid())
      }
  }

  public submit = (): void => {
    console.log(this.state)
    if (Object.values(this.state).includes('')) {
      console.log('not full')
    } else {
      let newData: IFakeData[];
      console.log('full')
      if (this.props.obj) {
        newData = this.props.data?.map((elem) => elem.id === this.props.obj?.id ? {...this.state} : elem)!
      } else {
        newData = [{...this.state}].concat([...this.props.data!]);
      }
      this.reset()
      this.props.changeGlobalState('dataToShow', newData)
      this.props.changeGlobalState('passingElement', undefined)
      this.props.changeFilmsToShow()
    }
  }

  render(): JSX.Element {
    return (
      <div className="popup">
        <form onSubmit={(e: SyntheticEvent) => {
          e.preventDefault()
          this.submit()
        }}className='addeditmovie'>
        <div className="addeditmovie__wrapper">
         <div className='cross'>
          <div className="addeditmovie__cross">
           <div className="addeditmovie__cross-line"></div>
           <div className="addeditmovie__cross-line"></div>
          </div>
        </div> 
      
        <div className='addeditmovie__content'>
          <div className='addeditmovie__edit'>{this.props.obj ? 'edit movie' : 'add movie'}</div>
          <div className="addeditmovie__line">
          <Input
            defaultValue={this.props.obj?.title}
            name='title'
            class={'addeditmovie__title'}
            description='title'
            value={this.state.title}
            onInputChange={this.onInputChange}
            placeholder='title'
            type='input'
          />
          <Input
            defaultValue={this.props.obj?.year}
            name='year'
            class={'addeditmovie__date'}
            description='release date'
            value={this.state.year}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='date'
          />
          
          </div>
          
          <div className="addeditmovie__line">
          <Input
            defaultValue={this.props.obj?.src}
            name='src'
            class={'addeditmovie__url'}
            description='movie url'
            value={this.state.src}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          <Input
            defaultValue={this.props.obj?.rating}
            name='rating'
            class={'addeditmovie__rating'}
            description='rating'
            value={this.state.rating}
            onInputChange={this.onInputChange}
            placeholder='rating'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__line">

          <Select name='type' value={this.state.type} descrClass={'entry__descr'} descr={'genre'} onChangeSelect={this.onInputChange} multiple={true} array={['genre', 'crime','documentary','horror','comedy']} class='addeditmovie__genre'/>
          <Input
            defaultValue={this.props.obj?.duration}
            name='duration'
            class={'addeditmovie__runtine'}
            description='runtime'
            value={this.state.duration}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__area">
            <div className="addeditmovie__descr">overview</div>
            <textarea defaultValue={this.props.obj?.text} value={this.state.text} name='text' className='addeditmovie__textarea' onChange={(event) => this.onInputChange(event)}></textarea>
          </div>

          <div className="addeditmovie__buttons">
            <Button onClick={this.reset} type='hollow' text='reset' class='addeditmovie__button addeditmovie__reset' />
            <Button onClick={this.submit} type='full' text='submit' class='addeditmovie__button addeditmovie__submit' />
          </div>
        </div>
        </div>
    
        </form>
      </div>
    )
  }
}

