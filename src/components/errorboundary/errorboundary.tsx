import React, { ErrorInfo } from 'react'

// interface IReturnType {
//   hasError: boolean
// }

interface IErrorProps {
  sss?: string
  children: JSX.Element | JSX.Element[]
}

interface IErrorState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export default class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props)

    this.state = { hasError: false }
  }

  // getDerivedStateFromError(error: Error): IErrorState {
  //   console.log(1)
  //   return { hasError: true, error }
  // }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('handle', 2)
    console.log(error, errorInfo)
    this.setState({
      hasError: true,
      error,
    })
  }

  render(): JSX.Element | JSX.Element[] {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
