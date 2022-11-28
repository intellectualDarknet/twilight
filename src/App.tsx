import React, { ReactElement } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'

export const App = (): ReactElement<any, any> => {
  return (
    <>
      <Modal />
      <UI />
    </>
  )
}

export default App
