import { nanoid } from 'nanoid';
import { Component, SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import { IFakeData } from '../../App';
import Button from '../button/button';
import Input from '../input/input';
import Select from '../select/select';

import './modal.scss';

interface IModalProps {
  updateMovie: (movie: IFakeData) => void;
  currentMovie: IFakeData | null;
  addMovie: (movie: IFakeData) => void;
  closeModal: () => void;
  onClickFunction: (event: SyntheticEvent) => void;
}

const defaultForm = {
  id: '',
  title: '',
  year: '',
  src: '',
  rating: '',
  type: '',
  duration: '',
  text: '',
};

interface IModalState {
  form: {
    id: string;
    title: string;
    year: string;
    src: string;
    rating: string;
    type: string;
    duration: string;
    text: string;
  };
}

const modalRoot = document.getElementById('modal')!;

class Modal extends Component<IModalProps, IModalState> {
  el: HTMLDivElement;
  constructor(props: IModalProps) {
    super(props);

    this.state = {
      form: this.props.currentMovie ?? { ...defaultForm, id: nanoid() },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submit = this.submit.bind(this);

    this.el = document.createElement('div');
  }

  public onInputChange(event: SyntheticEvent) {
    const name = (event.target as HTMLInputElement | HTMLTextAreaElement).name;
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.setState((state) => {
      return {
        form: {
          ...state.form,
          [name]: value,
        },
      };
    });
  }

  public resetForm() {
    this.setState({ form: { ...defaultForm, id: nanoid() } });
  }

  public submit(e: SyntheticEvent) {
    e.preventDefault();
    if (Object.values(this.state.form).includes('')) return;
    console.log(this.state.form);
    this.props.currentMovie != null
      ? this.props.updateMovie(this.state.form)
      : this.props.addMovie(this.state.form);
    this.resetForm();
    this.props.closeModal();
  }

  componentDidMount(): void {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount(): void {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <>
        <div className='blur' />
        <div className='modal' onClick={this.props.onClickFunction}>
          <div className='popup'>
            <form onSubmit={this.submit} className='addeditmovie'>
              <div className='addeditmovie__wrapper'>
                <div className='cross'>
                  <div className='addeditmovie__cross'>
                    <div className='addeditmovie__cross-line' />
                    <div className='addeditmovie__cross-line' />
                  </div>
                </div>

                <div className='addeditmovie__content'>
                  <div className='addeditmovie__edit'>
                    {this.props.currentMovie != null ? 'edit movie' : 'add movie'}
                  </div>
                  <div className='addeditmovie__line'>
                    <Input
                      name='title'
                      class={'addeditmovie__title'}
                      description='title'
                      value={this.state.form.title}
                      onInputChange={this.onInputChange}
                      placeholder='title'
                      type='input'
                    />
                    <Input
                      name='year'
                      class={'addeditmovie__date'}
                      description='release date'
                      value={this.state.form.year}
                      onInputChange={this.onInputChange}
                      placeholder='movie url'
                      type='date'
                    />
                  </div>

                  <div className='addeditmovie__line'>
                    <Input
                      name='src'
                      class={'addeditmovie__url'}
                      description='movie url'
                      value={this.state.form.src}
                      onInputChange={this.onInputChange}
                      placeholder='movie url'
                      type='input'
                    />
                    <Input
                      name='rating'
                      class={'addeditmovie__rating'}
                      description='rating'
                      value={this.state.form.rating}
                      onInputChange={this.onInputChange}
                      placeholder='rating'
                      type='input'
                    />
                  </div>

                  <div className='addeditmovie__line'>
                    <Select
                      name='type'
                      value={this.state.form.type}
                      descrClass={'entry__descr'}
                      descr={'genre'}
                      onChangeSelect={this.onInputChange}
                      multiple={true}
                      array={['genre', 'crime', 'documentary', 'horror', 'comedy']}
                      class='addeditmovie__genre'
                    />
                    <Input
                      name='duration'
                      class={'addeditmovie__runtine'}
                      description='runtime'
                      value={this.state.form.duration}
                      onInputChange={this.onInputChange}
                      placeholder='movie url'
                      type='input'
                    />
                  </div>

                  <div className='addeditmovie__area'>
                    <div className='addeditmovie__descr'>overview</div>
                    <textarea
                      value={this.state.form.text}
                      name='text'
                      className='addeditmovie__textarea'
                      onChange={this.onInputChange}
                    ></textarea>
                  </div>

                  <div className='addeditmovie__buttons'>
                    <Button
                      onClick={this.resetForm}
                      type='hollow'
                      text='reset'
                      class='addeditmovie__button addeditmovie__reset'
                    />
                    <Button
                      type='full'
                      text='submit'
                      buttonType={'submit'}
                      class='addeditmovie__button addeditmovie__submit'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>,
      this.el,
    );
  }
}

export default Modal;
