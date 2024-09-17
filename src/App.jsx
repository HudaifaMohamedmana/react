import React from 'react'
import { useState } from 'react'
import './App.css'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import Display from './components/Display/display.jsx'

import Profile from './components/profile/profile.jsx'
import Button from './components/button/button.jsx'

function App() {
  const [counter, setCounter]=   useState(0);


  return (
    <>
    <Display counter={counter}/>
    <Button setCounter={setCounter} label="Increment" operation="increase" />
    <Button setCounter={setCounter} label="Decrement" operation="decrease" />

    </>
  )
}

export default App
