import { Component } from 'react';
import './select.scss';

interface ISelectProps {
  array: Array<number | string>;
  class: string;
  onChangeSelect: Function;
  multiple?: boolean | undefined;
  name?: string;
  descr?: string;
  descrClass?: string;
  value?: string;
}
export default class Select extends Component<ISelectProps> {
  // constructor() {
  //   super()
  // }

  render(): JSX.Element {
    return (
      <div className='select'>
        {this.props.descr && <div className={this.props.descrClass}>{this.props.descr}</div>}
        <select
          value={this.props.value}
          name={this.props.name}
          onChange={(e) => {
            this.props.onChangeSelect(e);
          }}
          className={`${this.props.class}`}
        >
          {this.props.array.map((value, i) => (
            <option key={i} value={i !== 0 ? value : ''} className='select__option'>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
