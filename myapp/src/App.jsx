import { useState } from 'react'
import './App.css'
import SimpleCounter from './components/simpleCounter'
import PureCounter from './components/PureCounter'

function App() {

  return (
    <>
      <PureCounter></PureCounter>
      <SimpleCounter></SimpleCounter>
    </>
  )
}

export default App
