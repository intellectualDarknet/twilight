import React from 'react'
import './select.scss'

interface ISelectProps {
  array: (number | string)[],
  class: string
  onChangeSelect: Function
}

interface ISelectState {

}

export default class Select extends React.Component<ISelectProps, ISelectState> {
  // constructor() {
  //   super()
  // }


  render(): JSX.Element {
    return (
      <>
        <select onChange={(e) => {this.props.onChangeSelect(e)}} className={`${this.props.class} select`}>
          {this.props.array.map((value, i) => <option key={i} value={value != 'Release date' ? value : ''} className='select__option'>{value}</option>)  }
        </select>
      </>
    )
  }
}

