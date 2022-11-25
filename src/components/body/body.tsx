import Modes from '../modes/modes'

interface IBodyProps {}

interface IBodyState {}

class Body extends React.Component<IBodyProps, IBodyState> {
  // constructor(props: IBodyProps) {
  //   super(props);
  //   this.state = { :  };
  // }
  render() {
    return (
      <>
        <Modes />
      </>
    )
  }
}

export default Body
